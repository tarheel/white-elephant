#!/usr/bin/env python3
"""
midi2song.py - convert a MIDI file into a song for White Elephant: The Game.

  python3 midi2song.py tune.mid                     # prints the song
  python3 midi2song.py tune.mid --name disco > out.txt

Easiest: let it write the song into songs.js (next to the game's HTML file):
  python3 midi2song.py tune.mid --name disco --out songs.js
Run it again for each song; a song with the same name is replaced, the others are kept.
Then, in custom.js, play it in a room:   music: { "Kitchen": "disco" }

Without --out it just prints the song, for pasting inside  songs: { ... }  in custom.js.

No extra installs needed (plain Python 3).

What to expect: the game plays notes on a grid of sixteenth notes with a handful of
simple synth sounds. Timing is snapped to that grid (triplets and swing get squared off),
each MIDI track becomes one to three "parts", and drums map onto six drum sounds.
Short, simple tunes convert best. The song loops forever, so trim with --bars.
"""
import argparse, json, struct, sys

NAMES = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"]
DRUMS = {35: "k", 36: "k", 38: "s", 40: "s", 37: "c", 39: "c", 42: "h", 44: "h", 46: "r", 49: "r", 51: "r", 52: "r", 53: "r", 55: "r", 57: "r", 59: "r",
         41: "p", 43: "p", 45: "p", 47: "p", 48: "p", 50: "p"}
INSTS = ["sax", "bell", "ep", "organ", "harp", "marimba", "sq", "bass", "pad", "sitar"]

def inst_for(program, avg_pitch):
    if avg_pitch < 48: return "bass"
    if program in (6, 46) or 24 <= program <= 31: return "harp"
    if program in (12, 13, 114, 115): return "marimba"
    if 8 <= program <= 15: return "bell"
    if 16 <= program <= 23: return "organ"
    if 32 <= program <= 39: return "bass"
    if 40 <= program <= 55 or 88 <= program <= 95: return "pad"
    if 56 <= program <= 71: return "sax"
    if 72 <= program <= 87: return "sq"
    if program == 104: return "sitar"
    return "ep"

def read_midi(path):
    d = open(path, "rb").read()
    if d[:4] != b"MThd": sys.exit("Not a MIDI file: " + path)
    hlen, fmt, ntr, div = struct.unpack(">IHHH", d[4:14])
    if div & 0x8000: sys.exit("This MIDI file uses SMPTE timing, which isn't supported.")
    pos, notes, tempo, tracks, ccs = 8 + hlen, [], None, 0, []   # notes: (start_tick, end_tick, pitch, channel, track, program, velocity); ccs: (tick, channel, controller, value)
    while pos < len(d) - 8 and tracks < ntr:
        if d[pos:pos + 4] != b"MTrk":
            pos += 8 + struct.unpack(">I", d[pos + 4:pos + 8])[0]; continue
        end = pos + 8 + struct.unpack(">I", d[pos + 4:pos + 8])[0]; p = pos + 8; tick = 0; status = 0; on = {}; prog = {}
        def varlen():
            nonlocal p
            v = 0
            while True:
                b = d[p]; p += 1; v = (v << 7) | (b & 0x7F)
                if not b & 0x80: return v
        while p < end:
            tick += varlen(); b = d[p]
            if b == 0xFF:
                kind = d[p + 1]; p += 2; n = varlen()
                if kind == 0x51 and tempo is None: tempo = int.from_bytes(d[p:p + 3], "big")
                p += n; continue
            if b in (0xF0, 0xF7): p += 1; n = varlen(); p += n; continue
            if b & 0x80: status = b; p += 1
            hi, ch = status & 0xF0, status & 0x0F
            if hi in (0xC0, 0xD0):
                if hi == 0xC0: prog[ch] = d[p]
                p += 1; continue
            a, v = d[p], d[p + 1]; p += 2
            if hi == 0x90 and v > 0: on.setdefault((ch, a), []).append((tick, v))
            elif hi == 0x80 or (hi == 0x90 and v == 0):
                if on.get((ch, a)): t0, vel = on[(ch, a)].pop(0); notes.append((t0, tick, a, ch, tracks, prog.get(ch, 0), vel))
            elif hi == 0xB0 and a in (7, 11): ccs.append((tick, ch, a, v))      # channel volume, expression
            elif hi == 0xB0 and a == 121: ccs.append((tick, ch, 7, 100)); ccs.append((tick, ch, 11, 127))   # reset all controllers
        pos = end; tracks += 1
    return div, (tempo or 500000), notes, sorted(ccs)

