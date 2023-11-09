const result = document.getElementById('result')
const btnSendXml = document.getElementById('btn-send-xml')

btnSendXml.addEventListener('click', () => {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts/1', true);
    xhr.onload = function() {
        if (this.status >= 200 && this.status < 400) {
            console.log(this.responseText);
            let obj = JSON.parse(this.responseText)
            result.textContent = obj.title
        } else {
            console.error('Error:', this.status, this.statusText);
        }
        
    }
    xhr.onerror = function() {
        result.textContent = this.error
    }
    xhr.send();
})