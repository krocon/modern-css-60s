// Der alte Weg – wird in dieser Demo NICHT geladen, nur zum Vergleich:
// bei jedem Tastendruck die Höhe zurücksetzen und neu messen.
const box = document.querySelector('textarea');
box.addEventListener('input', () => {
  box.style.height = 'auto';
  box.style.height = box.scrollHeight + 'px';
});
