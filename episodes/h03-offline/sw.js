// sw.js – Service Worker: eigene Offline-Seite in 20 Zeilen (Folge H3)
// Läuft nur über https:// oder http://localhost – per Doppelklick (file://) registriert kein Browser einen Service Worker.
const CACHE = 'pocket-notes-v1';

// 1) install: die Offline-Seite vorab in den Cache legen
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE).then((cache) => cache.add('offline.html'))
  );
});

// 2) fetch: bei Seitenaufrufen erst das Netz fragen – ohne Netz die Offline-Seite aus dem Cache
self.addEventListener('fetch', (event) => {
  if (event.request.mode !== 'navigate') return;
  event.respondWith(
    fetch(event.request).catch(() =>
      caches.match('offline.html'))
  );
});
