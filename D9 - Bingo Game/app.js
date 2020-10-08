const maxNumber = 76;
const generateRandomNumber = function () {


    return Math.floor((Math.random() * (maxNumber - 1)) + 1)
}

const generateBoard = function () {
    const sizeOfBoard = 76;
    let bingoBoard = document.querySelector('#bingoBoard');

    for (let i = 0; i < sizeOfBoard; i++) {
        let newCell = document.createElement('div');
        newCell.className = 'cell'

        let newCellContentElement = document.createElement('h3')
        newCellContentElement.innerText = generateRandomNumber();

        newCell.appendChild(newCellContentElement);

        bingoBoard.appendChild(newCell)

    }
}
const cleanBoard = function () {
    let board = document.getElementById('bingoBoard')
    while (board.firstChild) {
        board.removeChild(board.lastChild)
    }
}
const changeBoard = function () {
    cleanBoard()
    generateBoard()
}

const sameNumbersObject = function () {
    let cells = document.querySelectorAll('div>h3');
    let sameCellObject = {};

    let k = 0;
    let visited = [];
    while (k < maxNumber) {
        visited[k] = false;
        k++;
    }

    for (let i = 0; i < cells.length; i++) {
        if (visited[i] == true) {
            continue;
        }
        let count = 1
        for (let j = i + 1; j < cells.length; j++) {
            if (cells[i].innerText == cells[j].innerText) {
                visited[j] = true;
                count++
            }
        }
        sameCellObject[cells[i].innerText] = count
    }
    return sameCellObject
}

const changeColor = function (obj) {

}

window.onload = function () {
    generateBoard();
    let obj = sameNumbersObject()
    changeColor(obj)


    let changeButton = document.querySelector('.button');

    changeButton.addEventListener("click", changeBoard);
}