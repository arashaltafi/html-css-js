self.addEventListener('install', (event) => {
    console.log('service worker install successful');
    self.skipWaiting();
})

self.addEventListener('activate', (event) => {
    console.log('service worker activate successful');
})

self.addEventListener('fetch', (event) => {
    console.log('service worker fetch successful');
})