# G8 · Animated gradient borders with @property

**DE:** Animierte Verlaufsrahmen mit @property

🎬 Episode 053 of 59 · *Modern HTML & CSS in 60 seconds* / Folge 053 von 59 · *Modernes HTML & CSS in 60 Sekunden*  
▶️ Live demo: https://krocon.github.io/modern-css-60s/episodes/g08-property/

## Core CSS (`after.css`)

```css
@property --angle {
  syntax: "<angle>";
  inherits: false;
  initial-value: 0deg;
}
@keyframes spin { to { --angle: 1turn; } }
.pro { animation: spin 4s linear infinite; }
```

## Browser support

Baseline 2024 · [caniuse](https://caniuse.com/?search=%40property) · [Web Features Explorer](https://web-platform-dx.github.io/web-features-explorer/)

## Links

- MDN: https://developer.mozilla.org/en-US/docs/Web/CSS/@property
- caniuse: https://caniuse.com/?search=%40property

## Run it

No build tools: open `index.html` with a double-click, then use the switch in the top right corner (before/after, light/dark).
