//for

// for (i = 0; i < 10; ++i) {
    //console.log("i is : " + i);
// }

//while

// let j = 0;
// while(j < 10) {
//     j++;
//     console.log("j is : " + j);
// }


// let x = 0;
// do {
//     x++;
//     console.log("x is : " + x);
// } while (x < 10);

let user = {
    "name": "arash",
    "family": "altafi"
}

for (key in user) {
    console.log("user key: " + key + " ||| user value: " + user[key])
}