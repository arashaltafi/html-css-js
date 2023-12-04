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

window.addEventListener('load', async () => {
    const courses = await fetchCourse();
    createUi(courses)
})