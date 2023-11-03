//post , get , put , delete

const postData = document.querySelector("#post-data")
const getData = document.querySelector("#get-data")

postData.addEventListener('click', () => fetchData2("https://jsonplaceholder.typicode.com/users", "POST"))
getData.addEventListener('click', () => fetchData2("https://jsonplaceholder.typicode.com/users/2", "GET"))

function fetchData1(url, method) {
    const userData = {
        id: 1,
        name: "arash",
        username: "arashaltafi",
        phone: "+989187677641",
        email: "arashaltafi1377@gmail.com",
        website: "arashaltafi.ir"
    }

    let fetchPromise;
    if (method == 'POST') {
        fetchPromise = fetch(url, {
            method: method,
            body: JSON.stringify(userData),
            headers: { 'Content-type': 'application/json; charset=UTF-8' }
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

    try {
        let fetchPromise;
        if (method == 'POST') {
            fetchPromise = fetch(url, {
                method: method,
                body: JSON.stringify(userData),
                headers: { 'Content-type': 'application/json; charset=UTF-8' }
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