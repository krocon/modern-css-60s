# Modern HTML & CSS in 60 seconds

Demo pages for the YouTube series **“Modern HTML & CSS in 60 seconds”** / **„Modernes HTML & CSS in 60 Sekunden“** –
59 tips, 60 seconds each, in English and German.

**HTML describes structure and meaning, CSS handles the look.** Every demo proves it: the DOM stays the same, only the stylesheet changes
(`before.css` → `after.css`, switch in the top right corner).

- ▶️ All demos live: https://krocon.github.io/modern-css-60s/
- 🧭 Only techniques that work today in Chrome/Edge, Safari (Mac + iPhone), Firefox and Android browsers.
  Newer features are clearly marked as *progressive enhancement*; every episode links to caniuse and MDN.
- 🛠 No framework, no build tools – every page runs with a double-click.

## Structure

```
index.html               overview of all episodes (EN/DE switch without JS)
shared/
  base.css               reset, rem scale, color tokens, light/dark via light-dark()
  demo-frame.css         consistent demo look for the recordings
  demo-toolbar.js        before/after and theme switch (?css=before.css&theme=dark)
  overview.css           styles of the overview page
episodes/<slug>/         one folder per episode: index.html, before.css, after.css, README.md
```

Folder names: block letter + two-digit number + English slug, e.g. `b04-auto-fit-grid`.

## Episodes

### A – Foundations & browsers

