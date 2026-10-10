# G3 · Respect users who get motion sick

**DE:** Rücksicht auf Nutzer, denen Bewegung schadet

🎬 Episode 048 of 59 · *Modern HTML & CSS in 60 seconds* / Folge 048 von 59 · *Modernes HTML & CSS in 60 Sekunden*  
▶️ Live demo: https://krocon.github.io/modern-css-60s/episodes/g03-reduced-motion/

## Core CSS (`after.css`)

```css
@media (prefers-reduced-motion: reduce) {
  *, ::before, ::after {
    animation-duration: .01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: .01ms !important;
  }
}
```

## Browser support

Baseline widely available · [caniuse](https://caniuse.com/?search=prefers-reduced-motion) · [Web Features Explorer](https://web-platform-dx.github.io/web-features-explorer/)

## Links

- MDN: https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion
- caniuse: https://caniuse.com/?search=prefers-reduced-motion

## Run it

No build tools: open `index.html` with a double-click, then use the switch in the top right corner (before/after, light/dark).
