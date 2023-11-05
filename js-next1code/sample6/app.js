const pWindowScreen = document.getElementById("window-screen");
const pClientScreen = document.getElementById("client-screen");

const pWindow = document.getElementById("window");
const pClient = document.getElementById("client");
const pNavigator = document.getElementById("navigator");

const btnAssign = document.getElementById("btn-assign");
const btnReplace = document.getElementById("btn-replace");
const btnBack = document.getElementById("btn-back");
const btnForward = document.getElementById("btn-forward");
const btnCookieEnabled = document.getElementById("btn-cookie-enabled");
const btnAppName = document.getElementById("btn-app-name");
const btnLanguage = document.getElementById("btn-language");
const btnOnline = document.getElementById("btn-online");
const btnAlert = document.getElementById("btn-alert");
const btnTimeout = document.getElementById("btn-timeout");
const btnStartInterval = document.getElementById("btn-start-interval");
const btnStopInterval = document.getElementById("btn-stop-interval");

getWindowInformation();
getClientInformation();
getWindowLocation();

//window info
function getWindowInformation() {
    pWindowScreen.innerHTML =
        "Browser inner window width: " + window.innerWidth + "px<br>" +
        "Browser inner window height: " + window.innerHeight + "px";

    window.addEventListener("resize", () => {
        pWindowScreen.innerHTML =
            "Browser inner window width: " + window.innerWidth + "px<br>" +
            "Browser inner window height: " + window.innerHeight + "px";
    })
}

//window info
function getClientInformation() {
    pClientScreen.innerHTML =
        "Client inner window width: " + screen.width + "px<br>" +
        "Client inner window height: " + screen.height + "px";
}

function getWindowLocation() {
    pWindow.innerHTML =
        "window.location.href: " + window.location.href + "<br>" +
        "window.location.host: " + window.location.host + "<br>" +
        "window.location.hostname: " + window.location.hostname + "<br>" +
        "window.location.port: " + window.location.port + "<br>" +
        "window.location.protocol : " + window.location.protocol + "<br>" +
        "window.location.pathname: " + window.location.pathname + "<br>";
}

btnAssign.addEventListener('click', () => {
    window.location.assign("https://www.arashaltafi.ir")
})

btnReplace.addEventListener('click', () => {
    window.location.replace('https://google.com');
})

btnBack.addEventListener('click', () => {
    window.history.back()
})

btnForward.addEventListener('click', () => {
    window.history.forward()
})

btnCookieEnabled.addEventListener('click', () => {
    pNavigator.innerHTML =
        "Browser cookieEnabled: " + navigator.cookieEnabled + "<br>";
})

btnAppName.addEventListener('click', () => {
    pNavigator.innerHTML =
        "Browser Application Name: " + navigator.appName + "<br>";
})

btnLanguage.addEventListener('click', () => {
    pNavigator.innerHTML =
        "Browser Application Name: " + navigator.language + "<br>";
})

btnOnline.addEventListener('click', () => {
    pNavigator.innerHTML =
        "Browser Online: " + navigator.onLine + "<br>";
})

btnAlert.addEventListener('click', () => {
    // window.alert("Hello\nHow are you?");

    // if (window.confirm("Press a button!")) {
    //     pNavigator.innerHTML = "You pressed OK!";
    // } else {
    //     pNavigator.innerHTML = "You pressed Cancel!";
    // }

    let person = window.prompt("Please enter your name", "Harry Potter");
    if (person == null || person == "") {
        pNavigator.innerHTML = "User cancelled the prompt.";
    } else {
        pNavigator.innerHTML = "Hello " + person + "! How are you today?";
    }
})

btnTimeout.addEventListener('click', () => {
    setTimeout(() => {
        pNavigator.innerHTML = 'after 1 second timeout!!!';
    }, 1000);
})

let myVar = setInterval(myTimer, 1000);
function myTimer() {
    const d = new Date();
    pNavigator.innerHTML = d.toLocaleTimeString();
}
btnStartInterval.addEventListener('click', () => {
    
})

btnStopInterval.addEventListener('click', () => {
    clearInterval(myVar);
})

document.addEventListener('DOMContentLoaded', () => {
    alert('dom was loaded complete!!!')
})