const cacheVersion = 16;
const activeCache = {
    static: `static-v${cacheVersion}`,
    dynamic: `dynamic-v${cacheVersion}`
}

self.addEventListener('install', (event) => {
    console.log('service worker install successful');
    self.skipWaiting();

    event.waitUntil(
        caches.open(activeCache.static).then((cache) => {
            console.log('cache static open successful');
            cache.addAll([
                '/',
                '/app.js'
            ])
        })
    )
})

self.addEventListener('activate', (event) => {
    console.log('service worker activate successful');
    const activeCacheNames = Object.values(activeCache);

    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map(element => {
                    console.log(element);
                    if (!activeCacheNames.includes(element)) {
                        return caches.delete(element)
                    }
                })
            )
        })
    )
})

self.addEventListener('fetch', (event) => {
    console.log('service worker fetch successful');
    event.respondWith(
        caches.match(event.request).then((res) => {
            if (res) {
                return res
            } else {
                return fetch(event.request).then(res => {
                    caches.open(activeCache.dynamic).then((cache) => {
                        console.log('cache dynamic open successful');
                        cache.put(event.request, res.clone());
                        return res;
                    })
                })
            }
        }).catch((err) => {
            return fetch(event.request)
        })
    )
})