# E4 · A full color palette from one variable

**DE:** Eine komplette Farbpalette aus einer Variable

🎬 Episode 036 of 59 · *Modern HTML & CSS in 60 seconds* / Folge 036 von 59 · *Modernes HTML & CSS in 60 Sekunden*  
▶️ Live demo: https://krocon.github.io/modern-css-60s/episodes/e04-relative-colors/

## Core CSS (`after.css`)

```css
:root {
  --brand: #a21caf;
  --pale: oklch(from var(--brand) calc(l + .3) c h);
  --deep: oklch(from var(--brand) calc(l - .2) c h);
  --soft: oklch(from var(--brand) l c h / 15%);
  --alt: oklch(from var(--brand) l c calc(h + 180));
}
```

## Browser support

Baseline 2024 · [caniuse](https://caniuse.com/?search=relative%20color) · [Web Features Explorer](https://web-platform-dx.github.io/web-features-explorer/)

## Links

- MDN: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_colors/Relative_colors
- caniuse: https://caniuse.com/?search=relative%20color

## Run it

No build tools: open `index.html` with a double-click, then use the switch in the top right corner (before/after, light/dark).
