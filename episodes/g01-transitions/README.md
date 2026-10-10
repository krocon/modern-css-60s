# G1 · Smooth hover effects with 1 line

**DE:** Weiche Hover-Effekte mit einer Zeile

🎬 Episode 046 of 59 · *Modern HTML & CSS in 60 seconds* / Folge 046 von 59 · *Modernes HTML & CSS in 60 Sekunden*  
▶️ Live demo: https://krocon.github.io/modern-css-60s/episodes/g01-transitions/

## Core CSS (`after.css`)

```css
.card {
  transition: transform .2s, box-shadow .2s;
}
.card:is(:hover, :focus-within) {
  transform: translateY(-12px);
  box-shadow: 0 16px 32px rgb(0 0 0 / .2);
}
```

## Browser support

Baseline widely available · [caniuse](https://caniuse.com/?search=css-transitions) · [Web Features Explorer](https://web-platform-dx.github.io/web-features-explorer/)

## Links

- MDN: https://developer.mozilla.org/en-US/docs/Web/CSS/transition
- caniuse: https://caniuse.com/?search=css-transitions

## Run it

No build tools: open `index.html` with a double-click, then use the switch in the top right corner (before/after, light/dark).
