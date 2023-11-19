const toast = document.getElementById('toast')
const btnSuccess = document.getElementById('btn-success')
const btnWarning = document.getElementById('btn-warning')

btnSuccess.addEventListener('click', () => {
    toast.removeAttribute('hidden')
    toast.classList.add('success')
    let opacity = 100;
    let op = setInterval(() => {
        if (opacity <= 100 && opacity > 50) {
            opacity = opacity - 2
        } else if (opacity <= 50 && opacity > 0) {
            opacity = opacity - 8
        } else if (opacity <= 0) {
            clearInterval(op)
            toast.classList.remove('success')
            toast.setAttribute('hidden', "")
        }
        toast.style.opacity = `${opacity}%`
    }, 70);
})

btnWarning.addEventListener('click', () => {
    toast.removeAttribute('hidden')
    toast.classList.add('warning')
    let opacity = 100;
    let op = setInterval(() => {
        if (opacity <= 100 && opacity > 50) {
            opacity = opacity - 2
        } else if (opacity <= 50 && opacity > 0) {
            opacity = opacity - 8
        } else if (opacity <= 0) {
            clearInterval(op)
            toast.classList.remove('warning')
            toast.setAttribute('hidden', "")
        }
        toast.style.opacity = `${opacity}%`
    }, 70);
})