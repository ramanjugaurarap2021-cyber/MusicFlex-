# Contributing to MusicFlex

Thanks for helping! Everyone is welcome.

## Quick start
1. Fork this repository and clone your fork.
2. Run a local server in the project folder: `python3 -m http.server 8000`
3. Open `http://localhost:8000` (use your phone's browser size or Chrome DevTools mobile view).
4. Make your change, test it, then open a Pull Request.

## Good first ideas
- Connect a legal music source (Audius, Jamendo, Internet Archive).
- Add a new player style (see `player()` and the `ps-*` classes).
- Add a new progress bar style (see `bar()` in `app.js`).
- Translate the app into your language.

## Rules
- Keep the app one small, dependency-free web app (plain HTML, CSS, JavaScript).
- Do not add code that bypasses ads or copy protection of any service.
- Only use music, lyrics and images you have the right to use.
- If you change files listed in `sw.js`, change the `CACHE` name there.
