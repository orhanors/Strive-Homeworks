const maxNumber = 76;
const userCardSize = 24;

let page = document.querySelector('#page')
const generateRandomNumber = function () {


    return Math.floor((Math.random() * (maxNumber - 1)) + 1)
}
const numbersArray = function () {
    //This function creates a shuffled array between [1,79] --> every element is single
    let arr = []
    for (let i = 0; i < maxNumber; i++) {
        let num = generateRandomNumber()
        if (!(arr.includes(num))) {
            arr.push(num)
        } else {
            num = generateRandomNumber()
        }

    }
    return arr
}

const playerCard = function () {
    const sizeOfBoard = 76;
    let playercard = document.createElement('div');
    playercard.id = 'playercard'
    page.appendChild(playercard)

    for (let i = 0; i < userCardSize; i++) {
        let newCell = document.createElement('div');
        newCell.className = 'playerCard'

        let newCellContentElement = document.createElement('h3')
        newCellContentElement.innerText = generateRandomNumber();

        newCell.appendChild(newCellContentElement);

        playercard.appendChild(newCell)

    }
}


const generateBoard = function () {
    const sizeOfBoard = 76;
    let bingoBoard = document.createElement('div');
    bingoBoard.id = 'bingoBoard'
    page.appendChild(bingoBoard)

    for (let i = 0; i < sizeOfBoard; i++) {
        let newCell = document.createElement('div');
        newCell.className = 'cell'

        let newCellContentElement = document.createElement('h3')
        newCellContentElement.innerText = i + 1;

        newCell.appendChild(newCellContentElement);

        bingoBoard.appendChild(newCell)

    }
}

window.onload = function () {
    let h1 = document.querySelector('h1');
    h1.addEventListener('click', loadMainPage)

}

const loadMainPage = function () {
    startButton()

    let h1 = document.querySelector('h1');
    h1.remove()
    generateBoard()

    let buttonStart = document.querySelector("#startButton")
    buttonStart.addEventListener('click', loadButtons)

    let buttonNumber = addEventListener('click', highlightNumber)

}



const startButton = function () {
    let startButton = document.createElement('input');
    startButton.id = "startButton"
    startButton.type = 'button'
    startButton.value = 'START'
    page.appendChild(startButton)
}

const loadButtons = function () {
    let numbers = document.createElement('input');
    numbers.id = 'randomNumbers'
    numbers.type = 'button'
    numbers.value = '+'
    let board = document.getElementById('bingoBoard')
    board.appendChild(numbers)

    let users = document.createElement('input');
    users.id = 'users'
    users.type = 'button'
    users.value = '+USER'
    page.appendChild(users)

    let buttonStart = document.querySelector("#startButton")
    buttonStart.style.display = 'none'


}

const highlightNumber = function () {

}