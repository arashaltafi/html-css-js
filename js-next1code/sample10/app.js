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