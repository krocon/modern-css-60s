# H3 · Make your site work offline in 20 lines

**DE:** Website offline nutzbar in 20 Zeilen

🎬 Episode 056 of 59 · *Modern HTML & CSS in 60 seconds* / Folge 056 von 59 · *Modernes HTML & CSS in 60 Sekunden*  
▶️ Live demo: https://krocon.github.io/modern-css-60s/episodes/h03-offline/

## Core CSS (`after.css`)

```css
/* After – online mit Service Worker: Jeder Seitenaufruf geht durch sw.js ans Netz (fetch).
   Die Offline-Seite liegt schon im Cache bereit, wird aber nicht gebraucht. */
@import url("demo.css");
```

## Browser support

Baseline widely available · [caniuse](https://caniuse.com/?search=service%20worker) · [Web Features Explorer](https://web-platform-dx.github.io/web-features-explorer/)

## Links

- MDN: https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API
- caniuse: https://caniuse.com/?search=service%20worker

## Run it

No build tools: open `index.html` with a double-click, then use the switch in the top right corner (before/after, light/dark).
