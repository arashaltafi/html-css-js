const circle = {
    radius: 1
}

//add
circle.color = "red"
circle.color = function draw() {}
circle.isVisible = false

//delete
delete circle.radius

console.log(circle)


let colors = ["red", "blue", "green", "yellow"];

colors.push = "purple";// Adds "purple" to the end of the array

let indexToDelete = colors.indexOf("blue");
colors.splice(indexToDelete, 1); // Removes one element starting from indexToDelete


// Display the modified array
console.log(colors);

// Find an item in the array By Index
let itemToFind = "green";
let indexToFind = colors.indexOf(itemToFind); // Finds the index of "green"
console.log(`The index of "${itemToFind}" is ${indexToFind}`);

//Find With Conditions
let findYColors = colors.find(element => element.startsWith("y"))
console.log(`The Y Colors is "${findYColors}`);

//Filter with Conditions
let filterGColors = colors.filter(element => element.startsWith("g"))
console.log(`The G Colors is "${filterGColors}`);