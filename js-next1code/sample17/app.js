const result = document.getElementById('result')
const btnSendXml0 = document.getElementById('btn-send-xml0')
const btnSendXml1 = document.getElementById('btn-send-xml1')
const btnSendXml2 = document.getElementById('btn-send-xml2')
const btnSendFetch0 = document.getElementById('btn-send-fetch0')
const btnSendFetch1 = document.getElementById('btn-send-fetch1')
const btnSendAxios0 = document.getElementById('btn-send-axios0')
const btnSendAxios1 = document.getElementById('btn-send-axios1')

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
            const percentComplete = (evt.loaded / evt.total) * 100;
            console.log(`Progress: ${percentComplete}%`);
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

btnSendFetch0.addEventListener('click', () => {
    const userData = {
        id: 1,
        name: "arash",
        username: "arashaltafi",
        phone: "+989187677641",
        email: "arashaltafi1377@gmail.com",
        website: "arashaltafi.ir"
    }

    const header = {
        'Content-type': 'application/json; charset=UTF-8',
        "authorization": '123'
    }

    let p = fetch('https://jsonplaceholder.typicode.com/posts/1',{
        method: 'GET',
        // body: JSON.stringify(userData),
        // headers: header
    })
    p.then((response) => {
        console.log("response status", response.status);
        console.log("response ok", response.ok);
        console.log("response url", response.url);
        if (response.ok) {
            console.log("response", response);
            return response.json()
        } else {
            result.textContent = 'There was a problem ...'
            throw new Error('There was a problem ...')
        }
    }).then((json) => {
        result.textContent = json.title
    }).catch((error) => {
        console.log("error", error);
        result.textContent = 'Request failed'
    })
})

btnSendFetch1.addEventListener('click', async () => {
    const userData = {
        id: 1,
        name: "arash",
        username: "arashaltafi",
        phone: "+989187677641",
        email: "arashaltafi1377@gmail.com",
        website: "arashaltafi.ir"
    }

    const header = {
        'Content-type': 'application/json; charset=UTF-8',
        "authorization": '123'
    }

    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/1', {
            method: "GET",
            // body: JSON.stringify(userData),
        // headers: header
        })
        console.log("response status", response.status);
        console.log("response ok", response.ok);
        console.log("response url", response.url);
        if (response.ok) {
            console.log("response", response);
            const json = await response.json()
            result.textContent = json.title
            console.log("json", json);
        } else {
            result.textContent = 'There was a problem ...'
            throw new Error('There was a problem ...')
        }
    } catch (error) {
        console.log("error", error);
        result.textContent = 'Request failed'
    }
})

btnSendAxios0.addEventListener('click', () => {
    const userData = {
        id: 1,
        name: "arash",
        username: "arashaltafi",
        phone: "+989187677641",
        email: "arashaltafi1377@gmail.com",
        website: "arashaltafi.ir"
    }

    const header = {
        'Content-type': 'application/json; charset=UTF-8',
        "authorization": '123'
    }

    // axios.post(url, userData, header)
    let p = axios.get('https://jsonplaceholder.typicode.com/posts/1')
    p.then((response) => {
        console.log(response);
        if (response.status === 200) {
            console.log("response.status", response.status);
            console.log("response.headers", response.headers);
            console.log("response.data", response.data);
            result.textContent = response.data.title
        } else {
            result.textContent = 'There was a problem ...'
            throw new Error('There was a problem ...')
        }
    })
    .catch((error) => {
        console.log("error", error);
        result.textContent = 'Request failed'
    })
})

btnSendAxios1.addEventListener('click', async () => {
    try {
        let response = await axios.get('https://jsonplaceholder.typicode.com/posts/1')
        if (response.status === 200) {
            console.log("response.status", response.status);
            console.log("response.headers", response.headers);
            console.log("response.data", response.data);
            result.textContent = response.data.title
        } else {
            result.textContent = 'There was a problem ...'
            throw new Error('There was a problem ...')
        }
    } catch {
        console.log("error", error);
        result.textContent = 'Request failed'
    }
})