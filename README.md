# Dranix — Web Press Kit

🔗 **Live site:** [dranixband.github.io/web-press-kit](https://dranixband.github.io/web-press-kit/)

Single-page electronic press kit for the metal band **Dranix**. Built with plain HTML, CSS and vanilla JS — no build step, no framework, deployed as a static site via GitHub Pages.

## Contents

- Hero with band logo and photo background
- Biography and quick facts
- Press photo gallery with lightbox (desktop grid / mobile swipe carousel)
- Embedded music videos and Spotify player
- Press coverage
- Downloadable EPK assets (logo pack, photos, bio, technical rider)
- Booking contact
- PL / EN language switcher (default: Polish)

## Structure

```
index.html
css/styles.css
js/script.js
assets/
  logo/        — band logo (SVG)
  photos/      — web-optimized photos + full/ (originals)
  press-kit/   — downloadable bio & rider PDFs
```

## Local development

No build tools required. Serve the folder with any static server, e.g.:

```
python3 -m http.server 8787
```

Then open `http://localhost:8787`.

> Opening `index.html` directly via `file://` will break the YouTube/Spotify embeds — always use a local server.
