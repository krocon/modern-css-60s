# E7 · A light/dark/system switch with almost no JS

**DE:** Hell/Dunkel/System-Schalter fast ohne JS

🎬 Episode 039 of 59 · *Modern HTML & CSS in 60 seconds* / Folge 039 von 59 · *Modernes HTML & CSS in 60 Sekunden*  
▶️ Live demo: https://krocon.github.io/modern-css-60s/episodes/e07-theme-switch/

## Core CSS (`after.css`)

```css
:root:has(#theme-light:checked) {
  color-scheme: light;
}
:root:has(#theme-dark:checked) {
  color-scheme: dark;
}
/* System = color-scheme: light dark */
```

## Browser support

Baseline 2023 · [caniuse](https://caniuse.com/?search=has) · [Web Features Explorer](https://web-platform-dx.github.io/web-features-explorer/)

## Links

- MDN: https://developer.mozilla.org/en-US/docs/Web/CSS/:has
- caniuse: https://caniuse.com/?search=has

## Run it

No build tools: open `index.html` with a double-click, then use the switch in the top right corner (before/after, light/dark).
