const points = [1, 2];

//add to end
points.push(5, 6)


//add to start
points.unshift(8, 9)


//add to middle
points.splice(2, 0, "arash")

console.log(points)

/////////////////////////////

//find

const points2 = [1, 2, 4, 5, 6, 4, 2, 35, 73, 6];
console.log(points2.indexOf(2))
console.log(points2.indexOf(2, 4))
console.log(points2.includes(3))
console.log(points2.includes(4))


console.log(points2.find(element => element > 35))


const users = [
    { name: "arash", id: 1 },
    { name: "altafi", id: 2 }
]

console.log(users.find(element => element.id === 1))
console.log(users.find(element => element.name === "arash"))


/////////
//arrow function     () => {}

function add(a, b) {
    return a + b
}

const add1 = function add(a, b) {
    return a + b
}

const add2 = (a, b) => a + b

const add3 = (a, b) => {
    return a + b
}


///////////////
//remove 

const points3 = [1, 2, 4, 5, 6, 4, 2, 35, 73, 6];

//remove from end
const popEnd = points3.pop()
console.log(popEnd);
console.log(points3);


//remove from first
const shiftFirst = points3.shift()
console.log(shiftFirst);
console.log(points3);


//remove from middle
const middleDelete = points3.splice(3, 2)
console.log(middleDelete);
console.log(points3);



// concat  => add new array
const first = [1,2,3]
const second = [4,5,6]
const concatItems = first.concat(second)
console.log(concatItems);
