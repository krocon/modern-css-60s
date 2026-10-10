# G6 · A reading progress bar with zero JS

**DE:** Lesefortschritt-Balken ganz ohne JS

🎬 Episode 051 of 59 · *Modern HTML & CSS in 60 seconds* / Folge 051 von 59 · *Modernes HTML & CSS in 60 Sekunden*  
▶️ Live demo: https://krocon.github.io/modern-css-60s/episodes/g06-scroll-progress/

## Core CSS (`after.css`)

```css
@keyframes grow { to { scale: 1; } }
@supports (animation-timeline: scroll()) {
  .progress {
    animation: grow linear both;
    animation-timeline: scroll(root);
  }
}
```

## Browser support

limited (progressive enhancement) · [caniuse](https://caniuse.com/?search=animation-timeline) · [Web Features Explorer](https://web-platform-dx.github.io/web-features-explorer/)

## Links

- MDN: https://developer.mozilla.org/en-US/docs/Web/CSS/animation-timeline
- caniuse: https://caniuse.com/?search=animation-timeline

## Run it

No build tools: open `index.html` with a double-click, then use the switch in the top right corner (before/after, light/dark).
