# B2 · The footer that always stays at the bottom

**DE:** Der Footer, der immer unten bleibt

🎬 Episode 009 of 59 · *Modern HTML & CSS in 60 seconds* / Folge 009 von 59 · *Modernes HTML & CSS in 60 Sekunden*  
▶️ Live demo: https://krocon.github.io/modern-css-60s/episodes/b02-sticky-footer/

## Core CSS (`after.css`)

```css
body {
  min-block-size: 100dvh;
  display: grid;
  grid-template-rows: auto 1fr auto;
}
```

## Browser support

Baseline 2022 · [caniuse](https://caniuse.com/?search=dvh) · [Web Features Explorer](https://web-platform-dx.github.io/web-features-explorer/)

## Links

- MDN: https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-rows
- caniuse: https://caniuse.com/?search=dvh

## Run it

No build tools: open `index.html` with a double-click, then use the switch in the top right corner (before/after, light/dark).
