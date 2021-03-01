// console.log('test connect')

const formBtn = document.getElementById('close-form');

const form = document.getElementsByTagName('form');

function toggler() {
    if (formBtn.innerText === "X") {
        formBtn.innerText = "+"
    }
    else if (formBtn.innerText !== "X") {
        formBtn.innerText = "X"
    }
    form[0].classList.toggle('hide')
};

// console.log(formBtn.innerText)

const nameInput = document.getElementsByTagName('input')[0];
const emailInput = document.getElementsByTagName('input')[1];

