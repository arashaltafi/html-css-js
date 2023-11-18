const forms = document.querySelectorAll('form')

const messages = {
    valueMissing: () => 'مقدار اجباری می باشد!',
    patternMismatch: () => 'فرمت وارده اشتباه می باشد',
    tooShort: (target) => `حداقل باید ${target.minLength} کارکاتر وارد شود!`
}

const validityKeys = Object.keys(messages)

forms.forEach(form => {
    form.addEventListener('input', (e) => {
        const { target } = e

        const errorsEl = target.parentElement.querySelectorAll('small')
        errorsEl.forEach(el => el.remove())

        validityKeys.forEach(key => {
            if (target.validity[key]) {
                appendError(target, key)
            }
        })
    })
})

function appendError(target, key) {
    const errorEl = document.createElement('small')
    errorEl.innerText = messages[key](target)
    target.parentElement.appendChild(errorEl)
}