const CACHE = 'gif-studio-v2.11';
self.addEventListener('install', function(e){ e.waitUntil(caches.open(CACHE).then(function(c){ return c.addAll(['./', './index.html', './manifest.json', './icon.svg']); }).then(function(){ return self.skipWaiting(); })); });
self.addEventListener('activate', function(e){ e.waitUntil(clients.claim()); });
self.addEventListener('fetch', function(e){ e.respondWith(caches.match(e.request).then(function(r){ return r || fetch(e.request); })); });
