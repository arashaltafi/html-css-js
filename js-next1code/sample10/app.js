const historyBack = document.getElementById('btn-history-back');
const historyForward = document.getElementById('btn-history-forward');
const historyGo = document.getElementById('btn-history-go');
const historyLength = document.getElementById('btn-history-length');
const locationReload = document.getElementById('btn-location-reload');
const locationReloadWithoutCache = document.getElementById('btn-location-reload-without-cache');
const locationAssign = document.getElementById('btn-location-assign');
const locationReplace = document.getElementById('btn-location-replace');
const windowOpenTab = document.getElementById('btn-Window-open-tab');
const windowOpenCurrent = document.getElementById('btn-Window-open-current');
const windowOpenWindow = document.getElementById('btn-Window-open-window');
const windowCloseCurrent = document.getElementById('btn-Window-close-current');
const windowCloseLast = document.getElementById('btn-Window-close-last');
const btnAlert = document.getElementById('btn-alert');
const btnPrompt = document.getElementById('btn-prompt');
const btnConfirm = document.getElementById('btn-confirm');

historyBack.addEventListener('click', () => {

})

historyForward.addEventListener('click', () => {
    
})

historyGo.addEventListener('click', () => {
    
})

historyLength.addEventListener('click', () => {
    
})

locationReload.addEventListener('click', () => {
    
})

locationReloadWithoutCache.addEventListener('click', () => {
    
})

locationAssign.addEventListener('click', () => {
    
})

locationReplace.addEventListener('click', () => {
    
})

windowOpenTab.addEventListener('click', () => {
    
})

windowOpenCurrent.addEventListener('click', () => {
    
})

windowOpenWindow.addEventListener('click', () => {
    
})

windowCloseCurrent.addEventListener('click', () => {
    
})

windowCloseLast.addEventListener('click', () => {
    
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