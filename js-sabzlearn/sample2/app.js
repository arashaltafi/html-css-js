let db = null
let objectStore = null

window.addEventListener('load', () => {

    const dbIndexed = indexedDB.open('test', 1)

    dbIndexed.addEventListener('upgradeneeded', (event) => {
        db = event.target.result;
        //db.deleteObjectStore('users')
        //db.createObjectStore('users')

        if (!db.objectStoreNames.contains('users')) {
            db.createObjectStore('users', { keyPath: 'id', autoIncrement: true })
        }

        const transaction = db.transaction('users', 'readwrite')
        transaction.objectStore('users').add({ id: 1, name: 'Arash', email: 'arash@arash' })

        console.log("newVersion", event.newVersion);
        console.log("oldVersion", event.oldVersion);
        console.log("upgradeneeded", db);
    })

    dbIndexed.addEventListener('error', (event) => {
        console.log("error", event);
    })

    dbIndexed.addEventListener('success', (event) => {
        db = event.target.result;
        console.log("success", event.target.result);
    })

})