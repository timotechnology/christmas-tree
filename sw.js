// Silent Service Worker: caches core static assets for faster repeat loads and offline resilience.
// No UI, no logging.

const VERSION = 'ct-sw-v2';
const STATIC_CACHE = `ct-static-${VERSION}`;
const RUNTIME_CACHE = `ct-runtime-${VERSION}`;

// Precache only small/critical assets (avoid big photos by default).
const PRECACHE_URLS = [
  '/',
  '/index.html',
  '/libs/es-module-shims.js',
  '/libs/three/three.module.js',
  '/libs/mediapipe/vision_bundle.mjs',
  '/libs/mediapipe/wasm/vision_wasm_internal.js',
  '/libs/mediapipe/wasm/vision_wasm_internal.wasm',
  '/libs/mediapipe/wasm/vision_wasm_nosimd_internal.js',
  '/libs/mediapipe/wasm/vision_wasm_nosimd_internal.wasm',
  '/hand_models/gesture_recognizer.task'
];

self.addEventListener('install', (event) => {
  event.waitUntil((async () => {
    const cache = await caches.open(STATIC_CACHE);
    await cache.addAll(PRECACHE_URLS);
    self.skipWaiting();
  })());
});

self.addEventListener('activate', (event) => {
  event.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(keys.map((k) => {
      if (k.startsWith('ct-') && k !== STATIC_CACHE && k !== RUNTIME_CACHE) {
        return caches.delete(k);
      }
    }));
    await self.clients.claim();
  })());
});

function isCoreAsset(pathname) {
  return (
    pathname.startsWith('/libs/') ||
    pathname.startsWith('/hand_models/') ||
    pathname.endsWith('.wasm') ||
    pathname.endsWith('.task')
  );
}

self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET') return;

  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return;
  if (url.pathname.startsWith('/api/')) return; // never cache APIs

  // HTML: network-first (keep updates), fallback to cache
  if (url.pathname === '/' || url.pathname.endsWith('.html')) {
    event.respondWith((async () => {
      try {
        const fresh = await fetch(req);
        const cache = await caches.open(RUNTIME_CACHE);
        cache.put(req, fresh.clone());
        return fresh;
      } catch {
        const cached = await caches.match(req);
        return cached || caches.match('/index.html');
      }
    })());
    return;
  }

  // photos.json: network-first (avoid “stuck” photo list), fallback to cache
  if (url.pathname === '/photos.json') {
    event.respondWith((async () => {
      try {
        const fresh = await fetch(req);
        const cache = await caches.open(RUNTIME_CACHE);
        cache.put(req, fresh.clone());
        return fresh;
      } catch {
        const cached = await caches.match(req);
        return cached || fetch(req);
      }
    })());
    return;
  }

  // Core assets: cache-first (fast), fallback to network
  if (isCoreAsset(url.pathname)) {
    event.respondWith((async () => {
      const cached = await caches.match(req);
      if (cached) return cached;
      const fresh = await fetch(req);
      const cache = await caches.open(STATIC_CACHE);
      cache.put(req, fresh.clone());
      return fresh;
    })());
    return;
  }

  // Other static files: stale-while-revalidate
  event.respondWith((async () => {
    const cached = await caches.match(req);
    const fetchPromise = fetch(req).then(async (fresh) => {
      const cache = await caches.open(RUNTIME_CACHE);
      cache.put(req, fresh.clone());
      return fresh;
    }).catch(() => null);

    return cached || (await fetchPromise) || fetch(req);
  })());
});


