# G4 · Finally: animate to and from display: none

**DE:** Endlich: Animation von und zu display: none

🎬 Episode 049 of 59 · *Modern HTML & CSS in 60 seconds* / Folge 049 von 59 · *Modernes HTML & CSS in 60 Sekunden*  
▶️ Live demo: https://krocon.github.io/modern-css-60s/episodes/g04-starting-style/

## Core CSS (`after.css`)

```css
dialog {
  transition: opacity .4s, translate .4s,
    display .4s, overlay .4s;
  transition-behavior: allow-discrete;
  &:not([open]) { opacity: 0; translate: 0 2rem; }
  @starting-style { opacity: 0; translate: 0 2rem; }
}
```

## Browser support

Baseline 2024 · [caniuse](https://caniuse.com/?search=starting-style) · [Web Features Explorer](https://web-platform-dx.github.io/web-features-explorer/)

## Links

- MDN: https://developer.mozilla.org/en-US/docs/Web/CSS/@starting-style
- caniuse: https://caniuse.com/?search=starting-style

## Run it

No build tools: open `index.html` with a double-click, then use the switch in the top right corner (before/after, light/dark).
