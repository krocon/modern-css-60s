// Der alte Weg (nicht eingebunden, nur zum Vergleich): FLIP von Hand – und das nur für eine Karte.
const first = card.getBoundingClientRect();
toggle(card);
const last = card.getBoundingClientRect();
const dx = first.left - last.left;
const dy = first.top - last.top;
card.animate([{ translate: `${dx}px ${dy}px` },
  { translate: '0 0' }], 400); // Größe? Nachbarn?
