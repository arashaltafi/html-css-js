const form = document.getElementById('form');
const search = document.getElementById('search');

search.required = true
search.disabled = false
search.readOnly = false

search.addEventListener('keydown', (e) => {
    if (e.key == "Enter") {
        form.setAttribute('action', 'https://google.com/search')
        form.setAttribute('method', 'GET')
        form.setAttribute('target', '_blank')
        setTimeout(() => {
            search.value = ""
        }, 100);
    }
})