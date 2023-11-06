const fName = document.getElementById('firstname');
const lName = document.getElementById('lastname');
const day = document.getElementById('day');
const month = document.getElementById('month');

fName.focus()

fName.addEventListener('focus', (e) => {
    fName.select();
})

lName.addEventListener('focus', (e) => {
    lName.select();
})

day.addEventListener('blur', () => {
    if (day.value >= 1 && day.value <= 31) {
        day.previousElementSibling.innerHTML = ""
    } else {
        day.previousElementSibling.innerHTML = "لطفا روز را به صورت صحیح 1 تا 31 وارد نمایید"
    }
})

month.addEventListener('blur', () => {
    if (month.value >= 1 && month.value <= 12) {
        month.nextElementSibling.innerHTML = ""
    } else {
        month.nextElementSibling.innerHTML = "لطفا ماه را به صورت صحیح 1 تا 12 وارد نمایید"
    }
})

// day.addEventListener('change', () => {
//     if (day.value >= 1 && day.value <= 31) {
//         day.previousElementSibling.innerHTML = ""
//     } else {
//         day.previousElementSibling.innerHTML = "لطفا روز را به صورت صحیح 1 تا 31 وارد نمایید"
//     }
// })

// month.addEventListener('change', () => {
//     if (month.value >= 1 && month.value <= 12) {
//         month.nextElementSibling.innerHTML = ""
//     } else {
//         month.nextElementSibling.innerHTML = "لطفا ماه را به صورت صحیح 1 تا 12 وارد نمایید"
//     }
// })