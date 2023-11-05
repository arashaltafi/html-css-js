const pWindowScreen = document.getElementById("window-screen");
const pClientScreen = document.getElementById("client-screen");

const pWindow = document.getElementById("window");
const pClient = document.getElementById("client");

const btnAssign = document.getElementById("btn-assign");
const btnBack = document.getElementById("btn-back");
const btnForward = document.getElementById("btn-forward");

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
        "window.location.protocol : " + window.location.protocol  + "<br>" +
        "window.location.pathname: " + window.location.pathname + "<br>";
}

btnAssign.addEventListener('click', () => {
    window.location.assign("https://www.arashaltafi.ir")
})

btnBack.addEventListener('click', () => {
    window.history.back()
})

btnForward.addEventListener('click', () => {
    window.history.forward()
})