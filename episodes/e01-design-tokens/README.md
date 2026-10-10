# E1 · Change your whole site's colors in one place

**DE:** Alle Farben der Website an einer Stelle ändern

🎬 Episode 033 of 59 · *Modern HTML & CSS in 60 seconds* / Folge 033 von 59 · *Modernes HTML & CSS in 60 Sekunden*  
▶️ Live demo: https://krocon.github.io/modern-css-60s/episodes/e01-design-tokens/

## Core CSS (`after.css`)

```css
:root {
  --brand:   #a21caf;
  --surface: #fdfbff;
  --text:    #1e1b2e;
}
.button { background: var(--brand); }
.badge  { color: var(--brand); }
```

## Browser support

Baseline widely available · [caniuse](https://caniuse.com/?search=custom%20properties) · [Web Features Explorer](https://web-platform-dx.github.io/web-features-explorer/)

## Links

- MDN: https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties
- caniuse: https://caniuse.com/?search=custom%20properties

## Run it

No build tools: open `index.html` with a double-click, then use the switch in the top right corner (before/after, light/dark).
