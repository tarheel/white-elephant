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

Put sound and video files next to `index.html` (or in a folder, e.g. `media/`, and use paths like `"media/doorbell.mp3"` in `custom.js`).

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
