// Der alte Weg (nicht eingebunden, nur zum Vergleich): Kacheln per setTimeout nacheinander einblenden.
document.querySelectorAll('.tile')
  .forEach((tile, i) => {
    setTimeout(() => tile.classList.add('show'),
      i * 100);
  });
