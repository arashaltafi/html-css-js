//try catch

function users(name) {
    if (typeof (name) !== "string") {
        throw new Error("Type Name is Not String!!!")
    }

    let parts = name.split(" ");

    if (parts.length !== 2) {
        throw new Error("Name Is Not Valid, Please Enter Correct Name!")
    }

    console.log(`${parts[0]} ${parts[1]}`)
}

try {
    users("arash")
} catch (error) {
    alert(error)
}