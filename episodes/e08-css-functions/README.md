# E8 · 6 CSS functions that replace your media queries

**DE:** 6 CSS-Funktionen, die Media Queries ersetzen

🎬 Episode 040 of 59 · *Modern HTML & CSS in 60 seconds* / Folge 040 von 59 · *Modernes HTML & CSS in 60 Sekunden*  
▶️ Live demo: https://krocon.github.io/modern-css-60s/episodes/e08-css-functions/

## Core CSS (`after.css`)

```css
.tile {
  inline-size: min(100%, 36rem);
  padding: max(1rem, 4vw);
  font-size: clamp(1rem, 0.8rem + 1vw, 1.4rem);
  border-radius: calc(1rem + 1vw);
  border-color: light-dark(#f0abfc, #a21caf);
  background: color-mix(in oklch, Canvas, #d4f 8%);
}
```

## Browser support

Baseline 2024 · [caniuse](https://caniuse.com/?search=clamp) · [Web Features Explorer](https://web-platform-dx.github.io/web-features-explorer/)

## Links

- MDN: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Values_and_Units/CSS_Value_Functions
- caniuse: https://caniuse.com/?search=clamp

## Run it

No build tools: open `index.html` with a double-click, then use the switch in the top right corner (before/after, light/dark).
