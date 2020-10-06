// I want to try to execute all events app.js file but didn't
// I want to create a global variable but it doesnt work, I created 'title' over and over again

window.onload = function () {
    //alert("Page is succesfully loaded")
}


const changeTitle = function (newTitle) {
    let title = document.querySelector('#title');
    title.innerText = newTitle
};

const addClassToTitle = function () {
    let title = document.querySelector('h1');
    title.classList.add('red-color')
    title.style.cursor = "pointer"
};

const removeClassFromTitle = function () {
    let title = document.querySelector('h1')
    title.classList.remove('red-color')
}

const changePContent = function () {
    let content = document.querySelector('div>p')
    content.innerHTML = "CONTENT CHANGED"
}

const changeListTitle = function (content) {
    let textArea = document.querySelector("#listTextArea")

    content = textArea.value

    let listTitle = document.querySelector("#listTitle")

    listTitle.innerText = content
};

const addToTheSecond = function (content) {
    let text = document.querySelector('#addNewSecond')
    content = text.value
    let secondList = document.querySelector("#secondList")
    let newLine = document.createElement('li')
    secondList.appendChild(newLine)
    newLine.innerText = content

    text.value = ''
}


const firstUlDisappear = function () {
    // Write a function to make the first UL disappear (button)
    let firstUl = document.querySelector('#firstList')
    firstUl.style.display = 'none'
    firstUl.style.display = 'display'
};

const paintItGreen = function () {};


const makeThemMagnifiable = function () {
    let tableEl = document.querySelectorAll('td')

    for (let el of tableEl) {
        if (el.hasChildNodes == true) {
            continue;
        } else {
            el.style.fontSize = '150%';
        }
    }

};
const toggleShowImages = function () {
    let img = document.querySelectorAll('img')
    for (let el of img) {
        if (el.style.display === 'none') {
            el.style.display = 'inline'
        } else {
            el.style.display = 'none'
        }
    }
};

const makeItClickable = function () {
    let header = document.querySelector('h1')

    header.style.color = '#' + Math.floor(Math.random() * 16777215).toString(16);
};