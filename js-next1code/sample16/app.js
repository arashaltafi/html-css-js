const input = document.querySelector(".input")

const btnSetLocalStorage = document.querySelector("#btn-set-localstorage")
const btnGetLocalStorage = document.querySelector("#btn-get-localstorage")
const btnRemoveLocalStorage = document.querySelector("#btn-remove-localstorage")
const btnClearLocalStorage = document.querySelector("#btn-clear-localstorage")

const btnSetSessionStorage = document.querySelector("#btn-set-sessionstorage")
const btnGetSessionStorage = document.querySelector("#btn-get-sessionstorage")
const btnRemoveSessionStorage = document.querySelector("#btn-remove-sessionstorage")
const btnClearSessionStorage = document.querySelector("#btn-clear-sessionstorage")

const btnSetCookie = document.querySelector("#btn-set-cookie")
const btnGetCookie = document.querySelector("#btn-get-cookie")
const btnDeleteCookie = document.querySelector("#btn-delete-cookie")

const inputValue = document.querySelector('#input-value')
const inputKey = document.querySelector('#input-key')

const container = document.querySelector('.container')
const result = document.createElement('p')
container.appendChild(result)

//local storage
btnSetLocalStorage.addEventListener('click', () => {
    let value = inputValue.value
    let key = inputKey.value
    if (value == "" || key == "") {
        alert('please first fill key and value inputs')
        clearInputs()
    } else {
        localStorage.setItem(key, value)
        clearInputs()
        inputValue.value = 'new value added'
        result.innerHTML = 'new value added'
    }
})

btnGetLocalStorage.addEventListener('click', () => {
    let key = inputKey.value
    if (key == "") {
        alert('please first fill key input')
        clearInputs()
    } else {
        let newValue = localStorage.getItem(key)
        inputValue.value = newValue
        result.innerHTML = newValue
    }
})

btnRemoveLocalStorage.addEventListener('click', () => {
    let key = inputKey.value
    if (key == "") {
        alert('please first fill key input')
        clearInputs()
    } else {
        localStorage.removeItem(key)
        clearInputs()
        result.innerHTML = 'delete success'
    }
})

btnClearLocalStorage.addEventListener('click', () => {
    localStorage.clear()
    clearInputs()
    result.innerHTML = 'clear success'
})

//session
btnSetSessionStorage.addEventListener('click', () => {
    let value = inputValue.value
    let key = inputKey.value
    if (value == "" || key == "") {
        alert('please first fill key and value inputs')
        clearInputs()
    } else {
        sessionStorage.setItem(key, value)
        clearInputs()
        inputValue.value = 'new value added'
        result.innerHTML = 'new value added'
    }
})

btnGetSessionStorage.addEventListener('click', () => {
    let key = inputKey.value
    if (key == "") {
        alert('please first fill key inputs')
        clearInputs()
    } else {
        let newValue = sessionStorage.getItem(key)
        inputValue.value = newValue
        result.innerHTML = newValue
    }
})

btnRemoveSessionStorage.addEventListener('click', () => {
    let key = inputKey.value
    if (key == "") {
        alert('please first fill key inputs')
        clearInputs()
    } else {
        sessionStorage.removeItem(key)
        clearInputs()
        result.innerHTML = 'delete success'
    }
})

btnClearSessionStorage.addEventListener('click', () => {
    sessionStorage.clear()
    clearInputs()
    result.innerHTML = 'clear success'
})

//Cookie
btnSetCookie.addEventListener('click', () => {
    let value = inputValue.value
    let key = inputKey.value
    if (value == "" || key == "") {
        alert('please first fill key and value inputs')
        clearInputs()
    } else {
        // document.cookie = `${key}= ${value}; expires=Thu, 20 Nov 2030 12:00:00 UTC`
        setCookie(value, key, 365)
        clearInputs()
        inputValue.value = 'new cookie added'
        result.innerHTML = 'new cookie added'
    }
})

btnGetCookie.addEventListener('click', () => {
    let key = inputKey.value
    if (key == "") {
        alert('please first fill key inputs')
        clearInputs()
    } else {
        clearInputs()
        result.innerHTML = getCookie(key)
        // document.cookie
    }
})

btnDeleteCookie.addEventListener('click', () => {
    let value = inputValue.value
    let key = inputKey.value
    if (value == "" || key == "") {
        alert('please first fill key and value inputs')
        clearInputs()
    } else {
        document.cookie = `${key}= ${value}; expires=Thu, 20 Nov 1970 12:00:00 UTC`
        clearInputs()
        inputValue.value = 'new cookie added'
        result.innerHTML = 'new cookie added'
    }
})

function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    let name = cname + "=";
    let ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function checkCookie() {
    let user = getCookie("username");
    if (user != "") {
        alert("Welcome again " + user);
    } else {
        user = prompt("Please enter your name:", "");
        if (user != "" && user != null) {
            setCookie("username", user, 365);
        }
    }
}

function clearInputs() {
    inputKey.value = ""
    inputValue.value = ""
    result.innerHTML = ""
}
