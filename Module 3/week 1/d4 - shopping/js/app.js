let totalProduct = 0;
let card = {}

// let shoppingCard = []
let totalPrice = 0;

const createTableRow = function(targetButton){
    

    let tableBody = document.querySelector("tbody")

    let sampleItem = document.querySelector("tbody tr")

    let newItem = sampleItem.cloneNode(true)

    let card = targetButton.parentElement.parentElement.parentElement.parentElement
    newItem.querySelector("img")["src"] = card.querySelector("img")["src"]

    newItem.querySelector(".title").innerText = card.querySelector(".card-title").innerText.substring(0, 15) + "...";
    newItem.querySelector(".priceRow").innerText = card.querySelector(".price").innerText
    newItem.querySelector("#categoryRow").innerText = card.querySelector(".category").innerText
    newItem.classList.remove("hide")
    tableBody.append(newItem)

    let totalPriceText = document.querySelector("tfoot #totalPrice strong")
    let cardPrice = card.querySelector(".price #productPrice").innerText
    
    cardPrice = Number(cardPrice)
   
    totalPrice += cardPrice;

    totalPriceText.innerText = totalPrice


}
const createCard = function(data,index){
    return `<div class="col-12 col-md-6 col-lg-3 mx-3 my-3 mx-md-3 my-md-3">
    <div class="card" style="width: 18rem;">
      <img class="card-img-top" src="${data.img[index]}" alt="Card image cap" style="height:300px">
      <div class="card-body">
        <h5 class="card-title">${data.title[index]}</h5>
        
        <div class="d-flex justify-content-end">
        <p class="price"> <span id="productPrice">${data.price[index]}</span> <span>$</span> </p>
        </div class="d-flex justify-content-between">
            <div>
            <div class="categoryContainer d-flex justify-content-center align-items-center">
            <p class="category mt-3">${data.category[index]}</p>
            </div>
            
            <div class="shopping d-flex justify-content-center align-items-center">
                <button type="button" class="btn " data-toggle="modal" data-target="#exampleModal">
                Add
                
            </button>
            </div>
        </div>
    </div>
      
      
    </div>
  </div>`
}

const removeElementFromCard = function(){
    var parent = document.querySelector("tbody");

    if (parent.addEventListener) {
        parent.addEventListener('click', handler, false);
    }else if (parent.attachEvent) {
        parent.attachEvent('onclick', handler);
    }

    function handler(e) {
        let tableRow = e.path[2] //it gives the event's table row element
        console.log(tableRow)
        let elementPrice = tableRow.querySelector(".priceRow")
        elementPrice = elementPrice.innerText.slice(0,elementPrice.innerText.length-1)
        elementPrice = Number(elementPrice)
        totalPrice -= elementPrice
        
        let totalPriceText = document.querySelector("tfoot #totalPrice strong")
        totalPriceText.innerText = totalPrice
        
        totalProduct -= 1
        let totalProductText = document.querySelector("#size")
        totalProductText.innerText = totalProduct
        tableRow.classList.add("hide")
        e.target["style"] = "display:none"
    }
}
const cleanCard = function(){
    let items = document.querySelectorAll("tbody tr")
    let allCards = document.querySelectorAll(".card-body")

    for(let item of items){
        item.classList.add("hide")
    }
    
    for(let card of allCards){
        card["style"] = "background-color:white"
    }

    let totalPriceText = document.querySelector("tfoot #totalPrice strong")
    totalPriceText.innerText = 0;

    totalProduct = 0;

    let totalText = document.querySelector("#size")
    totalText.innerText = ""
    totalPrice = 0
}
const addProductToCard = function(){
    
    
    let shoppingBtn = document.querySelectorAll(".card .btn")

    let cardSize = document.querySelector("#size")
    for(let btn of shoppingBtn){
        
        btn.addEventListener("click",(e)=>{
           let cardBody = e.target.parentElement.parentElement.parentElement
           cardBody["style"] = "background-color:rgb(149, 248, 149)"
           totalProduct += 1

           cardSize.style.display = "flex";
           cardSize.innerHTML = totalProduct


           createTableRow(e.target)
           
           
        })
    }
    
}



const putCardToPage = function(allCards){
    let section = document.querySelector("section .row")
    if(allCards.title){
        size = allCards.title.length
    }else{
        size = allCards.length
    }
    for(let i=0;i<size;i++){
         let newCard = createCard(allCards,i)
         section.innerHTML += newCard
    }
}

const getFecth = function(url){
    fetch(url)
    .then(response => response.json())
    .then(data => {
        card.title = data.map(cardTitle => cardTitle.title)
        card.img = data.map(cardImg => cardImg.img)
        card.price = data.map(cardPrice => cardPrice.price)
        card.category = data.map(cardCategory => cardCategory.category)
        putCardToPage(card)
        addProductToCard()
        
    })
}

const search = function(){
    let search = document.querySelector(".input-group input")

    search.addEventListener("input",(e) =>{
        let searchStr = e.target.value
        let filtered = card.title.map(title => title.toLowerCase()).filter(book => book.includes(searchStr))
        console.log(filtered)
    })
}


window.onload = function(){
    getLengthOfEachLetter() //Animation function

    getFecth("https://striveschool-api.herokuapp.com/books")
    
    let cleanBtn = document.querySelector("#cleanCard")

    cleanBtn.addEventListener("click",cleanCard)
    
    let tbody = document.querySelector("tbody")

    removeElementFromCard()
    
    let totalPriceText = document.querySelector("tfoot #totalPrice strong")
    totalPriceText.addEventListener("change",()=>{
        totalPriceText.innerText = totalPriceText.innerText.slice(0,4)
    })
    
    search()
    
}