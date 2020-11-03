// The user can add a list of names
// The user can set the number of teams
// Every time the user clicks on the "assign" button, a random name is placed in a team and removed from the list
// Each team should be inside a "column"
// [EXTRA] Create a button to remove an user from a team, putting him back in the main list
// [EXTRA] Create a button to reset the state of the app

let allUsers = [];
window.onload = function () {
    getUsers();
    
    let assingButton = document.querySelector(".assingClick")
    assingButton.addEventListener("click",createTeams)
};
const teamSizeF = function () {
	let option = document.querySelector("#teamSize");
	return Number(option.value);
};

class User {
	constructor(name) {
		this.list = document.querySelector("#singleUserList");
		this.name = name;
		this.node = undefined;
		this.userInfo();
		this.showRemoveButton();
	}
	userInfo() {
		let list = document.querySelector("#singleUserList");
		let user = addElement(list, "li", {
			//
			innerText: this.name,
		});
		this.node = user;
	}

	get user() {
		return this.user;
	}
	showRemoveButton() {
		let list = document.querySelector("#singleUserList");
		let button = addElement(list, "button", {
			innerText: "Remove",
			class: "btn btn-sm btn-primary btn-danger",
			type: "button",
			id: "groupButton",
		});
	}
}

const getUsers = function () {
	let singleInputs = document.querySelector("#singleInput");
	let groupInput = document.querySelector("#groupInput");

	let singleButton = document.querySelector("#btn-single");
	let groupButton = document.querySelector("#btn-group");

	singleButton.addEventListener("click", () => {singleEvent(singleInputs)});

	singleInput.addEventListener("keyup", function (event) {
		if (event.keyCode === 13) {
            singleEvent(singleInput)
		}
	});
    groupButton.addEventListener("click",()=>{
        groupEvent(groupInput)
    })
	groupInput.addEventListener("keyup", event => {
		if(event.keyCode === 13){
            groupEvent(groupInput)
        }
		
	});
};

const singleEvent = function (singleInput) {
    eventOpener()
    let ul = document.querySelector("#singleUserList")
   
    allUsers.push(singleInput.value);
    let item = addElement(ul,"li",{innerText:singleInput.value})
    singleInput.value = "";
};


const groupEvent = function(groupInput){
    eventOpener()
    let groupUsers = groupInput.value.split(",")
    allUsers =[...allUsers,...groupUsers]
    let ul = document.querySelector("#singleUserList")

    for(let el of groupUsers){
        let item = addElement(ul,"li",{innerText:el}) 
    }
    groupInput.value = "";
        
}

const eventOpener = function(){
    let userList = document.querySelector("#userListHead");
    userList.innerText = "Team Members"
    

}

const shuffleArr = function(array){
    let shuffled = array.sort(function (a, b) { return 0.5 - Math.random() })
    return shuffled
}

const createTeams = function(){
    let shuffled_array = shuffleArr(allUsers)

    let teamSize = teamSizeF();

    let userSize = shuffled_array.length;
    
    let equalSize = Math.floor(userSize/teamSize)
    console.log(shuffled_array)
    let moduleSize = (userSize%teamSize)
    let i = 1;
    while(shuffled_array.length>0){
        let teamMembers = []
        for(let j=0; j<teamSize;j++){
            if(shuffled_array.length>0){
                teamMembers.push(shuffled_array[0]),
                shuffled_array.shift()
                console.log(shuffled_array)
            }
            
        }
        
        createTeamCard(i,teamMembers)
        i+=1
    }
}


const createTeamCard = function(teamNo,teamMembers){
    let row = document.querySelector("#teamMemberCards");

    let col = addElement(row,"div",{className:"col-3 col-sm-12 col-md-6 col-lg-3 text-center"})
    let card = addElement(col,"div",{className:"card",style:"width: 18rem;"})
    let cardBody = addElement(card,"div",{className:"card-body"})
    let cardTitle = addElement(cardBody,"h5",{className:"card-title",innerText:"Team "+teamNo})
    let cardText = addElement(cardBody,"p",{className:"card-text",innerText:teamMembers.toString()})
}