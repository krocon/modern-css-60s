# D3 · Form layout that works on every screen

**DE:** Formular-Layout für jeden Bildschirm

🎬 Episode 025 of 59 · *Modern HTML & CSS in 60 seconds* / Folge 025 von 59 · *Modernes HTML & CSS in 60 Sekunden*  
▶️ Live demo: https://krocon.github.io/modern-css-60s/episodes/d03-form-layout/

## Core CSS (`after.css`)

```css
.form {
  display: grid;
  gap: 0.5rem 1.5rem;
}
@media (width >= 40rem) {
  .form { grid-template-columns: max-content 1fr; }
}
```

## Browser support

Baseline widely available · [caniuse](https://caniuse.com/?search=css-grid) · [Web Features Explorer](https://web-platform-dx.github.io/web-features-explorer/)

## Links

- MDN: https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Forms
- caniuse: https://caniuse.com/?search=css-grid

## Run it

No build tools: open `index.html` with a double-click, then use the switch in the top right corner (before/after, light/dark).
