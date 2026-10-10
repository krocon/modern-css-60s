# C1 · Stop using px for font sizes

**DE:** Hör auf, Schriftgrößen in px anzugeben

🎬 Episode 016 of 59 · *Modern HTML & CSS in 60 seconds* / Folge 016 von 59 · *Modernes HTML & CSS in 60 Sekunden*  
▶️ Live demo: https://krocon.github.io/modern-css-60s/episodes/c01-rem/

## Core CSS (`after.css`)

```css
html { font-size: 100%; }   /* Nutzer-Wert */
.post h1 { font-size: 2.5rem; }
.post p  { font-size: 1.125rem; }
.post    { padding: 2rem; gap: 1rem; }
.post    { border: 1px solid var(--border); }
```

## Browser support

Baseline widely available · [caniuse](https://caniuse.com/?search=rem) · [Web Features Explorer](https://web-platform-dx.github.io/web-features-explorer/)

## Links

- MDN: https://developer.mozilla.org/en-US/docs/Web/CSS/length
- caniuse: https://caniuse.com/?search=rem

## Run it

No build tools: open `index.html` with a double-click, then use the switch in the top right corner (before/after, light/dark).
