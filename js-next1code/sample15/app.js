const result = document.querySelector(".result")
const convert = document.querySelector(".convert")
const date = document.querySelector(".date")
let finalDate;

convert.addEventListener('click', () => {
    finalDate = new persianDate(new Date(date.value)).format('YYYY/MM/DD');
    console.log(date.value)
    result.innerHTML = finalDate
})