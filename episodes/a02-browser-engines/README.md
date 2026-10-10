# A2 · Why every iPhone browser is secretly Safari

**DE:** Warum jeder iPhone-Browser eigentlich Safari ist

🎬 Episode 002 of 59 · *Modern HTML & CSS in 60 seconds* / Folge 002 von 59 · *Modernes HTML & CSS in 60 Sekunden*  
▶️ Live demo: https://krocon.github.io/modern-css-60s/episodes/a02-browser-engines/

## Core CSS (`after.css`)

```css
.blink  { --engine: #3b82f6; }
.webkit { --engine: #14b8a6; }
.gecko  { --engine: #f97316; }
.engine { border-top: 6px solid var(--engine); }
.iphone { --engine: #14b8a6; }
.iphone li::after { content: "WebKit"; }
```

## Browser support

– · [Web Features Explorer](https://web-platform-dx.github.io/web-features-explorer/)

## Links

- MDN: https://developer.mozilla.org/en-US/docs/Glossary/Engine/Rendering

## Run it

No build tools: open `index.html` with a double-click, then use the switch in the top right corner (before/after, light/dark).
