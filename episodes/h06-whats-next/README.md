# H6 · Season finale: CSS features coming next

**DE:** Staffelfinale: Diese CSS-Features kommen als Nächstes

🎬 Episode 059 of 59 · *Modern HTML & CSS in 60 seconds* / Folge 059 von 59 · *Modernes HTML & CSS in 60 Sekunden*  
▶️ Live demo: https://krocon.github.io/modern-css-60s/episodes/h06-whats-next/

## Core CSS (`after.css`)

```css
.gallery { columns: 3; }        /* Fallback */
@supports (display: grid-lanes) {
  .gallery {
    display: grid-lanes;
    grid-template-columns: repeat(3, 1fr);
  }
}
```

## Browser support

limited · [Web Features Explorer](https://web-platform-dx.github.io/web-features-explorer/)

## Links

- MDN: https://developer.mozilla.org/en-US/docs/Web/CSS

## Run it

No build tools: open `index.html` with a double-click, then use the switch in the top right corner (before/after, light/dark).
