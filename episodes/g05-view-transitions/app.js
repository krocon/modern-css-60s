// app.js – Ansicht wechseln: Liste ↔ Detail. Klassisches Script (kein Modul), läuft per Doppelklick.
function toggle(card) {
  const open = !card.classList.contains('is-open');
  document.querySelectorAll('.trip').forEach(c => {
    c.classList.toggle('is-open', c === card && open);
    c.querySelector('button').setAttribute('aria-expanded', String(c === card && open));
  });
}

document.querySelectorAll('.trip').forEach(card => {
  card.addEventListener('click', () => {
    if (!document.startViewTransition) return toggle(card); // Fallback: ohne Animation
    document.startViewTransition(() => toggle(card));
  });
});
