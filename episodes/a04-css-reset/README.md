# A4 · The 10-line CSS reset I use everywhere

**DE:** Mein 10-Zeilen-CSS-Reset für jedes Projekt

🎬 Episode 004 of 59 · *Modern HTML & CSS in 60 seconds* / Folge 004 von 59 · *Modernes HTML & CSS in 60 Sekunden*  
▶️ Live demo: https://krocon.github.io/modern-css-60s/episodes/a04-css-reset/

## Core CSS (`after.css`)

```css
*, *::before, *::after { box-sizing: border-box; }
* { margin: 0; }
body { line-height: 1.5; }
img, svg { display: block; max-inline-size: 100%; }
input, button { font: inherit; }
ul[class] { padding: 0; list-style: none; }
h1, h2, p { overflow-wrap: break-word; }
body { min-block-size: 100dvh; }
textarea, select { font: inherit; }
picture, video, canvas { display: block; max-inline-size: 100%; }
```

## Browser support

Baseline widely available · [caniuse](https://caniuse.com/?search=box-sizing) · [Web Features Explorer](https://web-platform-dx.github.io/web-features-explorer/)

## Links

- MDN: https://developer.mozilla.org/en-US/docs/Web/CSS/box-sizing
- caniuse: https://caniuse.com/?search=box-sizing

## Run it

No build tools: open `index.html` with a double-click, then use the switch in the top right corner (before/after, light/dark).
