//try catch

function users(name) {
    if (typeof (name) !== "string") {
        throw new Error("Type Name is Not String!!!")
    }

    let parts = name.split(" ");
    console.log(`${parts[0]} ${parts[1]}`)
}

try {
    users(123)
} catch (error) {
    alert(error)
}