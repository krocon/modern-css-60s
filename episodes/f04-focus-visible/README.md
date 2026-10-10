# F4 · The easiest accessibility win in CSS

**DE:** Der einfachste Barrierefreiheits-Gewinn in CSS

🎬 Episode 044 of 59 · *Modern HTML & CSS in 60 seconds* / Folge 044 von 59 · *Modernes HTML & CSS in 60 Sekunden*  
▶️ Live demo: https://krocon.github.io/modern-css-60s/episodes/f04-focus-visible/

## Core CSS (`after.css`)

```css
:focus-visible {
  outline: 4px solid var(--brand);
  outline-offset: 4px;
}
.nav a:focus-visible {
  background: var(--brand-soft);
}
```

## Browser support

Baseline 2022 · [caniuse](https://caniuse.com/?search=focus-visible) · [Web Features Explorer](https://web-platform-dx.github.io/web-features-explorer/)

## Links

- MDN: https://developer.mozilla.org/en-US/docs/Web/CSS/:focus-visible
- caniuse: https://caniuse.com/?search=focus-visible

## Run it

No build tools: open `index.html` with a double-click, then use the switch in the top right corner (before/after, light/dark).
