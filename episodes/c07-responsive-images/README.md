# C7 · Sharp images on every screen, loaded only when needed

**DE:** Scharfe Bilder auf jedem Display, geladen erst bei Bedarf

🎬 Episode 022 of 59 · *Modern HTML & CSS in 60 seconds* / Folge 022 von 59 · *Modernes HTML & CSS in 60 Sekunden*  
▶️ Live demo: https://krocon.github.io/modern-css-60s/episodes/c07-responsive-images/

## Core CSS (`after.css`)

```css
/* After – <picture> + srcset: der Browser lädt je nach Breite hero-s/m/l.svg (Handy: Hochformat-Ausschnitt).
   fetchpriority="high" fürs wichtigste Bild, loading="lazy" für die Galerie weit unten: lädt erst beim Hinscrollen.
   Die Live-Anzeige rechts zeigt, welche Datei wirklich geladen wurde. */
.old { display: none; }
.new.grid { display: grid; }
```

## Browser support

Baseline 2024 · [caniuse](https://caniuse.com/?search=fetchpriority) · [Web Features Explorer](https://web-platform-dx.github.io/web-features-explorer/)

## Links

- MDN: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/picture
- caniuse: https://caniuse.com/?search=fetchpriority

## Run it

No build tools: open `index.html` with a double-click, then use the switch in the top right corner (before/after, light/dark).
