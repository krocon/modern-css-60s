# F3 · You don't need Sass for nesting anymore

**DE:** Für Verschachtelung brauchst du kein Sass mehr

🎬 Episode 043 of 59 · *Modern HTML & CSS in 60 seconds* / Folge 043 von 59 · *Modernes HTML & CSS in 60 Sekunden*  
▶️ Live demo: https://krocon.github.io/modern-css-60s/episodes/f03-nesting/

## Core CSS (`after.css`)

```css
.card {
  & h2 { color: var(--brand); }
  &:hover { border-color: var(--brand); }
  @media (width < 40rem) {
    flex-direction: column;
  }
}
```

## Browser support

Baseline 2023 (widely available since June 2026) · [caniuse](https://caniuse.com/?search=nesting) · [Web Features Explorer](https://web-platform-dx.github.io/web-features-explorer/)

## Links

- MDN: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_nesting
- caniuse: https://caniuse.com/?search=nesting

## Run it

No build tools: open `index.html` with a double-click, then use the switch in the top right corner (before/after, light/dark).
