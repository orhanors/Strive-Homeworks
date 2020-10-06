const changeHeader = function () {
    let header = document.querySelector('h1');
    let userInput = document.querySelector('#changeHeader');

    header.innerText = userInput.value;
    userInput.value = ''

}

//

window.onload = function () {
    //alert("Welcome...")
    makeThemMagnifiable
};
const changeTitle = function (newTitle) {
    let header = document.querySelector('h1');
    header.innerText = newTitle;
};

const addClassToTitle = function () {
    let header = document.querySelector('h1');

    header.classList.add('red-color')
    header.style.cursor = 'pointer'
};

const removeClassFromTitle = function () {
    let header = document.querySelector('h1');
    header.classList.remove('red-color')
};

const changePContent = function () {
    let getP = document.querySelector('div p');
    let userInput = document.querySelector('#changeP')

    getP.innerText = userInput.value;
    userInput.value = ''

};
const changeListTitle = function () {
    let header = document.querySelector('#listTitle')
    let userInput = document.querySelector('#listHeader')

    header.innerText = userInput.value;
    userInput.value = ''

};

const addToTheSecond = function (content) {
    let secondList = document.querySelector('#secondList');

    let newElement = document.createElement('li')

    let contentInput = document.querySelector('#addElement')
    content = contentInput.value;

    newElement.innerText = content;
    secondList.appendChild(newElement)

    contentInput.value = ''

};

const firstUlDisappear = function () {
    let firstUl = document.getElementById('firstList')

    firstUl.style.display = 'none'
};

const paintItGreen = function () {
    let everyUl = document.getElementsByTagName('ul')

    for (let el of everyUl) {
        el.style.backgroundColor = 'green';
    }
};

/*
const makeThemMagnifiable = function () {
    let cells = document.querySelectorAll('tbody td');

    for (let cell of cells) {
        cell.addEventListener('mouseover', function () {
            cell.style.fontSize = '150%'
        });
        cell.addEventListener('mouseleave', function () {
            cell.style.fontSize = '100%'
        });
    }
}
*/

const toggleShowImages = function () {

    let img = document.querySelectorAll('img')
    let button = document.querySelector('#toggleButton')
    for (let image of img) {
        if (image.style.display == 'none') {
            image.style.display = 'inline'
            button.innerText = 'Hide'
        } else {
            image.style.display = 'none'
            button.innerText = 'Show'

        }
    }
};

const makeItClickable = function () {
    let header = document.querySelector('h1')

    header.style.color = '#' + Math.floor(Math.random() * 16777215).toString(16);
};