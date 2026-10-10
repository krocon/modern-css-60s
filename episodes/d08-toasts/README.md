# D8 · Toast notifications without a library

**DE:** Toast-Meldungen ohne Bibliothek

🎬 Episode 030 of 59 · *Modern HTML & CSS in 60 seconds* / Folge 030 von 59 · *Modernes HTML & CSS in 60 Sekunden*  
▶️ Live demo: https://krocon.github.io/modern-css-60s/episodes/d08-toasts/

## Core CSS (`after.css`)

```css
.toast:popover-open {
  opacity: 1;
  @starting-style {
    opacity: 0;
    translate: 0 2rem;
  }
}
```

## Browser support

Baseline 2024 · [caniuse](https://caniuse.com/?search=popover) · [Web Features Explorer](https://web-platform-dx.github.io/web-features-explorer/)

## Links

- MDN: https://developer.mozilla.org/en-US/docs/Web/API/Popover_API
- caniuse: https://caniuse.com/?search=popover

## Run it

No build tools: open `index.html` with a double-click, then use the switch in the top right corner (before/after, light/dark).
