const CACHE_NAME = 'feeder-dashboard-cache-v1';
const urlsToCache = [
  '/',
  '/FEEDERS-DASHBOARD/index.html',
  '/FEEDERS-DASHBOARD/manifest.json',
  '/FEEDERS-DASHBOARD/icons/icon-192.png',
  '/FEEDERS-DASHBOARD/icons/icon-512.png',
  // add any other assets like CSS/JS files here
];

self.addEventListener('install', event => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(clients.claim());
});