def name(p): return NAMES[p % 12] + str(p // 12 - 1)

def main():
    ap = argparse.ArgumentParser(description="Convert a MIDI file into a song for White Elephant: The Game.")
    ap.add_argument("midi"); ap.add_argument("--name", default="mysong", help="name of the song in the game (letters only)")
    ap.add_argument("--bars", type=int, default=0, help="keep only this many 4/4 bars from the start (0 = whole file)")
    ap.add_argument("--skip-bars", type=int, default=0, help="skip this many bars at the start")
    ap.add_argument("--transpose", type=int, default=0, help="shift every note by this many semitones")
    ap.add_argument("--voices", type=int, default=0, help="most overlapping lines to keep per MIDI track (default: no limit)")
    ap.add_argument("--out", default="", help="write the song into this file (e.g. songs.js), keeping the songs already in it")
    ap.add_argument("--flat", action="store_true", help="ignore loudness (velocity, volume, expression): every note at one level")
    ap.add_argument("--no-drums", action="store_true"); ap.add_argument("--bpm", type=float, default=0, help="override the tempo")
    ap.add_argument("--inst", default="", help="force instruments, in order, comma separated. Choices: " + ", ".join(INSTS))
    a = ap.parse_args()
    div, tempo, notes, ccs = read_midi(a.midi)
    if not notes: sys.exit("No notes found in " + a.midi)
    step = div / 4.0; q = lambda t: int(round(t / step))
    first = min(q(n[0]) for n in notes); first -= first % 16; first += a.skip_bars * 16
    limit = a.bars * 16 if a.bars else None
    ev = []
    for s, e, p, ch, tr, pg, vel in notes:
        s2, e2 = q(s) - first, max(q(s) + 1, q(e)) - first
        if s2 < 0 or (limit is not None and s2 >= limit): continue
        if limit is not None: e2 = min(e2, limit)
        ev.append((s2, e2, p, ch, tr, pg, vel, s))
    if not ev: sys.exit("Nothing left after --bars/--skip-bars.")
    total = max(e for _, e, *_ in ev); total = limit or ((total + 15) // 16) * 16
    # Loudness, the General MIDI way: amplitude = (velocity/127)^2 x (volume/127)^2 x (expression/127)^2
    per_ch = {}
    for tick, ch, ctl, val in ccs: per_ch.setdefault(ch, []).append((tick, ctl, val))
    def level(ch, tick):                                                 # channel volume x expression at a tick
        c7, c11 = 100, 127
        for t0, ctl, val in per_ch.get(ch, []):
            if t0 > tick: break
            if ctl == 7: c7 = val
            else: c11 = val
        return (c7 / 127) ** 2 * (c11 / 127) ** 2
    def curve(ch):                                                       # [[step, level], ...] across the song window
        start_tick = (first) * step; pts = [[0, level(ch, start_tick)]]
        for t0, ctl, val in per_ch.get(ch, []):
            st = round((t0 / step - first) * 8) / 8
            if st <= 0 or st >= total: continue
            lv = level(ch, t0)
            if abs(lv - pts[-1][1]) < .004: continue
            if pts[-1][0] == st: pts[-1][1] = lv
            else: pts.append([st, lv])
        return pts
    vf = lambda vel: 1 if a.flat else (vel / 127) ** 2
    lv_at = lambda ch, tick: 1 if a.flat else level(ch, tick)
    peak = max([vf(n[6]) * lv_at(n[3], n[7]) for n in ev if n[3] != 9] or [1]) or 1
    dpeak = max([vf(n[6]) * lv_at(n[3], n[7]) for n in ev if n[3] == 9] or [1]) or 1
    groups = {}
    for n in ev:
        if n[3] != 9: groups.setdefault((n[4], n[3]), []).append(n)
    forced = [x.strip() for x in a.inst.split(",") if x.strip()]
    for f in forced:
        if f not in INSTS: sys.exit("Unknown instrument '%s'. Choices: %s" % (f, ", ".join(INSTS)))
    parts = []
    for gi, (key, ns) in enumerate(sorted(groups.items())):
        ns.sort(key=lambda n: (n[0], -n[2])); voices = []            # each voice: list of [start, end, [pitches]]
        for s, e, p, ch, tr, pg, vel, tick in ns:
            p += a.transpose; f = vf(vel)
            for v in voices:
                if v[-1][0] == s and v[-1][1] == e and p not in v[-1][2]: v[-1][2].append(p); v[-1][3] = max(v[-1][3], f); break   # same start and length: a chord
            else:
                for v in voices:
                    if v[-1][1] <= s: v.append([s, e, [p], f]); break
                else:
                    if a.voices <= 0 or len(voices) < a.voices: voices.append([[s, e, [p], f]])
                    else:                                                 # out of voices: cut the top line's previous note short
                        v = voices[0]
                        if v[-1][0] < s: v[-1][1] = s; v.append([s, e, [p], f])
        avg = sum(n[2] for n in ns) / len(ns) + a.transpose
        inst = forced[gi] if gi < len(forced) else inst_for(ns[0][5], avg)
        cv = [[0, 1]] if a.flat else curve(key[1])
        for vi, v in enumerate(voices):
            toks, at = [], 0
            for s, e, ps, f in v:
                if s > at: toks.append("r/%d" % (s - at))
                toks.append("+".join(name(p) for p in sorted(ps)) + "/%d" % (e - s) + ("" if f > .995 else "@%.2f" % f)); at = e
            if at < total: toks.append("r/%d" % (total - at))
            vol = (.2 if inst == "bass" else .14) / peak
            if a.flat: vol = .2 if inst == "bass" else (.14 if vi == 0 else .09)
            cc = ""
            if len(cv) == 1: vol *= cv[0][1]                                 # steady volume: fold it into the part
            else: cc = ", cc: [" + ", ".join("[%g, %.3f]" % (st, lv) for st, lv in cv) + "]"
            parts.append('    { inst: "%s", vol: %.4f%s, ev: "%s" }' % (inst, vol, cc, " ".join(toks)))
    drums = {}
    if not a.no_drums:
        for s, e, p, ch, *_ in ev:
            if ch == 9 and p in DRUMS and s < total:
                row = drums.setdefault(DRUMS[p], ["."] * total); lv = 1 if a.flat else vf(_[2]) * lv_at(ch, _[3]) / dpeak
                c = "x" if lv >= .95 else str(max(1, min(9, round(lv * 10))))
                if row[s] == "." or c == "x" or (row[s] != "x" and c > row[s]): row[s] = c
    def shortest(pat):                                                   # "x...x...x...x..." -> "x..."
        s = "".join(pat)
        for n in (16, 32, 64, 128):
            if len(s) % n == 0 and s == s[:n] * (len(s) // n): return s[:n]
        return s
    bpm = a.bpm or round(60000000 / tempo)
    out = ["  %s: { bpm: %g, vol: .5, parts: [" % (a.name, bpm), ",\n".join(parts) + " ]" + ("," if drums else " },")]
    if drums: out.append("    drums: { " + ", ".join('%s: "%s"' % (k, shortest(v)) for k, v in sorted(drums.items())) + ", vol: .5 } },")
    info = "%d part(s), %d bars, %g bpm%s" % (len(parts), total // 16, bpm, ", with drums" if drums else "")
    if not a.out:
        print("\n".join(out)); print(info + ". Paste the block above inside  songs: { }  in custom.js" , file=sys.stderr); return
    body = "\n".join(out).rstrip().rstrip(",")
    body = body[body.index("{"):]                                     # just the song object
    block = "// --- song: %s ---\nCUSTOM_SONGS[%s] = %s;\n// --- end: %s ---\n" % (a.name, json.dumps(a.name), body, a.name)
    head = "/* songs.js: your own songs for White Elephant: The Game. Made with midi2song.py; edit freely.\n   Pick which room plays which song in custom.js:  music: { \"Kitchen\": \"disco\" } */\nwindow.CUSTOM_SONGS = window.CUSTOM_SONGS || {};\n\n"
    try: old = open(a.out).read()
    except FileNotFoundError: old = head
    if "window.CUSTOM_SONGS" not in old: old = head + old
    start, end = "// --- song: %s ---" % a.name, "// --- end: %s ---\n" % a.name
    if start in old:
        i = old.index(start); j = old.index(end, i) + len(end); new = old[:i] + block + old[j:]; verb = "Replaced"
    else:
        new = old.rstrip("\n") + "\n\n" + block; verb = "Added"
    open(a.out, "w").write(new)
    print("%s \"%s\" in %s (%s)." % (verb, a.name, a.out, info), file=sys.stderr)

if __name__ == "__main__": main()
