/*
 * demo-toolbar.js – Vorher/Nachher-Schalter und Theme-Schalter für jede Demo.
 * Bewusst klassisches Script (kein Modul), damit die Seiten per Doppelklick (file://) laufen.
 *
 *   <link rel="stylesheet" href="after.css" data-styles="before.css after.css" data-labels="Before|After">
 *   <script src="../../shared/demo-toolbar.js" defer></script>
 *
 * Für Aufnahmen per URL vorwählen:  index.html?css=before.css&theme=dark
 * Eingebettet im Video (Demo-Bühne):  &embed=1 → keine Schalter, kein Zurück-Link, keine Scrollbalken
 */
(() => {
  const params = new URLSearchParams(location.search);
  const embed = params.has('embed');
  if (embed) document.documentElement.classList.add('is-embed');
  const bar = document.createElement('nav');
  bar.className = 'demo-toolbar';
  bar.setAttribute('aria-label', 'Demo controls');

  // Eine Gruppe Umschalt-Buttons; genau einer ist aktiv (aria-pressed)
  function group(items, current, onPick) {
    const buttons = items.map(({ value, label, title }) => {
      const b = document.createElement('button');
      b.type = 'button';
      b.textContent = label;
      if (title) b.title = title;
      b.setAttribute('aria-pressed', String(value === current));
      b.addEventListener('click', () => {
        buttons.forEach(x => x.setAttribute('aria-pressed', String(x === b)));
        onPick(value);
      });
      return b;
    });
    bar.append(...buttons);
  }

  // 1) Stylesheet-Schalter: gleiche DOM-Struktur, nur das CSS wechselt
  const link = document.querySelector('link[data-styles]');
  if (link) {
    const files = link.dataset.styles.trim().split(/\s+/);
    const labels = (link.dataset.labels || '').split('|');
    const wanted = params.get('css');
    const start = files.includes(wanted) ? wanted : link.getAttribute('href');
    link.href = start;
    group(files.map((f, i) => ({ value: f, label: labels[i] || f.replace(/\.css$/, '') })), start, f => { link.href = f; });
    const sep = document.createElement('span');
    sep.className = 'demo-sep';
    bar.append(sep);
  }

  if (embed) { // nur Stylesheet + Theme aus der URL übernehmen
    const t = params.get('theme');
    if (t === 'light' || t === 'dark') document.documentElement.style.colorScheme = t;
    return;
  }

  // 2) Theme-Schalter: setzt color-scheme am Root – light-dark() und Formularfelder folgen sofort
  const setTheme = v => { document.documentElement.style.colorScheme = v; };
  const theme = ['light', 'dark'].includes(params.get('theme')) ? params.get('theme') : '';
  setTheme(theme);
  group([
    { value: 'light', label: '☀', title: 'Light' },
    { value: '', label: 'Auto', title: 'System' },
    { value: 'dark', label: '☾', title: 'Dark' },
  ], theme, setTheme);

  document.body.append(bar);
})();
