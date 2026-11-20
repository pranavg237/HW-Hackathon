# ECE Hardware Hackathon: Landing Page

Static landing page for the UIUC ECE RSO hardware hackathon (April 2027).
Plain HTML, CSS and JavaScript. No build step, no dependencies.

## Project structure

```
.
├── index.html        # Page layout (section shells)
├── src/
│   ├── config.js     # ← All event content: dates, Discord link, tracks, schedule, FAQ, RSOs
│   ├── main.js       # Renders config.js into the page
│   └── styles.css    # Styles
├── assets/
│   └── traces.svg    # Hero circuit graphic
└── .nojekyll         # Tells GitHub Pages to serve files as-is
```

## Editing content

Almost everything is in **`src/config.js`**:

- `discordUrl`: your Discord invite (updates every Discord button)
- `registerUrl`: optional registration link (shows a "Register" button)
- `event`: name, dates, location, tagline
- `tracks`, `schedule`, `faq`, `hosts`: lists you can add to or remove from

## Run locally

Open `index.html` in a browser, or serve the folder:

```bash
python3 -m http.server 8000
```

Then visit http://localhost:8000.
