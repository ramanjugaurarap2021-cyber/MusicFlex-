# MusicFlex

An open-source music player app UI with **liquid glass**, **lyrics** and **five player styles**. Plain HTML, CSS and JavaScript. No build step, no dependencies. Installs on Android as an app (PWA).

> Version 1.0.0 · Released 2026 · Developer: **Ramanju Gaurarap**

## Features
- iOS-style floating glass menu bar, top bar and mini player that shrink when you scroll
- **Glass Studio**: Liquid, Frosted, Clear and Solid materials, with transparency and blur sliders
- **5 player styles**, each with its own progress bar:
  - iOS (line), Pixel (snake), Vinyl (groove), Neon (waveform), Orbit (ring around the cover)
- Synced lyrics with auto-scroll and tap-to-seek
- Options panel while playing: speed, sleep timer, equalizer, lyrics size, glass transparency
- Home, Search, Library and Profile tabs, with local demo login
- Many settings (playback, audio, player, data, experience), saved on the device
- Works offline and installs on Android

## Run it
Open `index.html` in a browser, or run a small server (needed for install and offline mode):

```bash
python3 -m http.server 8000
# then open http://localhost:8000
```

## Put it online (free)
1. Push this repo to GitHub.
2. Go to **Settings > Pages**, choose **Deploy from a branch**, branch `main`, folder `/ (root)`, then Save.
3. Open the link GitHub gives you in Chrome on Android and tap **Install app**.

## Project files
| File | What it does |
|---|---|
| `index.html` | App page |
| `style.css` | All styles, including the glass system |
| `app.js` | All app logic: songs, lyrics, players, settings |
| `manifest.webmanifest`, `sw.js`, `icons/` | Android install and offline mode |

## Music source (important)
This version uses a **demo library** of made-up songs, and playback is simulated (no real sound yet). The song list is the `S` array in `app.js`.

To add real music, use a source that is legal to stream, for example Audius, Jamendo or the Internet Archive, or songs you own. Replace the `S` list with your source's data and play the audio with an `<audio>` element.

MusicFlex does **not** remove ads from YouTube or any other service, and this project does not accept code that does. It is not affiliated with YouTube, Google or Apple.

## Lyrics
The lyrics in this project are original demo lyrics written for the made-up songs.

## License
MIT. See [LICENSE](LICENSE).
