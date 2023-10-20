let age3 = 25;
let resultSwitchCase;

switch (age3) {
    case 20:
        resultSwitchCase = "age is 20";
        break;
    case 21:
        resultSwitchCase = "age is 21"
        break;
    case 22:
        resultSwitchCase = "age is 22"
        break;
    case 23:
    case 24:
        resultSwitchCase = "age is 23 or 24"
        break;
    case 25:
        resultSwitchCase = "age is 25"
        break;
    default:
        resultSwitchCase = "age is wrong"
}

console.log(resultSwitchCase)