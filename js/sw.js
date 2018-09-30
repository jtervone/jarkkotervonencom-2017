const version = "0.0.4";
const cacheName = `jarkkotervonen-${version}`;

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(cacheName).then(cache => {
      return cache.addAll([
        `/`,
        `/kuka/`,
        '/assets/img/logo.png',
        '/assets/img/logo-152.png',
        '/assets/img/logo-192.png',
        '/assets/css/normalize.css',
        '/assets/css/skeleton.css',
        '/assets/css/custom.css',
      ])
        .then(() => self.skipWaiting());
    })
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.open(cacheName)
      .then(cache => cache.match(event.request, {ignoreSearch: true}))
      .then(response => {
      return response || fetch(event.request);
    })
  );
});
