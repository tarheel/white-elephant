# White Elephant: The Game

A small browser game that doubles as the FAQ for our white elephant party. Everything is static files, served by GitHub Pages.

## Files

| File | What it is |
|---|---|
| `index.html` | The whole game. Replace it when there's a new version; your settings live elsewhere. |
| `custom.js` | Your settings: sounds, TV video, room music, and any text you want to change. |
| `custom.example.js` | Every setting you can put in `custom.js`, including a full copy of the game's text. Reference only. |
| `songs.js` | Your own songs, written by `tools/midi2song.py`. |
| `tools/midi2song.py` | Turns a MIDI file into a song for the game. |
| `.nojekyll` | Tells GitHub Pages to serve the files as they are. |

Sound and video files go in `media/`. A bare file name in `custom.js` (`"doorbell.mp3"`) is looked up there; change the folder with `mediaDir`.

## The FAQ quest

Guests collect one FAQ card at each of 11 stops, then play a practice exchange with Louis. The corner of the screen names the next stop, a dotted trail leads to it, and the GO button walks there. A stop also counts if a guest wanders into it early.

The stops, in order: the sign, the doorbell, the coat closet, the bathroom, Coraline, the Rules Lawyer, Charlotte, Moldover, the food (on the island), the bar (on the counter), Louis.

The card text is placeholder: every `[TBD]` in the `faqs` section of `custom.js` is a fact to fill in. Each stop has a `goal` (the hint), a `title` (the question), a `text` (the answer) and, for people, `says` (their line when the guest arrives).

Not on the quest, but marked with a "!" until opened: the cave, the piano, the TV and the fridge. The fridge holds only water (the cure for Moldover's joint) and a can of cat food. Feed Pompom the cat food and she leaves the office doorway. The laptop on the office desk is worth a look.

## Settings (`custom.js`)

Copy whatever you need from `custom.example.js` into `custom.js`. Anything you leave out keeps the game's built-in value. For example:

```js
window.CUSTOM = {
  sounds: {
    doorbell: "doorbell.mp3",
    yeti: ["roar1.mp3", "roar2.mp3", "roar3.mp3"]   // a list plays one at random
  },
  reach: { tv: { video: "tv.mp4" } },
  music: { "Kitchen": "disco" },
  people: { yeti: { name: "Rocky" } }
};
```

## Songs from MIDI

```sh
python3 tools/midi2song.py tune.mid --name disco --out songs.js
```

Running it again with the same name replaces that song; other songs are kept. Then pick the room in `custom.js` (`music: { "Kitchen": "disco" }`). Velocity, channel volume and expression carry over; `--flat` ignores them. `python3 tools/midi2song.py --help` lists the other options.

## Publishing

GitHub Pages serves the `main` branch from the repository root. Push to `main` and the site updates within a minute or two.

Test locally with any static server (the game loads `custom.js` and `songs.js`, which browsers won't do from `file://` in every case):

```sh
python3 -m http.server 8000   # then open http://localhost:8000
```
