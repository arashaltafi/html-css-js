const result = document.getElementById('result')
const btnSendXml = document.getElementById('btn-send-xml')

btnSendXml.addEventListener('click', async () => {
    try {
        const response = await callApiXmlHTTPRequest();
        console.log('Response Status:', response.status);
        console.log('Response Headers:', response.headers);
        console.log('Response Data:', response.data);
        result.textContent = response.data.title
    } catch (error) {
        console.error(error.message);
        result.textContent = error.message
    }
})

function callApiXmlHTTPRequest() {
    return new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest();
        xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts/1', true);
        xhr.withCredentials = true;
        xhr.setRequestHeader('test', 'arash')
        xhr.onload = function () {
            if (this.status >= 200 && this.status < 400) {
                const status = xhr.status
                const headers = xhr.getAllResponseHeaders();
                const data = JSON.parse(xhr.responseText);
                resolve({ status, headers, data });
            } else {
                reject(new Error(`Request failed with status ${xhr.status}`));
            }
        }
        xhr.onprogress = function (evt) {
            if (evt.lengthComputable) {
                console.log("evt.loaded", evt.loaded);
                console.log("evt.total", evt.total);
            }
        }
        xhr.onerror = function () {
            result.textContent = this.error
        }
        xhr.send();
    })
}