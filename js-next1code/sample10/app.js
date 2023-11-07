const historyBack = document.getElementById('btn-history-back');
const historyForward = document.getElementById('btn-history-forward');
const historyGo = document.getElementById('btn-history-go');
const historyLength = document.getElementById('btn-history-length');
const locationReload = document.getElementById('btn-location-reload');
const locationReloadWithoutCache = document.getElementById('btn-location-reload-without-cache');
const locationAssign = document.getElementById('btn-location-assign');
const locationReplace = document.getElementById('btn-location-replace');
const windowOpenTab = document.getElementById('btn-window-open-tab');
const windowOpenCurrent = document.getElementById('btn-window-open-current');
const windowOpenWindow = document.getElementById('btn-window-open-window');
const windowCloseCurrent = document.getElementById('btn-window-close-current');
const windowCloseLast = document.getElementById('btn-window-close-last');
const btnAlert = document.getElementById('btn-alert');
const btnPrompt = document.getElementById('btn-prompt');
const btnConfirm = document.getElementById('btn-confirm');
const btnNavigatorAppName = document.getElementById('btn-navigator-app-name');
const btnNavigatorOnline = document.getElementById('btn-navigator-online');
const btnNavigatorUserAgent = document.getElementById('btn-navigator-user-agent');
const btnPlatformName = document.getElementById('btn-platform-name');
const btnPlatformVersion = document.getElementById('btn-platform-version');
const btnPlatformLayout = document.getElementById('btn-platform-layout');
const btnPlatformOs = document.getElementById('btn-platform-os');
const btnPlatformDescription = document.getElementById('btn-platform-description');

historyBack.addEventListener('click', () => {
    window.history.back()
})

historyForward.addEventListener('click', () => {
    window.history.forward()
})

historyGo.addEventListener('click', () => {
    window.history.go(-2)
})

historyLength.addEventListener('click', () => {
    const length = window.history.length
    alert(`length is: ${length}`)
})

locationReload.addEventListener('click', () => {
    window.location.reload() //default input is false
})

locationReloadWithoutCache.addEventListener('click', () => {
    window.location.reload(true)
})

locationAssign.addEventListener('click', () => {
    window.location.assign('https://arashaltafi.ir')
})

locationReplace.addEventListener('click', () => {
    window.location.replace('https://arashaltafi.ir')
})

windowOpenTab.addEventListener('click', () => {
    window.open('https://arashaltafi.ir')
})

windowOpenCurrent.addEventListener('click', () => {
    window.open('https://arashaltafi.ir', '_self')
})

let wLast;
windowOpenWindow.addEventListener('click', () => {
    wLast = window.open('https://arashaltafi.ir', '_blank', 'width=400 , height=400')
})

windowCloseCurrent.addEventListener('click', () => {
    window.close()
})

windowCloseLast.addEventListener('click', () => {
    wLast.close()
})

btnAlert.addEventListener('click', () => {
    window.alert('test alert')
})

btnPrompt.addEventListener('click', () => {
    const answer = window.prompt('whats your name???')
    alert(`hi ${answer}`)
})

btnConfirm.addEventListener('click', () => {
    const answer = window.confirm('are you sure???')
    alert(answer)
})

btnNavigatorAppName.addEventListener('click', () => {
    const appName = window.navigator.appName
    alert(appName)
})

btnNavigatorOnline.addEventListener('click', () => {
    const appName = window.navigator.onLine
    alert(appName)
})

btnNavigatorUserAgent.addEventListener('click', () => {
    const appName = window.navigator.userAgent
    alert(appName)
})

btnPlatformName.addEventListener('click', () => {
    const answer = platform.name
    alert(answer)
})

btnPlatformVersion.addEventListener('click', () => {
    const answer = platform.version
    alert(answer)
})

btnPlatformLayout.addEventListener('click', () => {
    const answer = platform.layout
    alert(answer)
})

btnPlatformOs.addEventListener('click', () => {
    const answer = platform.os
    alert(answer)
})

btnPlatformDescription.addEventListener('click', () => {
    const answer = platform.description
    alert(answer)
})

window.addEventListener('DOMContentLoaded', () => {
    console.log('DOMContentLoaded');
});

window.addEventListener('load', () => {
    console.log('load');
});