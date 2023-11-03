//post , get , put , delete

const postData = document.querySelector("#post-data")
const getData = document.querySelector("#get-data")

const postDataAxios = document.querySelector("#post-data-axios")
const getDataAxios = document.querySelector("#get-data-axios")

postData.addEventListener('click', () => fetchData2("https://jsonplaceholder.typicode.com/users", "POST"))
getData.addEventListener('click', () => fetchData2("https://jsonplaceholder.typicode.com/users/2", "GET"))

postDataAxios.addEventListener('click', () => axiosData1("https://jsonplaceholder.typicode.com/users", "POST"))
getDataAxios.addEventListener('click', () => axiosData1("https://jsonplaceholder.typicode.com/users/2", "GET"))

function fetchData1(url, method) {
    const userData = {
        id: 1,
        name: "arash",
        username: "arashaltafi",
        phone: "+989187677641",
        email: "arashaltafi1377@gmail.com",
        website: "arashaltafi.ir"
    }

    const header = {
        'Content-type': 'application/json; charset=UTF-8'
    }

    let fetchPromise;
    if (method == 'POST') {
        fetchPromise = fetch(url, {
            method: method,
            body: JSON.stringify(userData),
            headers: header
        })
    } else {
        fetchPromise = fetch(url, { method: method })
    }
    fetchPromise
        .then(response => {
            return response.json()
        })
        .then(json => {
            console.log(json)
        })
        .catch(error => {
            console.error('Error:', error);
        });
}

async function fetchData2(url, method) {
    const userData = {
        id: 1,
        name: "arash",
        username: "arashaltafi",
        phone: "+989187677641",
        email: "arashaltafi1377@gmail.com",
        website: "arashaltafi.ir"
    }

    const header = {
        'Content-type': 'application/json; charset=UTF-8'
    }

    try {
        let fetchPromise;
        if (method == 'POST') {
            fetchPromise = fetch(url, {
                method: method,
                body: JSON.stringify(userData),
                headers: header
            })
        } else {
            fetchPromise = fetch(url, { method: method })
        }
        const response = await fetchPromise
        const json = await response.json()
        console.log(json)
    } catch (error) {
        console.error('Error:', error)
    }
}

function axiosData1(url, method) {
    const userData = {
        id: 1,
        name: "arash",
        username: "arashaltafi",
        phone: "+989187677641",
        email: "arashaltafi1377@gmail.com",
        website: "arashaltafi.ir"
    }

    const header = {
        'Content-type': 'application/json; charset=UTF-8'
    }

    let axiosPromise;
    if (method == 'POST') {
        axiosPromise = axios.post(url, userData, header)
    } else {
        axiosPromise = axios.get(url)
    }
    axiosPromise
        .then(response => {
            console.log(response.data)
        })
}