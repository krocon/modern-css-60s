# A6 · Ask the browser what it supports – in CSS

**DE:** Frag den Browser direkt im CSS, was er kann

🎬 Episode 006 of 59 · *Modern HTML & CSS in 60 seconds* / Folge 006 von 59 · *Modernes HTML & CSS in 60 Sekunden*  
▶️ Live demo: https://krocon.github.io/modern-css-60s/episodes/a06-supports/

## Core CSS (`after.css`)

```css
.tip { margin-block: 0.75rem 0; }
@supports (anchor-name: --a) {
  .link-btn { anchor-name: --a; }
  .tip { position: absolute; position-anchor: --a; }
  .tip { position-area: top; margin: 0 0 0.5rem; }
}
```

## Browser support

Baseline widely available · [caniuse](https://caniuse.com/?search=%40supports) · [Web Features Explorer](https://web-platform-dx.github.io/web-features-explorer/)

## Links

- MDN: https://developer.mozilla.org/en-US/docs/Web/CSS/@supports
- caniuse: https://caniuse.com/?search=%40supports

## Run it

No build tools: open `index.html` with a double-click, then use the switch in the top right corner (before/after, light/dark).
