# A1 · One HTML page, three completely different designs

**DE:** Eine HTML-Seite, drei komplett verschiedene Designs

🎬 Episode 001 of 59 · *Modern HTML & CSS in 60 seconds* / Folge 001 von 59 · *Modernes HTML & CSS in 60 Sekunden*  
▶️ Live demo: https://krocon.github.io/modern-css-60s/episodes/a01-html-css-separation/

## Core CSS (`theme-b.css`)

```css
:root { --brand: #d946ef; --surface: #1e293b; }
body { display: grid; grid-template-columns: 16rem 1fr; }
nav  { background: var(--surface); }
a    { color: var(--brand); }
h1   { font-family: Georgia, serif; }
```

## Browser support

all browsers · [Web Features Explorer](https://web-platform-dx.github.io/web-features-explorer/)

## Links

- MDN: https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics

## Run it

No build tools: open `index.html` with a double-click, then use the switch in the top right corner (before/after, light/dark).
