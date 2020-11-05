let totalProduct = 0;
let card = {}

let shoppingCard = []
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

    let totalPriceText = document.querySelector("tfoot #totalPrice")
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
const cleanCard = function(){
    let items = document.querySelectorAll("tbody tr")
    let allCards = document.querySelectorAll(".card-body")

    for(let item of items){
        item.classList.add("hide")
    }
    
    for(let card of allCards){
        card["style"] = "background-color:white"
    }

    let totalPriceText = document.querySelector("tfoot #totalPrice")
    totalPriceText.innerText = 0;

    totalProduct = 0;

    let totalText = document.querySelector("#size")
    totalText.innerText = ""
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

const addShoppingTable = function(){

    for(let card of shoppingCard){
        // document.q
    }
}

const putCardToPage = function(){
    let section = document.querySelector("section .row")

    for(let i=0;i<card.title.length;i++){
         let newCard = createCard(card,i)
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
        putCardToPage()
        addProductToCard()
    })
}



window.onload = function(){
    getLengthOfEachLetter()

    getFecth("https://striveschool-api.herokuapp.com/books")
    
    let cleanBtn = document.querySelector("#cleanCard")

    cleanBtn.addEventListener("click",cleanCard)
    
   
    
}