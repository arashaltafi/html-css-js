const body = document.body;
const input = document.querySelector("#input");
input.min = 0; // Set the minimum value
input.max = 5; // Set the maximum value

let inputValue;

input.addEventListener('keydown', (event) => {
    inputValue = event.key;
    if (!(event.key >= '0' && event.key <= '9') && event.key != 'Backspace') {
        event.preventDefault();
    }
});

input.addEventListener('keypress', (event) => {
    event.preventDefault();
    if (input.value != "") {
        input.value = input.value + " - " + inputValue
    } else {
        input.value = inputValue
    }
});

body.addEventListener('keydown', (e) => {
    if ((e.code == 'KeyA') && e.ctrlKey == true) {
        body.style.backgroundColor = 'green';
    } else {
        body.style.backgroundColor = '#F8BBD0';
    }
});