const showMessage = (message) => {
    alert(message)
}

document.getElementById('btn-start').addEventListener('click', () => {
    showMessage('this is sample message')
})