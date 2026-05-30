const CACHE_NAME = 'celulavr-v1';
const ASSETS = [
'index.html',
'manifest.json',
'https://aframe.io/releases/1.4.2/aframe.min.js',
'https://cdn.jsdelivr.net/gh/donmccurdy/aframe-extras@v6.1.1/dist/aframe-extras.min.js',
'https://unpkg.com/super-hands@^3.0.3/dist/super-hands.min.js'
];
self.addEventListener('install', (e) => {
e.waitUntil(
caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
);
});
self.addEventListener('fetch', (e) => {
e.respondWith(
caches.match(e.request).then((response) => response || fetch(e.request))
);
});