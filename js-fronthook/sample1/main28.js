console.log("start");

function loginUser(email, password, callback) {
    setTimeout(() => {
        console.log("data is ready")

        callback({ email })
    }, 2000);
}

const user = loginUser("arash@gmail.com", "123", (user) => {
    console.log(user.email)
})

console.log("end");

///////////////////////////////////

const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve("Test Message is Resolve")
        reject(new Error("Test Message is Reject"))
    }, 4000);
})

promise
    .then((data) => {
        console.log(data)
    })
    .catch((data) => {
        console.log(data.message)
    })

///////////////////////////////////

function getUsername(user) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({ user })
        }, 5000);
    })
}

function getUserPhoto(user) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (user == "arash") {
                resolve({ "photo": "https://arashaltafi.ir/arash.jpg", "user": user })
            } else {
                reject(new Error("photo not found!"))
            }
        }, 2000);
    })
}

getUsername("arash")
    .then((user) => {
        return getUserPhoto(user.user)
    })
    .then((photo) => {
        console.log(`${photo.user} photo is: ${photo.photo}`)
    })
    .catch((error) => {
        console.log(error.message)
    });