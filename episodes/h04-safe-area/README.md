# H4 · Don't let the iPhone notch eat your content

**DE:** Lass die iPhone-Kamera nicht deinen Inhalt verdecken

🎬 Episode 057 of 59 · *Modern HTML & CSS in 60 seconds* / Folge 057 von 59 · *Modernes HTML & CSS in 60 Sekunden*  
▶️ Live demo: https://krocon.github.io/modern-css-60s/episodes/h04-safe-area/

## Core CSS (`after.css`)

```css
.app-bar {
  padding-top: max(1rem, env(safe-area-inset-top));
}
.tab-bar {
  padding-bottom: env(safe-area-inset-bottom);
}
.app-bar, .list {
  padding-left: max(1rem, env(safe-area-inset-left));
  padding-right: max(1rem, env(safe-area-inset-right));
}
```

## Browser support

Baseline widely available · [caniuse](https://caniuse.com/?search=env) · [Web Features Explorer](https://web-platform-dx.github.io/web-features-explorer/)

## Links

- MDN: https://developer.mozilla.org/en-US/docs/Web/CSS/env
- caniuse: https://caniuse.com/?search=env

## Run it

No build tools: open `index.html` with a double-click, then use the switch in the top right corner (before/after, light/dark).
