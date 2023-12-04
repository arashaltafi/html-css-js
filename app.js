//service worker registration
if ('serviceWorker' in navigator) {
    window.addEventListener('load', async () => {
        try {
            const registration = await navigator.serviceWorker.register('./sw.js')
            console.log('ServiceWorker registration successful with scope: ', registration.scope);
        } catch (error) {
            console.log('ServiceWorker registration failed: ', error);
        }
    })
} else {
    console.log('ServiceWorker not supported');
}

//dom handler
const fetchCourse = async () => {
    const res = await fetch('https://fakestoreapi.com/products?limit=4')
    const data = await res.json();
    return data;
}

const createUi = (items) => {
    const courseParent = document.getElementById('courses-parent');
    items.forEach((item) => {
        courseParent.insertAdjacentHTML('beforeend', `
            <div class="col">
                <div class="card" style="width: 18rem">
                    <img style="width: 220px"; src="${item.image}" class="card-img-top" alt="Course Cover" />
                    <div class="card-body">
                        <h5 class="card-title">${item.title}</h5>
                        <p class="card-text">
                            Some quick example text to build on the card title and make up
                            the bulk of the card's content.
                        </p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>
        `)
    })
}

const getNotificationPermission = () => {
    //way 1
    Notification.requestPermission().then(result => {
        console.log('Notification Permission', result);
        if (result === 'granted') {
            showNotification('Notification Title', 'Notification Body');
        } else {
            console.log('Notification Permission Denied');
        }
    }).catch(error => {
        console.log('Notification Permission', error);
    })

    //way 2
    const notificationPermission = Notification.permission;
    if (notificationPermission === 'granted') {
        showNotification('Notification Title', 'Notification Body');
    } else {
        console.log('Notification Permission Denied');
    }
}

const showNotification = (title, body) => {
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.ready.then(sw => {
            sw.showNotification(
                title, {
                body: body,
                dir: 'ltr',
                icon: '/assets/icons/icon-128x128.png',
                image: 'https://arashaltafi.ir/arash.jpg',
                badge: '/assets/icons/icon-128x128.png',
                tag: 'hw1',
                data: {
                    url: "https://arashaltafi.ir"
                },
                renotify: true,
                requireInteraction: true,
                silent: false,
                vibrate: [200, 100, 200],
                actions: [
                    {
                        action: 'action1',
                        title: 'Action 1',
                        icon: '/assets/icons/icon-128x128.png',
                    }, {
                        action: 'action2',
                        title: 'Action 2',
                        icon: '/assets/icons/icon-128x128.png',
                    },
                ]
            }
            )
        })
    } else {
        alert('no access')
    }


    // new Notification(title, {
    //     body: body,
    //     dir: 'ltr',
    //     icon: './assets/icons/icon-128x128.png',
    //     image: 'https://arashaltafi.ir/arash.jpg',
    //     badge: '/assets/icons/icon-128x128.png',
    //     tag: 'hw1',
    //     data: {
    //         url: "https://arashaltafi.ir"
    //     },
    //     renotify: true,
    //     requireInteraction: true,
    //     silent: false,
    //     vibrate: [200, 100, 200],
    //     actions: [
    //         {
    //             action: 'action1',
    //             title: 'Action 1',
    //             icon: '/assets/icons/icon-128x128.png',
    //         }, {
    //             action: 'action2',
    //             title: 'Action 2',
    //             icon: '/assets/icons/icon-128x128.png',
    //         },
    //     ]
    // })
}

window.addEventListener('load', async () => {
    const courses = await fetchCourse();
    createUi(courses);
    if ("Notification" in window) {
        getNotificationPermission();
    }
})