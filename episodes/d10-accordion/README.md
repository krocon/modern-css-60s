# D10 · Accordion with zero JavaScript

**DE:** Akkordeon ganz ohne JavaScript

🎬 Episode 032 of 59 · *Modern HTML & CSS in 60 seconds* / Folge 032 von 59 · *Modernes HTML & CSS in 60 Sekunden*  
▶️ Live demo: https://krocon.github.io/modern-css-60s/episodes/d10-accordion/

## Core CSS (`after.css`)

```css
details {
  border: 1px solid var(--border);
  border-radius: var(--radius);
}
details[open] { border-color: var(--brand); }
details[open] summary { color: var(--brand); }
summary::after { content: "›"; transition: rotate 0.2s; }
details[open] summary::after { rotate: 90deg; }
```

## Browser support

Baseline 2024 · [caniuse](https://caniuse.com/?search=details) · [Web Features Explorer](https://web-platform-dx.github.io/web-features-explorer/)

## Links

- MDN: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/details
- caniuse: https://caniuse.com/?search=details

## Run it

No build tools: open `index.html` with a double-click, then use the switch in the top right corner (before/after, light/dark).
