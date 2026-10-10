# B1 · A full page layout in 6 lines of grid

**DE:** Komplettes Seitenlayout mit 6 Zeilen Grid

🎬 Episode 008 of 59 · *Modern HTML & CSS in 60 seconds* / Folge 008 von 59 · *Modernes HTML & CSS in 60 Sekunden*  
▶️ Live demo: https://krocon.github.io/modern-css-60s/episodes/b01-grid-page-layout/

## Core CSS (`after.css`)

```css
.layout {
  display: grid;
  grid-template-columns: 12rem 1fr 14rem;
  grid-template-areas: "head head head"
                       "nav  main side"
                       "foot foot foot";
}
.layout > header { grid-area: head; }
.layout > nav    { grid-area: nav; }
.layout > main   { grid-area: main; }
.layout > aside  { grid-area: side; }
.layout > footer { grid-area: foot; }
```

## Browser support

Baseline widely available · [caniuse](https://caniuse.com/?search=grid-template-areas) · [Web Features Explorer](https://web-platform-dx.github.io/web-features-explorer/)

## Links

- MDN: https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-areas
- caniuse: https://caniuse.com/?search=grid-template-areas

## Run it

No build tools: open `index.html` with a double-click, then use the switch in the top right corner (before/after, light/dark).
