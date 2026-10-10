# G2 · Your first keyframe animation

**DE:** Deine erste Keyframe-Animation

🎬 Episode 047 of 59 · *Modern HTML & CSS in 60 seconds* / Folge 047 von 59 · *Modernes HTML & CSS in 60 Sekunden*  
▶️ Live demo: https://krocon.github.io/modern-css-60s/episodes/g02-keyframes/

## Core CSS (`after.css`)

```css
@keyframes fade-up {
  from { opacity: 0; translate: 0 2rem; }
}
.tile {
  animation: fade-up .5s ease-out both;
  animation-delay: calc(var(--i) * 100ms);
}
```

## Browser support

Baseline widely available · [caniuse](https://caniuse.com/?search=css-animation) · [Web Features Explorer](https://web-platform-dx.github.io/web-features-explorer/)

## Links

- MDN: https://developer.mozilla.org/en-US/docs/Web/CSS/@keyframes
- caniuse: https://caniuse.com/?search=css-animation

## Run it

No build tools: open `index.html` with a double-click, then use the switch in the top right corner (before/after, light/dark).
