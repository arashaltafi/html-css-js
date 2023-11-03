//post , get , put , delete

const postData = document.querySelector("#post-data")
const getData = document.querySelector("#get-data")

postData.addEventListener('click', () => fetchData1(""))
getData.addEventListener('click', () => fetchData1(""))

function fetchData1(url) {
    fetch(url)
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
fetchData1('https://jsonplaceholder.typicode.com/todos/1')

/////////////////////////////////

async function fetchData2(url) {
    try {
        const response = await fetch(url)
        const json = await response.json()
        console.log(json)
    } catch (error) {
        console.error('Error:', error)
    }
}

fetchData2('https://jsonplaceholder.typicode.com/todos/1');