# C6 · Same cover effect, but as a real image

**DE:** Der gleiche Cover-Effekt – als echtes Bild

🎬 Episode 021 of 59 · *Modern HTML & CSS in 60 seconds* / Folge 021 von 59 · *Modernes HTML & CSS in 60 Sekunden*  
▶️ Live demo: https://krocon.github.io/modern-css-60s/episodes/c06-object-fit/

## Core CSS (`after.css`)

```css
.card img {
  inline-size: 100%;
  block-size: auto;
  aspect-ratio: 16 / 9;
  object-fit: cover;
}
```

## Browser support

Baseline widely available · [caniuse](https://caniuse.com/?search=object-fit) · [Web Features Explorer](https://web-platform-dx.github.io/web-features-explorer/)

## Links

- MDN: https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit
- caniuse: https://caniuse.com/?search=object-fit

## Run it

No build tools: open `index.html` with a double-click, then use the switch in the top right corner (before/after, light/dark).
