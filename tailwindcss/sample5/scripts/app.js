//toggle theme
const toggleTheme = document.querySelectorAll('.toggle-theme');
const toggleOpenSubMenu = document.querySelector('#submenu-open');
const submenu = document.querySelector('.submenu');

const navOpenBtn = document.querySelector('.nav-icon');
const navCloseBtn = document.querySelector('.nav-close');
const nav = document.querySelector('.nav');

const cartOpenBtn = document.querySelector('.cart-icon');
const cartCloseBtn = document.querySelector('.cart-close');
const cart = document.querySelector('.cart');

const overlay = document.querySelector('.overlay');
const html = document.documentElement;

toggleTheme.forEach(btn => {
    btn.addEventListener('click', () => {
        if (localStorage.theme === "dark"){
            html.classList.remove("dark");
            localStorage.setItem("theme" , "light");
        } else {
            html.classList.add("dark");
            localStorage.setItem("theme" , "dark");
        }
    })
})

toggleOpenSubMenu.addEventListener('click', (e) => {
    // submenu.classList.toggle('submenu--open')
    // e.currentTarget.parentElement.classList.toggle('text-orange-300')

    if (submenu.classList.contains('submenu--open')) {
        e.currentTarget.parentElement.classList.remove("text-orange-300")
        submenu.classList.remove("submenu--open")
    } else {
        e.currentTarget.parentElement.classList.add("text-orange-300")
        submenu.classList.add("submenu--open")
    }
})

navOpenBtn.addEventListener('click', () => openMobileMenus(true))

cartOpenBtn.addEventListener('click', () => openMobileMenus(false))

navCloseBtn.addEventListener('click', closeMobileMenus)

cartCloseBtn.addEventListener('click', closeMobileMenus)

overlay.addEventListener('click', closeMobileMenus)

function closeMobileMenus() {
    nav.classList.remove('nav--open');
    cart.classList.remove('cart--open');
    overlay.classList.remove('overlay--visible');
}

function openMobileMenus(isNav = true) {
    if (isNav) {
        nav.classList.add('nav--open');
    } else {
        cart.classList.add('cart--open');
    }
    overlay.classList.add('overlay--visible');
}

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