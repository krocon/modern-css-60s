# E5 · Dark mode that follows the system automatically

**DE:** Dark Mode, der automatisch dem System folgt

🎬 Episode 037 of 59 · *Modern HTML & CSS in 60 seconds* / Folge 037 von 59 · *Modernes HTML & CSS in 60 Sekunden*  
▶️ Live demo: https://krocon.github.io/modern-css-60s/episodes/e05-dark-mode/

## Core CSS (`after.css`)

```css
:root {
  color-scheme: light dark;
  --surface: #ffffff;  --text: #0f172a;
}
@media (prefers-color-scheme: dark) {
  :root { --surface: #0f172a; --text: #e2e8f0; }
}
```

## Browser support

Baseline widely available · [caniuse](https://caniuse.com/?search=prefers-color-scheme) · [Web Features Explorer](https://web-platform-dx.github.io/web-features-explorer/)

## Links

- MDN: https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme
- caniuse: https://caniuse.com/?search=prefers-color-scheme

## Run it

No build tools: open `index.html` with a double-click, then use the switch in the top right corner (before/after, light/dark).
