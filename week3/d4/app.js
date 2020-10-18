// The user can add a list of names
// The user can set the number of teams
// Every time the user clicks on the "assign" button, a random name is placed in a team and removed from the list
// Each team should be inside a "column"
// [EXTRA] Create a button to remove an user from a team, putting him back in the main list
// [EXTRA] Create a button to reset the state of the app


let allUsers = []
window.onload = function () {
    getUsers()
}

class User {
    constructor(name) {
        this.name = name;
        this.userInfo()
        this.showRemoveButton()

    }
    userInfo() {
        let list = document.querySelector("#singleUserList");
        let user = addElement(list, "li", {
            innerText: this.name,
        })
        list.append(user)
    }
    showRemoveButton() {
        let list = document.querySelector("#singleUserList");
        let button = addElement(list, "button", {
            innerText: "Remove",
            class: "btn btn-sm btn-primary btn-danger",
            type: "button",
            id: "groupButton"
        })

    }

}

const getUsers = function () {

    let singleInput = document.querySelector("#singleInput");
    let groupInput = document.querySelector("#groupInput");

    let singleButton = document.querySelector("#btn-single");
    let groupButton = document.querySelector("#btn-group");

    singleButton.addEventListener("click", () => {
        allUsers.push(singleInput.value);
        let user = new User(singleInput.value)
        singleInput.value = ""

    })

    groupButton.addEventListener("click", () => {
        let groupUsers = groupInput.value.split(",").map(index => allUsers.push(index));
        groupInput.value = ""
        console.log(allUsers)
    })

}

// TODO
// TODO