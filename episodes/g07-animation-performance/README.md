# G7 · Only animate these 2 properties

**DE:** Animiere nur diese 2 Eigenschaften

🎬 Episode 052 of 59 · *Modern HTML & CSS in 60 seconds* / Folge 052 von 59 · *Modernes HTML & CSS in 60 Sekunden*  
▶️ Live demo: https://krocon.github.io/modern-css-60s/episodes/g07-animation-performance/

## Core CSS (`after.css`)

```css
.drawer {
  transform: translateX(-100%);
  opacity: 0;
  transition: transform .3s, opacity .3s;
}
.menu-open .drawer { transform: none; opacity: 1; }
```

## Browser support

Baseline widely available · [caniuse](https://caniuse.com/?search=transforms2d) · [Web Features Explorer](https://web-platform-dx.github.io/web-features-explorer/)

## Links

- MDN: https://developer.mozilla.org/en-US/docs/Web/Performance/Guides/CSS_JavaScript_animation_performance
- caniuse: https://caniuse.com/?search=transforms2d

## Run it

No build tools: open `index.html` with a double-click, then use the switch in the top right corner (before/after, light/dark).
