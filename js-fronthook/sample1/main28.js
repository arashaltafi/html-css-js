//CallBack
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
//Promise

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
//Promise

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
        console.log(`promise => ${photo.user} photo is: ${photo.photo}`)
    })
    .catch((error) => {
        console.log(`promise => ${error.message}`)
    });


///////////////////////////////////
//Async Await
async function displayPhoto(name) {
    try {
        const user = await getUsername(name);
        const photo = await getUserPhoto(user.user)
        console.log(`await async => ${photo.user} photo is: ${photo.photo}`)
    } catch (error) {
        console.log(`await async => ${error.message}`)
    }
}

displayPhoto("arash")