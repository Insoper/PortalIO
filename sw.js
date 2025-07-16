const CACHE_NAME = 'portal-insoper-v1';
const BASE_PATH = '/PortalIO/';  // TAMBAHKAN INI
const urlsToCache = [
  BASE_PATH,
  BASE_PATH + 'index.html',
  BASE_PATH + 'manifest.json',
  BASE_PATH + 'android-chrome-192x192.png',
  BASE_PATH + 'android-chrome-512x512.png',
  BASE_PATH + 'apple-touch-icon.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
