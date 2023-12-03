self.addEventListener('install', (event) => {
    console.log('service worker install successful');
    self.skipWaiting();

    event.waitUntil(
        caches.open('cache-v1').then((cache) => {
            console.log('cache open successful');
            cache.addAll([
                '/',
                '/app.js'
            ])
        })
    )
})

self.addEventListener('activate', (event) => {
    console.log('service worker activate successful');
})

self.addEventListener('fetch', (event) => {
    console.log('service worker fetch successful');
    event.respondWith(
        caches.match(event.request).then((res) => {
            if (res) {
                return res
            } else {
                return fetch(event.request)
            }
        }).catch((err) => {
            return fetch(event.request)
        })
    )
})