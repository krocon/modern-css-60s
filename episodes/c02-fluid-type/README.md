# C2 · Font sizes that grow with the screen

**DE:** Schriftgrößen, die mit dem Bildschirm wachsen

🎬 Episode 017 of 59 · *Modern HTML & CSS in 60 seconds* / Folge 017 von 59 · *Modernes HTML & CSS in 60 Sekunden*  
▶️ Live demo: https://krocon.github.io/modern-css-60s/episodes/c02-fluid-type/

## Core CSS (`after.css`)

```css
.hero h1 {
  font-size: clamp(2rem, 1rem + 4vw, 4rem);
}
.hero p {
  font-size: clamp(1rem, 0.875rem + 0.5vw, 1.25rem);
}
```

## Browser support

Baseline widely available · [caniuse](https://caniuse.com/?search=clamp) · [Web Features Explorer](https://web-platform-dx.github.io/web-features-explorer/)

## Links

- MDN: https://developer.mozilla.org/en-US/docs/Web/CSS/clamp
- caniuse: https://caniuse.com/?search=clamp

## Run it

No build tools: open `index.html` with a double-click, then use the switch in the top right corner (before/after, light/dark).
