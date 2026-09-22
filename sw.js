// SmartSaver Service Worker v2.6.0 (iOS & PWA Auto-Update Edition)
const CACHE_NAME = 'smartsaver-ios-v2.6.0';
const STATIC_ASSETS = [
  './',
  './index.html',
  './style.css',
  './style.css?v=2.6.0',
  './app.js',
  './app.js?v=2.6.0',
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
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(STATIC_ASSETS.map(url => new Request(url, { cache: 'reload' })));
    })
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('message', event => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;

  const url = new URL(event.request.url);

  // Check if navigation request (HTML page load)
  const isNavigation = event.request.mode === 'navigate' ||
    (event.request.headers.get('accept') && event.request.headers.get('accept').includes('text/html')) ||
    url.pathname.endsWith('/index.html') ||
    url.pathname.endsWith('/');

  if (isNavigation) {
    // Strategy: Network-First for HTML (Ensures latest version is fetched when online)
    event.respondWith(
      fetch(event.request)
        .then(response => {
          if (response && response.status === 200) {
            const responseClone = response.clone();
            caches.open(CACHE_NAME).then(cache => cache.put(event.request, responseClone));
          }
          return response;
        })
        .catch(() => {
          // If offline, fall back to cached index.html
          return caches.match('./index.html', { ignoreSearch: true })
            .then(cached => cached || caches.match(event.request));
        })
    );
    return;
  }

  // Strategy: Stale-While-Revalidate for CSS, JS, fonts, and images
  event.respondWith(
    caches.match(event.request).then(cached => {
      const fetchPromise = fetch(event.request).then(networkResponse => {
        if (networkResponse && networkResponse.status === 200) {
          const responseClone = networkResponse.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(event.request, responseClone));
        }
        return networkResponse;
      }).catch(() => null);

      return cached || fetchPromise;
    })
  );
});