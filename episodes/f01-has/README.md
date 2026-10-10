# F1 · CSS can finally select the parent

**DE:** CSS kann endlich das Elternelement wählen

🎬 Episode 041 of 59 · *Modern HTML & CSS in 60 seconds* / Folge 041 von 59 · *Modernes HTML & CSS in 60 Sekunden*  
▶️ Live demo: https://krocon.github.io/modern-css-60s/episodes/f01-has/

## Core CSS (`after.css`)

```css
.card:has(input:user-invalid) {
  border-color: var(--danger);
  background: var(--danger-soft);
  color: var(--danger);
}
form:has(:user-invalid) .submit { opacity: 0.4; }
```

## Browser support

Baseline 2023 (widely available since June 2026) · [caniuse](https://caniuse.com/?search=has) · [Web Features Explorer](https://web-platform-dx.github.io/web-features-explorer/)

## Links

- MDN: https://developer.mozilla.org/en-US/docs/Web/CSS/:has
- caniuse: https://caniuse.com/?search=has

## Run it

No build tools: open `index.html` with a double-click, then use the switch in the top right corner (before/after, light/dark).
