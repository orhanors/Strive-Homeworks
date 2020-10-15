let users = []


window.onload = function () {
    addSingle()
    addGroup()
    let assignButton = document.querySelector("input[value='Assign']")
    assignButton.addEventListener("click", assignGroup)

}
const addElement = function (parent, element, attributes) {
    let newElement = document.createElement(element);

    if (attributes.label) {
        let div = document.createElement("div");
        let label = document.createElement("label");

        label.innerText = attributes.label

        div.appendChild(label)
        parent.appendChild(div)
    }

    Object.entries(attributes).map(entry => {
        if (entry[0] !== "label") {
            newElement[entry[0]] = entry[1]
        }
    })
    parent.appendChild(newElement)
    return newElement
}

const addSingle = function () {
    let sigleButton = document.querySelector("#singleAdd");
    let allTeam = document.querySelector("ul");
    let username = document.querySelector("#username");

    sigleButton.addEventListener("click", () => {
        console.log("lfkdsjl")
        allTeam.innerHTML += "<li>" + username.value + "</li>";
        username.value = ""
    })


}

const addGroup = function () {
    let getUserList = document.querySelector("#addList");
    let groupButton = document.querySelector("input[value='+Group']")
    let allTeam = document.querySelector("#showList");

    groupButton.addEventListener("click", function () {

        users = getUserList.value.replace(/\r\n/g, "\n").split("\n").filter(line => line);
        console.log(users)
    })
}

function shuffle(array) {
    let shuffled = array.sort(function (a, b) {
        return 0.5 - Math.random()
    })

    return shuffled
}

const assignGroup = function () {
    let groupDiv = document.querySelector(".teams-row")

    let selectedIndex = document.querySelector("#teamSizeSelect").selectedIndex
    let options = document.querySelector("#teamSizeSelect").options

    let teamSize = Number(selectedIndex) + 2;

    let totalTeam = Math.floor(users.length / teamSize)
    let lessTeam = users.length % teamSize

    let shuffleArr = shuffle(users)

    for (let i = 0; i < totalTeam; i++) {
        let h2 = document.createElement("h2")
        //h2.innerText = "Team " + (i + 1)
        //groupDiv.appendChild(h2)
        for (let j = 0; j < teamSize; j++) {
            let col = document.createElement("div");

            col.className = `col col-${Math.floor(12/teamSize)}`;

            col.innerText = shuffleArr[j]
            shuffleArr.shift()
            groupDiv.appendChild(col)
        }

    }


}