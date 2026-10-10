# A7 · End the specificity war with @layer

**DE:** Schluss mit dem Spezifitäts-Chaos: @layer

🎬 Episode 007 of 59 · *Modern HTML & CSS in 60 seconds* / Folge 007 von 59 · *Modernes HTML & CSS in 60 Sekunden*  
▶️ Live demo: https://krocon.github.io/modern-css-60s/episodes/a07-cascade-layers/

## Core CSS (`after.css`)

```css
@layer reset, base, components, utilities;
@layer components {
  .card .actions .btn { background: var(--btn); }
}
@layer utilities {
  .bg-danger { background: var(--danger); }
}
```

## Browser support

Baseline 2022 · [caniuse](https://caniuse.com/?search=%40layer) · [Web Features Explorer](https://web-platform-dx.github.io/web-features-explorer/)

## Links

- MDN: https://developer.mozilla.org/en-US/docs/Web/CSS/@layer
- caniuse: https://caniuse.com/?search=%40layer

## Run it

No build tools: open `index.html` with a double-click, then use the switch in the top right corner (before/after, light/dark).
