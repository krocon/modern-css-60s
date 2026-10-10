# C4 · 100vh is broken on mobile. Use this instead

**DE:** 100vh ist auf dem Handy kaputt – nimm das

🎬 Episode 019 of 59 · *Modern HTML & CSS in 60 seconds* / Folge 019 von 59 · *Modernes HTML & CSS in 60 Sekunden*  
▶️ Live demo: https://krocon.github.io/modern-css-60s/episodes/c04-viewport-units/

## Core CSS (`after.css`)

```css
.hero {
  min-block-size: 100vh;   /* Fallback */
  min-block-size: 100dvh;  /* folgt den Leisten */
}
```

## Browser support

Baseline 2022 · [caniuse](https://caniuse.com/?search=dvh) · [Web Features Explorer](https://web-platform-dx.github.io/web-features-explorer/)

## Links

- MDN: https://developer.mozilla.org/en-US/docs/Web/CSS/length
- caniuse: https://caniuse.com/?search=dvh

## Run it

No build tools: open `index.html` with a double-click, then use the switch in the top right corner (before/after, light/dark).
