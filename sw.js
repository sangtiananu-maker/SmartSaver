// SmartSaver Service Worker v2.5.0 (iOS & PWA Offline Edition)
const CACHE_NAME = 'smartsaver-ios-v2.5.3';
const STATIC_ASSETS = [
  './',
  './index.html',
  './style.css',
  './app.js',
  './manifest.json',
  './apple-touch-icon.png',
  './apple-touch-icon-180x180.png',
  './apple-touch-icon-167x167.png',
  './apple-touch-icon-152x152.png',
  './apple-touch-icon-120x120.png',
  './icon-192.png',
  './icon-512.png',
  './favicon.png',
  './favicon.ico'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(STATIC_ASSETS.map(url => new Request(url, { cache: 'reload' })));
    }).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;
  
  event.respondWith(
    caches.match(event.request).then(cached => {
      if (cached) return cached;

      return fetch(event.request).then(response => {
        if (response.status === 200 && (event.request.url.startsWith('https://fonts.googleapis.com') || event.request.url.startsWith('https://fonts.gstatic.com'))) {
          const responseToCache = response.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(event.request, responseToCache));
        }
        return response;
      }).catch(() => caches.match('./index.html'));
    })
  );
});
