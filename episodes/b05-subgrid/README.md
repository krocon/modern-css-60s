# B5 · Align everything inside your cards with subgrid

**DE:** Kachel-Inhalte perfekt ausrichten mit Subgrid

🎬 Episode 012 of 59 · *Modern HTML & CSS in 60 seconds* / Folge 012 von 59 · *Modernes HTML & CSS in 60 Sekunden*  
▶️ Live demo: https://krocon.github.io/modern-css-60s/episodes/b05-subgrid/

## Core CSS (`after.css`)

```css
.card {
  display: grid;
  grid-template-rows: subgrid;
  grid-row: span 4;
  gap: 1rem;
}
```

## Browser support

Baseline 2023 · [caniuse](https://caniuse.com/?search=subgrid) · [Web Features Explorer](https://web-platform-dx.github.io/web-features-explorer/)

## Links

- MDN: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout/Subgrid
- caniuse: https://caniuse.com/?search=subgrid

## Run it

No build tools: open `index.html` with a double-click, then use the switch in the top right corner (before/after, light/dark).
