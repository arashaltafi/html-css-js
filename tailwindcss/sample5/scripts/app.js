//toggle theme
const btns = document.querySelectorAll('.toggle-theme');
const html = document.documentElement;

btns.forEach(btn => {
    btn.addEventListener('click', () => {
        if (localStorage.theme === "dark"){
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme" , "light");
        } else {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme" , "dark");
        }
    })
})

if (localStorage.getItem("theme") === null) {
    console.log("if")
    //get default theme
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
        const newColorScheme = event.matches ? "dark" : "light";
        if (newColorScheme == "dark") {
            console.log("if add dark")
            html.classList.add('dark');
        } else {
            console.log("if add dark")
            html.classList.remove('dark');
        }
    });

    //change theme
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        console.log("change theme add dark")
        html.classList.add('dark');
    } else {
        console.log("change theme remove dark")
        html.classList.remove('dark');
    }
} else {
    console.log("else", localStorage.getItem("theme"))
    if (localStorage.getItem("theme") === "dark") {
        console.log("else add dark")
        html.classList.add('dark');
    } else {
        console.log("else remove dark")
        html.classList.remove('dark');
    }
}