const a = 10;

switch (a) {
    case 1:
        console.log("a is 1");
        break;
    case 2:
        console.log("a is 2");
        break;
    case 3:
        console.log("a is 3");
        break;
    case 4:
        console.log("a is 4");
        break;
    case 5:
        console.log("a is 5");
        break;
    case 6:
        console.log("a is 6");
        break;
    case 7:
        console.log("a is 7");
        break;
    case 8:
        console.log("a is 8");
        break;
    case 9:
        console.log("a is 9");
        break;
    case 10:
        console.log("a is 10");
        break;
    default:
        console.log("a is default");
}

if (a > 20) {
    console.log("a is above 20");
} else if (a > 15) {
    console.log("a is above 15");
} else if (a > 10) {
    console.log("a is above 10");
} else {
    console.log("a is below 10");
}

//////////////////

const day = new Date().getDay();
switch (day) {
    case 1:
        console.log("Sunday");
        break;
    case 2:
        console.log("Monday");
        break;
    case 3:
        console.log("Tuesday");
        break;
    case 4:
        console.log("Wednesday");
        break;
    case 5:
        console.log("Thursday");
        break;
    case 6:
        console.log("Friday");
        break;
    case 7:
        console.log("Saturday");
        break;
    default:
        console.log("day is wrong!!!");
}

//while
var i = 0
while(i < 10) {
    i++;
    console.log("while i is : " + i);
    if (i == 5) break;
}

//for
for (i = 0; i < 10; ++i) {
    console.log("for i is : " + i);
}

//do while
var j = 0;
do {
    j++;
    console.log("do while j is : " + j);
} while (j < 5)