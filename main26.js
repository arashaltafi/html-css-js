//DOM

const courses = [
    { title: "course 1", isExist: true },
    { title: "course 2", isExist: false },
    { title: "course 3", isExist: true },
    { title: "course 4", isExist: false }
]
const existCourse = courses.filter(element => element.isExist)

const body = document.querySelector("body");

existCourse.forEach((items) => {
    const p = document.createElement("h2")
    p.textContent = items.title

    body.appendChild(p)
})