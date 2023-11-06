const fName = document.getElementById('firstname');
const lName = document.getElementById('lastname');

fName.focus()

fName.addEventListener('focus', (e) => {
    fName.select();
})

lName.addEventListener('focus', (e) => {
    lName.select();
})