| # | Episode | DE | Demo |
|---|---|---|---|
| 001 · A1 | [One HTML page, three completely different designs](episodes/a01-html-css-separation/) | Eine HTML-Seite, drei komplett verschiedene Designs | [live](https://krocon.github.io/modern-css-60s/episodes/a01-html-css-separation/) |
| 002 · A2 | [Why every iPhone browser is secretly Safari](episodes/a02-browser-engines/) | Warum jeder iPhone-Browser eigentlich Safari ist | soon |
| 003 · A3 | [Can I use this CSS? Check in 10 seconds](episodes/a03-can-i-use/) | Kann ich dieses CSS nutzen? Check in 10 Sekunden | soon |
| 004 · A4 | [The 10-line CSS reset I use everywhere](episodes/a04-css-reset/) | Mein 10-Zeilen-CSS-Reset für jedes Projekt | soon |
| 005 · A5 | [Stop writing div soup](episodes/a05-semantic-html/) | Schluss mit div-Suppe | soon |
| 006 · A6 | [Ask the browser what it supports – in CSS](episodes/a06-supports/) | Frag den Browser direkt im CSS, was er kann | soon |
| 007 · A7 | [End the specificity war with @layer](episodes/a07-cascade-layers/) | Schluss mit dem Spezifitäts-Chaos: @layer | soon |

### B – Layout & structure

| # | Episode | DE | Demo |
|---|---|---|---|
| 008 · B1 | [A full page layout in 6 lines of grid](episodes/b01-grid-page-layout/) | Komplettes Seitenlayout mit 6 Zeilen Grid | soon |
| 009 · B2 | [The footer that always stays at the bottom](episodes/b02-sticky-footer/) | Der Footer, der immer unten bleibt | soon |
| 010 · B3 | [Why your sticky header doesn't stick](episodes/b03-sticky-header/) | Warum dein Sticky Header nicht klebt | soon |
| 011 · B4 | [Responsive card grid, zero media queries](episodes/b04-auto-fit-grid/) | Responsives Kachel-Grid ohne Media Queries | [live](https://krocon.github.io/modern-css-60s/episodes/b04-auto-fit-grid/) |
| 012 · B5 | [Align everything inside your cards with subgrid](episodes/b05-subgrid/) | Kachel-Inhalte perfekt ausrichten mit Subgrid | soon |
| 013 · B6 | [Cards that adapt to their container, not the screen](episodes/b06-container-queries/) | Kacheln, die sich ihrem Container anpassen | soon |
| 014 · B7 | [Center anything with one line](episodes/b07-center/) | Alles zentrieren mit einer Zeile | soon |
| 015 · B8 | [Flexbox or grid? The 5-second rule](episodes/b08-flex-or-grid/) | Flexbox oder Grid? Die 5-Sekunden-Regel | soon |

### C – Typography & images

| # | Episode | DE | Demo |
|---|---|---|---|
| 016 · C1 | [Stop using px for font sizes](episodes/c01-rem/) | Hör auf, Schriftgrößen in px anzugeben | soon |
| 017 · C2 | [Font sizes that grow with the screen](episodes/c02-fluid-type/) | Schriftgrößen, die mit dem Bildschirm wachsen | soon |
| 018 · C3 | [Headlines that break like a designer made them](episodes/c03-text-wrap/) | Überschriften, die umbrechen wie vom Designer | soon |
| 019 · C4 | [100vh is broken on mobile. Use this instead](episodes/c04-viewport-units/) | 100vh ist auf dem Handy kaputt – nimm das | soon |
| 020 · C5 | [Hero cover image with a readable headline](episodes/c05-hero-background/) | Coverbild als Hintergrund mit lesbarer Headline | soon |
| 021 · C6 | [Same cover effect, but as a real image](episodes/c06-object-fit/) | Der gleiche Cover-Effekt – als echtes Bild | soon |
| 022 · C7 | [Sharp images on every screen, loaded only when needed](episodes/c07-responsive-images/) | Scharfe Bilder auf jedem Display, geladen erst bei Bedarf | soon |

### D – Components

| # | Episode | DE | Demo |
|---|---|---|---|
| 023 · D1 | [Responsive tables, part 1: scroll with a sticky column](episodes/d01-table-scroll/) | Responsive Tabellen, Teil 1: Scrollen mit fester Spalte | soon |
| 024 · D2 | [Responsive tables, part 2: turn rows into cards](episodes/d02-table-cards/) | Responsive Tabellen, Teil 2: Zeilen werden Karten | soon |
| 025 · D3 | [Form layout that works on every screen](episodes/d03-form-layout/) | Formular-Layout für jeden Bildschirm | soon |
| 026 · D4 | [Error messages that don't yell too early](episodes/d04-user-invalid/) | Fehlermeldungen, die nicht zu früh meckern | soon |
| 027 · D5 | [A textarea that grows as you type](episodes/d05-field-sizing/) | Ein Textfeld, das beim Tippen mitwächst | soon |
| 028 · D6 | [Style every checkbox with one line](episodes/d06-accent-color/) | Alle Checkboxen mit einer Zeile stylen | soon |
| 029 · D7 | [Tooltips that never go off-screen](episodes/d07-anchor-tooltips/) | Tooltips, die nie aus dem Bild rutschen | soon |
| 030 · D8 | [Toast notifications without a library](episodes/d08-toasts/) | Toast-Meldungen ohne Bibliothek | soon |
| 031 · D9 | [The modal you should be using](episodes/d09-dialog/) | Das Modal, das du nutzen solltest | soon |
| 032 · D10 | [Accordion with zero JavaScript](episodes/d10-accordion/) | Akkordeon ganz ohne JavaScript | soon |

### E – Colors & theming

| # | Episode | DE | Demo |
|---|---|---|---|
| 033 · E1 | [Change your whole site's colors in one place](episodes/e01-design-tokens/) | Alle Farben der Website an einer Stelle ändern | soon |
| 034 · E2 | [Why designers switched to OKLCH](episodes/e02-oklch/) | Warum Designer auf OKLCH umsteigen | soon |
| 035 · E3 | [Hover colors without picking new colors](episodes/e03-color-mix/) | Hover-Farben, ohne neue Farben auszusuchen | soon |
| 036 · E4 | [A full color palette from one variable](episodes/e04-relative-colors/) | Eine komplette Farbpalette aus einer Variable | soon |
| 037 · E5 | [Dark mode that follows the system automatically](episodes/e05-dark-mode/) | Dark Mode, der automatisch dem System folgt | soon |
| 038 · E6 | [light-dark(): one line per color, both themes](episodes/e06-light-dark/) | light-dark(): eine Zeile pro Farbe, beide Themes | [live](https://krocon.github.io/modern-css-60s/episodes/e06-light-dark/) |
| 039 · E7 | [A light/dark/system switch with almost no JS](episodes/e07-theme-switch/) | Hell/Dunkel/System-Schalter fast ohne JS | soon |
| 040 · E8 | [6 CSS functions that replace your media queries](episodes/e08-css-functions/) | 6 CSS-Funktionen, die Media Queries ersetzen | soon |

### F – Selectors & architecture

| # | Episode | DE | Demo |
|---|---|---|---|
| 041 · F1 | [CSS can finally select the parent](episodes/f01-has/) | CSS kann endlich das Elternelement wählen | soon |
| 042 · F2 | [:is() and :where() – shorter selectors, no specificity fights](episodes/f02-is-where/) | :is() und :where() – kürzere Selektoren ohne Spezifitätsstreit | soon |
| 043 · F3 | [You don't need Sass for nesting anymore](episodes/f03-nesting/) | Für Verschachtelung brauchst du kein Sass mehr | soon |
| 044 · F4 | [The easiest accessibility win in CSS](episodes/f04-focus-visible/) | Der einfachste Barrierefreiheits-Gewinn in CSS | soon |
| 045 · F5 | [Why your CSS isn't working: specificity in 60 seconds](episodes/f05-specificity/) | Warum dein CSS nicht greift: Spezifität in 60 Sekunden | soon |

### G – Animation & interaction

| # | Episode | DE | Demo |
|---|---|---|---|
| 046 · G1 | [Smooth hover effects with 1 line](episodes/g01-transitions/) | Weiche Hover-Effekte mit einer Zeile | soon |
| 047 · G2 | [Your first keyframe animation](episodes/g02-keyframes/) | Deine erste Keyframe-Animation | soon |
| 048 · G3 | [Respect users who get motion sick](episodes/g03-reduced-motion/) | Rücksicht auf Nutzer, denen Bewegung schadet | soon |
| 049 · G4 | [Finally: animate to and from display: none](episodes/g04-starting-style/) | Endlich: Animation von und zu display: none | soon |
| 050 · G5 | [Smooth page changes with View Transitions](episodes/g05-view-transitions/) | Flüssige Ansichtswechsel mit View Transitions | soon |
| 051 · G6 | [A reading progress bar with zero JS](episodes/g06-scroll-progress/) | Lesefortschritt-Balken ganz ohne JS | soon |
| 052 · G7 | [Only animate these 2 properties](episodes/g07-animation-performance/) | Animiere nur diese 2 Eigenschaften | soon |
| 053 · G8 | [Animated gradient borders with @property](episodes/g08-property/) | Animierte Verlaufsrahmen mit @property | soon |

### H – PWA, mobile & performance

| # | Episode | DE | Demo |
|---|---|---|---|
| 054 · H1 | [What is a PWA? Your website as an app in 60 seconds](episodes/h01-what-is-pwa/) | Was ist eine PWA? Deine Website als App in 60 Sekunden | soon |
| 055 · H2 | [The manifest file: name, icon, colors](episodes/h02-manifest/) | Die Manifest-Datei: Name, Icon, Farben | soon |
| 056 · H3 | [Make your site work offline in 20 lines](episodes/h03-offline/) | Website offline nutzbar in 20 Zeilen | soon |
| 057 · H4 | [Don't let the iPhone notch eat your content](episodes/h04-safe-area/) | Lass die iPhone-Kamera nicht deinen Inhalt verdecken | soon |
| 058 · H5 | [Render long pages faster with one property](episodes/h05-content-visibility/) | Lange Seiten schneller rendern mit einer Eigenschaft | soon |
| 059 · H6 | [Season finale: CSS features coming next](episodes/h06-whats-next/) | Staffelfinale: Diese CSS-Features kommen als Nächstes | soon |

## License

MIT – take the code and use it.
