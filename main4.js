//AND = (&&)   OR = (||)     NOT = (!=)  EQULE = (==)

let isLogin = false;
let isRegister = true;

if (isLogin && isRegister) {
    console.log(true);
} else {
    console.log(false);
}

if (isLogin || isRegister) {
    console.log(true);
} else {
    console.log(false);
}

if (isLogin != isRegister) {
    console.log(true);
} else {
    console.log(false);
}

if (isLogin == isRegister) {
    console.log(true);
} else {
    console.log(false);
}

console.log("!isRegister " + !isRegister);