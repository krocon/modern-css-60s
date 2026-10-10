# D5 · A textarea that grows as you type

**DE:** Ein Textfeld, das beim Tippen mitwächst

🎬 Episode 027 of 59 · *Modern HTML & CSS in 60 seconds* / Folge 027 von 59 · *Modernes HTML & CSS in 60 Sekunden*  
▶️ Live demo: https://krocon.github.io/modern-css-60s/episodes/d05-field-sizing/

## Core CSS (`after.css`)

```css
textarea {
  field-sizing: content;
  min-block-size: 3lh;
  max-block-size: 10lh;
}
```

## Browser support

Baseline 2026 (newly available) · [caniuse](https://caniuse.com/?search=field-sizing) · [Web Features Explorer](https://web-platform-dx.github.io/web-features-explorer/)

## Links

- MDN: https://developer.mozilla.org/en-US/docs/Web/CSS/field-sizing
- caniuse: https://caniuse.com/?search=field-sizing

## Run it

No build tools: open `index.html` with a double-click, then use the switch in the top right corner (before/after, light/dark).
