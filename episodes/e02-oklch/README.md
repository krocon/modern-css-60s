# E2 · Why designers switched to OKLCH

**DE:** Warum Designer auf OKLCH umsteigen

🎬 Episode 034 of 59 · *Modern HTML & CSS in 60 seconds* / Folge 034 von 59 · *Modernes HTML & CSS in 60 Sekunden*  
▶️ Live demo: https://krocon.github.io/modern-css-60s/episodes/e02-oklch/

## Core CSS (`after.css`)

```css
.tile {
  /* L = Helligkeit, C = Buntheit, H = Farbton */
  background: oklch(58% 0.11 var(--h));
}
.danger  { --h: 25; }
.warning { --h: 70; }
.success { --h: 145; }
.info    { --h: 235; }
.primary { --h: 270; }
.accent  { --h: 330; }
```

## Browser support

Baseline 2023 · [caniuse](https://caniuse.com/?search=oklch) · [Web Features Explorer](https://web-platform-dx.github.io/web-features-explorer/)

## Links

- MDN: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/oklch
- caniuse: https://caniuse.com/?search=oklch

## Run it

No build tools: open `index.html` with a double-click, then use the switch in the top right corner (before/after, light/dark).
