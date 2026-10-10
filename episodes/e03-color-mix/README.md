# E3 · Hover colors without picking new colors

**DE:** Hover-Farben, ohne neue Farben auszusuchen

🎬 Episode 035 of 59 · *Modern HTML & CSS in 60 seconds* / Folge 035 von 59 · *Modernes HTML & CSS in 60 Sekunden*  
▶️ Live demo: https://krocon.github.io/modern-css-60s/episodes/e03-color-mix/

## Core CSS (`after.css`)

```css
.btn { background: var(--brand); }
.btn:hover {
  background:
    color-mix(in oklch, var(--brand), black 15%);
}
.starter { --brand: #0d9488; }
.team    { --brand: #ea580c; }
```

## Browser support

Baseline 2023 · [caniuse](https://caniuse.com/?search=color-mix) · [Web Features Explorer](https://web-platform-dx.github.io/web-features-explorer/)

## Links

- MDN: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/color-mix
- caniuse: https://caniuse.com/?search=color-mix

## Run it

No build tools: open `index.html` with a double-click, then use the switch in the top right corner (before/after, light/dark).
