const removeFirst = function () {
    let removeButton = document.getElementById('removeFirst')

    let allElements = document.querySelector('#myTaskList');

    if (allElements.firstChild) {
        allElements.removeChild(allElements.firstChild)
    }

}
const clearAll = function () {
    let allElements = document.querySelector('#myTaskList');
    while (allElements.firstChild) {
        allElements.removeChild(allElements.firstChild)
    }
}


/* 
const clearAll = function () {
    let allElements = document.querySelector('#myTaskList');
    let children = allElements.childNodes
    for (let child of children) {
        allElements.removeChild(children)
    }
}
*/

const removeLast = function () {
    let allElements = document.querySelector('#myTaskList');
    if (allElements.lastChild) {
        allElements.removeChild(allElements.lastChild)
    }
}

const addNewTask = function () {

    let newListItem = document.getElementById('myTaskList');

    let newElement = document.createElement('li');

    let userInput = document.getElementById('newTask')

    newElement.innerText = userInput.value;

    newListItem.appendChild(newElement)

    userInput.value = ''
}

const getTasksAsArray = function () {
    //Create a method "getTasksAsArray" which returns (and print to the console) an array containing the tasks as string
    let allTasks = document.getElementById('myTaskList');

    let children = allTasks.childNodes;
    let tasksArr = [];

    for (let el of children) {
        tasksArr.push(el.innerText);
    }
    return tasksArr;
}

const changeTaskBackgroundColor = function () {
    let input = document.querySelector('#colorPicker');
    let elements = document.querySelectorAll('#myTaskList');

    for (let child of elements) {
        child.style.backgroundColor = input.value
    }


}
const bubbleSort = function () {

    let list, i, switching, b, shouldSwitch;
    list = document.getElementById("myTaskList");
    switching = true;
    /* Make a loop that will continue until
    no switching has been done: */
    while (switching) {
        // start by saying: no switching is done:
        switching = false;
        b = list.getElementsByTagName("li");
        // Loop through all list-items:
        for (i = 0; i < (b.length - 1); i++) {
            // start by saying there should be no switching:
            shouldSwitch = false;
            /* check if the next item should
            switch place with the current item: */
            if (b[i].innerHTML.toLowerCase() > b[i + 1].innerHTML.toLowerCase()) {
                /* if next item is alphabetically
                lower than current item, mark as a switch
                and break the loop: */
                shouldSwitch = true;
                break;
            }
        }
        if (shouldSwitch) {
            /* If a switch has been marked, make the switch
            and mark the switch as done: */
            b[i].parentNode.insertBefore(b[i + 1], b[i]);
            switching = true;
        }
    }

}