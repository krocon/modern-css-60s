# D7 · Tooltips that never go off-screen

**DE:** Tooltips, die nie aus dem Bild rutschen

🎬 Episode 029 of 59 · *Modern HTML & CSS in 60 seconds* / Folge 029 von 59 · *Modernes HTML & CSS in 60 Sekunden*  
▶️ Live demo: https://krocon.github.io/modern-css-60s/episodes/d07-anchor-tooltips/

## Core CSS (`after.css`)

```css
button:has(+ :popover-open) { anchor-name: --tip; }
.tip {
  position-anchor: --tip;
  position-area: top;
  position-try-fallbacks: flip-block;
}
```

## Browser support

Baseline 2026 (newly available) · [caniuse](https://caniuse.com/?search=anchor) · [Web Features Explorer](https://web-platform-dx.github.io/web-features-explorer/)

## Links

- MDN: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_anchor_positioning
- caniuse: https://caniuse.com/?search=anchor

## Run it

No build tools: open `index.html` with a double-click, then use the switch in the top right corner (before/after, light/dark).
