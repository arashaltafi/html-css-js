const checkEmail = document.getElementById('btn-email')
const checkUrl = document.getElementById('btn-url')
const checkEmpty = document.getElementById('btn-empty')
const checkHexColor = document.getElementById('btn-hex')
const checkBoolean = document.getElementById('btn-boolean')

checkEmail.addEventListener('click', () => {
    let email = prompt("Enter Your Email: ");
    alert(`isEmail: ${validator.isEmail(email)}`)
})

checkUrl.addEventListener('click', () => {
    let url = prompt("Enter Your Url: ");
    alert(`isUrl: ${validator.isURL(url)}`)
})

checkEmpty.addEventListener('click', () => {
    let name = prompt("Enter Your Name: ");
    alert(`isEmpty: ${validator.isEmpty(name)}`)
})

checkHexColor.addEventListener('click', () => {
    let color = prompt("Enter Your Color Hex: ");
    alert(`isHexColor: ${validator.isHexColor(color)}`)
})

checkHexColor.addEventListener('click', () => {
    let color = prompt("Enter Your Color Hex: ");
    alert(`isBoolean: ${validator.isBoolean(color)}`)
})

checkBoolean.addEventListener('click', () => {
    let boolean = prompt("Enter Your Variable: ");
    alert(`isBoolean: ${validator.isBoolean(boolean)}`)
})
