// Service worker for Algebra Placement Grader PWA.
// Caches the app shell on install so it works offline after first visit.
// Bump CACHE_VERSION whenever you change any cached file to force a refresh.

const CACHE_VERSION = 'apg-v1';
const APP_SHELL = [
  './',
  './index.html',
  './bubble-scanner.html',
  './answer-sheet-printable.html',
  './manifest.json',
  './icon-192.png',
  './icon-512.png'
];

// Install: pre-cache the app shell.
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_VERSION)
      .then(cache => cache.addAll(APP_SHELL))
      .then(() => self.skipWaiting())
  );
});

// Activate: clean up old caches.
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE_VERSION).map(k => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

// Fetch strategy:
// - For same-origin requests: cache-first, fall back to network.
// - For cross-origin (e.g., OpenCV CDN, Google Fonts): network-first, fall back to cache.
//   This keeps the heavy OpenCV.js usable offline once it has been fetched once.
self.addEventListener('fetch', event => {
  const req = event.request;
  if (req.method !== 'GET') return;

  const url = new URL(req.url);
  const sameOrigin = url.origin === self.location.origin;

  if (sameOrigin) {
    event.respondWith(
      caches.match(req).then(cached => cached || fetch(req).then(res => {
        // Cache any successful same-origin GET
        const copy = res.clone();
        caches.open(CACHE_VERSION).then(c => c.put(req, copy));
        return res;
      }).catch(() => cached))
    );
  } else {
    event.respondWith(
      fetch(req).then(res => {
        const copy = res.clone();
        caches.open(CACHE_VERSION).then(c => c.put(req, copy));
        return res;
      }).catch(() => caches.match(req))
    );
  }
});
