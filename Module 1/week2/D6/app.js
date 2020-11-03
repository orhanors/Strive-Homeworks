//Write a function to change the heading text

const changeHeader = function () {
    let header = document.querySelector('h1');
    let userInput = document.querySelector('#changeHeader');

    header.innerText = userInput.value;
    userInput.value = ''
}