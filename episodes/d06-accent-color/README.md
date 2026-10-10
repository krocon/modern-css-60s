# D6 · Style every checkbox with one line

**DE:** Alle Checkboxen mit einer Zeile stylen

🎬 Episode 028 of 59 · *Modern HTML & CSS in 60 seconds* / Folge 028 von 59 · *Modernes HTML & CSS in 60 Sekunden*  
▶️ Live demo: https://krocon.github.io/modern-css-60s/episodes/d06-accent-color/

## Core CSS (`after.css`)

```css
:root {
  --brand: light-dark(#a21caf, #e879f9);
  accent-color: var(--brand);
}
```

## Browser support

Baseline 2022 · [caniuse](https://caniuse.com/?search=accent-color) · [Web Features Explorer](https://web-platform-dx.github.io/web-features-explorer/)

## Links

- MDN: https://developer.mozilla.org/en-US/docs/Web/CSS/accent-color
- caniuse: https://caniuse.com/?search=accent-color

## Run it

No build tools: open `index.html` with a double-click, then use the switch in the top right corner (before/after, light/dark).
