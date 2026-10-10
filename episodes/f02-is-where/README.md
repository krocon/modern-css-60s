# F2 · :is() and :where() – shorter selectors, no specificity fights

**DE:** :is() und :where() – kürzere Selektoren ohne Spezifitätsstreit

🎬 Episode 042 of 59 · *Modern HTML & CSS in 60 seconds* / Folge 042 von 59 · *Modernes HTML & CSS in 60 Sekunden*  
▶️ Live demo: https://krocon.github.io/modern-css-60s/episodes/f02-is-where/

## Core CSS (`after.css`)

```css
:is(.prose, .sidebar, .footer) h2 {   /* 0-1-1 */
  color: var(--text);
}
:where(.prose, .sidebar, .footer) a { /* 0-0-1 */
  color: var(--brand);
}
.button { color: var(--on-brand); }   /* 0-1-0 */
```

## Browser support

Baseline widely available · [caniuse](https://caniuse.com/?search=%3Awhere) · [Web Features Explorer](https://web-platform-dx.github.io/web-features-explorer/)

## Links

- MDN: https://developer.mozilla.org/en-US/docs/Web/CSS/:where
- caniuse: https://caniuse.com/?search=%3Awhere

## Run it

No build tools: open `index.html` with a double-click, then use the switch in the top right corner (before/after, light/dark).
