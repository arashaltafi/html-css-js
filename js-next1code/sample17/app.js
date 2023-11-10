const result = document.getElementById('result')
const btnSendXml0 = document.getElementById('btn-send-xml0')
const btnSendXml1 = document.getElementById('btn-send-xml1')
const btnSendXml2 = document.getElementById('btn-send-xml2')

btnSendXml0.addEventListener('click', () => {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts/1', true);
    xhr.withCredentials = true;
    xhr.setRequestHeader('test', 'arash')
    xhr.onload = function () {
        if (this.status >= 200 && this.status < 400) {
            const status = this.status
            const headers = this.getAllResponseHeaders();
            const data = JSON.parse(this.responseText);
            console.log('Response Status:', status);
            console.log('Response Headers:', headers);
            console.log('Response Data:', data);
            result.textContent = data.title
        } else {
            console.log(Error(`Request failed with status ${this.status}`));
            result.textContent = 'Request failed'
        }
    }
    xhr.onprogress = function (evt) {
        if (evt.lengthComputable) {
            console.log("evt.loaded", evt.loaded);
            console.log("evt.total", evt.total);
        }
    }
    xhr.onerror = function (error) {
        result.textContent = error.message
    }
    xhr.send();
})

btnSendXml1.addEventListener('click', async () => {
    try {
        const response = await callApiXmlHTTPRequest('https://jsonplaceholder.typicode.com/posts/1');
        console.log('Response Status:', response.status);
        console.log('Response Headers:', response.headers);
        console.log('Response Data:', response.data);
        result.textContent = response.data.title
    } catch (error) {
        console.error(error.message);
        result.textContent = error.message
    }
})

btnSendXml2.addEventListener('click', () => {
    const p = callApiXmlHTTPRequest('https://jsonplaceholder.typicode.com/posts/1');
    p.then((response) => {
        console.log('Response Status:', response.status);
        console.log('Response Headers:', response.headers);
        console.log('Response Data:', response.data);
        result.textContent = response.data.title
    }).catch((e) => {
        console.error(e.message);
        result.textContent = e.message
    })
})

function callApiXmlHTTPRequest(url) {
    return new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);
        xhr.withCredentials = true;
        xhr.setRequestHeader('test', 'arash')
        xhr.onload = function () {
            if (this.status >= 200 && this.status < 400) {
                const status = this.status
                const headers = this.getAllResponseHeaders();
                const data = JSON.parse(this.responseText);
                resolve({ status, headers, data });
            } else {
                reject(new Error(`Request failed with status ${this.status}`));
            }
        }
        xhr.onprogress = function (evt) {
            if (evt.lengthComputable) {
                console.log("evt.loaded", evt.loaded);
                console.log("evt.total", evt.total);
            }
        }
        xhr.onerror = function () {
            reject(new Error(`Request failed with status ${this.status}`));
        }
        xhr.send();
    })
}