# E6 · light-dark(): one line per color, both themes

**DE:** light-dark(): eine Zeile pro Farbe, beide Themes

🎬 Episode 038 of 59 · *Modern HTML & CSS in 60 seconds* / Folge 038 von 59 · *Modernes HTML & CSS in 60 Sekunden*  
▶️ Live demo: https://krocon.github.io/modern-css-60s/episodes/e06-light-dark/

## Core CSS (`after.css`)

```css
:root {
  color-scheme: light dark;
  --surface: light-dark(#ffffff, #0f172a);
  --text:    light-dark(#0f172a, #f8fafc);
  --brand:   light-dark(#a21caf, #f0abfc);
}
```

## Browser support

Baseline 2024 · [caniuse](https://caniuse.com/?search=light-dark) · [Web Features Explorer](https://web-platform-dx.github.io/web-features-explorer/)

## Links

- MDN: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/light-dark
- caniuse: https://caniuse.com/?search=light-dark

## Run it

No build tools: open `index.html` with a double-click, then use the switch in the top right corner (before/after, light/dark).
