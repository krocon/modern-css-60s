# C5 · Hero cover image with a readable headline

**DE:** Coverbild als Hintergrund mit lesbarer Headline

🎬 Episode 020 of 59 · *Modern HTML & CSS in 60 seconds* / Folge 020 von 59 · *Modernes HTML & CSS in 60 Sekunden*  
▶️ Live demo: https://krocon.github.io/modern-css-60s/episodes/c05-hero-background/

## Core CSS (`after.css`)

```css
.hero {
  background:
    linear-gradient(#0003, #000c),
    url("cover.svg") center / cover,
    #312e81;
  color: white;
}
```

## Browser support

Baseline widely available · [caniuse](https://caniuse.com/?search=background-size) · [Web Features Explorer](https://web-platform-dx.github.io/web-features-explorer/)

## Links

- MDN: https://developer.mozilla.org/en-US/docs/Web/CSS/background-size
- caniuse: https://caniuse.com/?search=background-size

## Run it

No build tools: open `index.html` with a double-click, then use the switch in the top right corner (before/after, light/dark).
