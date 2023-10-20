let i2 = 0;
while (i2 < 10) {
    i2++;
    if (i2 % 2 == 0) {
        continue;
    }
    console.log("i2 " + i2);
}


let j2 = 0;
while (j2 < 10) {
    j2++;
    if (j2 > 5) {
        break;
    }
    console.log("j2 " + j2);
}