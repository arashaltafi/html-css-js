//toggle theme
const btn = document.getElementById('changeTheme');
const html = document.getElementById('html');
const icon = document.getElementById('iconTheme');

btn.addEventListener('click', () => {
    if (html.classList.contains('dark')) {
        html.classList.remove('dark');
        localStorage.setItem("theme", "light")
    } else {
        html.classList.add('dark');
        localStorage.setItem("theme", "dark")
    }
    location.reload()
})

if (localStorage.getItem("theme") === null) {
    console.log("if")
    //get default theme
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
        const newColorScheme = event.matches ? "dark" : "light";
        if (newColorScheme == "dark") {
            console.log("if add dark")
            html.classList.add('dark');
            icon.setAttributeNS('http://www.w3.org/1999/xlink', 'href', '#sun');
        } else {
            console.log("if add dark")
            html.classList.remove('dark');
            icon.setAttributeNS('http://www.w3.org/1999/xlink', 'href', '#moon');
        }
    });

    //change theme
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        console.log("change theme add dark")
        html.classList.add('dark');
        icon.setAttributeNS('http://www.w3.org/1999/xlink', 'href', '#sun');
    } else {
        console.log("change theme remove dark")
        html.classList.remove('dark');
        icon.setAttributeNS('http://www.w3.org/1999/xlink', 'href', '#moon');
    }
} else {
    console.log("else", localStorage.getItem("theme"))
    if (localStorage.getItem("theme") === "dark") {
        console.log("else add dark")
        html.classList.add('dark');
        icon.setAttributeNS('http://www.w3.org/1999/xlink', 'href', '#sun');
    } else {
        console.log("else remove dark")
        html.classList.remove('dark');
        icon.setAttributeNS('http://www.w3.org/1999/xlink', 'href', '#moon');
    }
}