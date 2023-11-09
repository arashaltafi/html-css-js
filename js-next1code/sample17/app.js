const result = document.getElementById('result')
const btnSendXml = document.getElementById('btn-send-xml')

btnSendXml.addEventListener('click', () => {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/users/2', true);
    xhr.onload = function() {
        console.log(this.responseText);
        let obj = JSON.parse(this.responseText)
        result.textContent = obj.name
    }
    xhr.onerror = function() {
        result.textContent = this.error
    }
    xhr.send();
})