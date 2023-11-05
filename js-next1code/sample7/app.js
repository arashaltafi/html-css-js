const form = document.getElementById('form');
const search = document.getElementById('search');

search.addEventListener('keydown', (e) => {
    if (e.key == "Enter") {
        form.setAttribute('action', 'https://google.com/search')
        form.setAttribute('method', 'GET')
        form.setAttribute('target', '_blank')
    }
})