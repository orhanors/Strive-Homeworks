/*
JS Exercises
EX11) 
EX12) 
EX13) 
EX14) 
EX15) 
EX16) 
EX17) 
EX18) 
EX19) 
EX20) 
*/

/**
 * Helper Function, Adds element to parent and returns node
 */
const addElement = function (parent, element, properties) {
    let newElement = document.createElement(element);

    if (properties.label) {
        let div = document.createElement("div");
        let label = document.createElement("label");

        label.innerText = properties.label;

        div.appendChild(label);
        parent.appendChild(div)
    }

    Object.entries(properties).map(entry => {
        let propertyName = entry[0]
        if (propertyName !== "label") {
            newElement[propertyName] = entry[1]
        }
    })

    parent.append(newElement)

    return newElement;
}
//Write a function to add a new link into the navbar
const addLinktoNavbar = function(linkText){
    let navbar = document.querySelector("header+div>nav");
    let li = addElement(navbar,"a",{className:"p-2 text-muted", href:"#",innerText:linkText})
}

//Write a function to remove the "Search" magnifying glass icon
const removeSearchIcon = function(){
    let parent = document.querySelector("div.container header a.text-muted svg").remove()
    
}
//Write a function to change the background of the jumbotron
const changeBackgroundJumbotron = function(color){
    let jumbotron = document.querySelector(".jumbotron")
    jumbotron["style"] = `background-color: ${color} !important`
    
}

//Write a function to change the color of the main title
const changeTitleColor = function(color){
    let title = document.querySelector(".jumbotron>div>h1")
    title["style"] = `color: ${color}`
}

//Write a function to change the column size for post headings
// TODO Do it again
const changeColumnSizePostHeadings = function(){
    let cardDiv = document.querySelector("div.row.md-2")
    console.log(cardDiv)
}

//Write a function to remove all the links under "Elsewhere"
const removeUnderElsewhere = function(){
    let element = document.querySelectorAll("aside div.p-4:nth-last-of-type(1) > h4+ol>li")
    for(let el of element){
        el["style"] = "display:none"
    }
}

//Write a function to trim just the first 50 characters in the first paragraph for each blog post

const trimFirst50Char = function(charSize){
    let blogPostsFisrtP = document.querySelectorAll(".blog-post p:nth-of-type(2)") //first paragraphs
    
    for(let j=0;j<blogPostsFisrtP.length;j++){
       
        for(let i = 0;i<charSize;i++){
            let text = blogPostsFisrtP[j].innerText;
            let new_text = text.replace(text.charAt(0),"") //charAt(0) bcz everytime last index will at first
            blogPostsFisrtP[j].innerText = new_text
        }

    }
}

// Write a function and attach it to the "Newer" button, to add new Blog Post (just div and title)

const newBlogPost = function(title){
    let button = document.querySelector("nav.blog-pagination a:nth-last-of-type(1)")
    
    let parent = document.querySelector("main div.col-md-8.blog-main")
    button.classList.remove("disabled")



    button.addEventListener("click", ()=>{
        let newPost = addElement(parent,"div",{className:"blog-post",style:"color:green;margin-bottom-4px"})
        let postTitle = addElement(newPost,"h2",{className:"blog-post-title",innerText:title})
    })
}

// Write a function and attach it to the "Older" button, to remove the last Blog Post

const removeLast = function(){
    let lastPost = document.querySelector("main div.col-md-8.blog-main div.blog-post:nth-last-of-type(1)")
    let olderButton = document.querySelector("nav.blog-pagination a:nth-of-type(1)")
    
   

    olderButton.addEventListener("click",()=>{
        lastPost["style"] = "display:none"
    })
}

// Write an alert with the name of the author every time the user hover with the mouse over an author name

const alertAuthor = function(){
    let allAuthors = document.querySelectorAll("main div.blog-post > h2 + p > a")
    
    for(let element of allAuthors){
        element.addEventListener("click",()=>{
            alert(element.innerText+" says WTF?")
        })
    }
}






