// Der alte Weg (nicht eingebunden, nur zum Vergleich): Fortschritt per Scroll-Listener berechnen.
const bar = document.querySelector('.progress');
const root = document.documentElement;
addEventListener('scroll', () => {
  const max = root.scrollHeight - innerHeight;
  bar.style.scale = `${scrollY / max} 1`;
});
