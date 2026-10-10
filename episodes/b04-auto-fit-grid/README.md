# B4 · Responsive card grid, zero media queries

**DE:** Responsives Kachel-Grid ohne Media Queries

🎬 Episode 011 of 59 · *Modern HTML & CSS in 60 seconds* / Folge 011 von 59 · *Modernes HTML & CSS in 60 Sekunden*  
▶️ Live demo: https://krocon.github.io/modern-css-60s/episodes/b04-auto-fit-grid/

## Core CSS (`after.css`)

```css
.cards {
  display: grid;
  gap: 1rem;
  grid-template-columns:
    repeat(auto-fit, minmax(min(16rem, 100%), 1fr));
}
```

## Browser support

Baseline widely available · [caniuse](https://caniuse.com/?search=minmax) · [Web Features Explorer](https://web-platform-dx.github.io/web-features-explorer/)

## Links

- MDN: https://developer.mozilla.org/en-US/docs/Web/CSS/minmax
- caniuse: https://caniuse.com/?search=minmax

## Run it

No build tools: open `index.html` with a double-click, then use the switch in the top right corner (before/after, light/dark).
