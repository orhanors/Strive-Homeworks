let totalProduct = 0;
let totalPrice = 0;

/**
 * 
 * @param {String} url Url for fetching 
 */
const getStore = async function(url){
    let spinner = document.getElementById("loadingSpinner")
    spinner.classList.toggle("d-none")

    const headers = new Headers({
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmFiYzVmYTRiY2RlMTAwMTc2MTZhOGUiLCJpYXQiOjE2MDUwOTYyNTAsImV4cCI6MTYwNjMwNTg1MH0.nlxiDWCpfMdhafwVpCciynh11DPZiiOjeTw39P39iz8"
        })
    
    try{

        let response = await fetch(url,{method:"GET",headers})
        let data = await response.json()
        if(response.ok){
            spinner.classList.toggle("d-none")
            displayCards(data)
            search()
            modalImgTransition()
            addProductToCard()
            removeElementFromCard()
        }
        
    }catch(err){
        console.log(err)
    } 
}

/**
 * Takes whole data array, generates cards and append them to the DOM
 * @param {Array} arr Array of Objects
 */
const displayCards = function(arr){
    
    let cardContainer = document.getElementById("cardContainer")
    // cleanContainer()

    for(let obj of arr){
        cardContainer.innerHTML += generateCard(obj)
    }
}


/**
 * Takes an object which represents single product and creates new Card according to the this object
 * @param {Object} obj Single item object
 */
const generateCard = function(obj){
    return `<div id="cardCont" class="col-12 col-md-6 col-lg-3 mx-3 my-3 mx-md-3 my-md-3">
    <div  class="card" style="width: 18rem;">
      <img alt="${obj.name} by ${obj.brand}" class="card-img-top" src="${obj.imageUrl}" alt="Card image cap" style="height:300px;object-fit:cover">
      <div id=${obj._id} class="card-body">
        <h5 class="card-title">${obj.name}</h5>
        
        <div class="d-flex justify-content-end">
        <p class="price"> <span id="productPrice">${obj.price}</span> <span>$</span> </p>
        </div class="d-flex justify-content-between">
            <div>
            <div class="categoryContainer d-flex justify-content-center align-items-center">
            <p class="category mt-3">${obj.brand}</p>
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

/**
 * Takes an event button which is different for every product(Add to card button)
 * and generates a table row according to the related card info
 * @param {Node} targetButton 
 */
const createTableRow = function(targetButton){
    

    let tableBody = document.querySelector("tbody")

    let sampleItem = document.querySelector("tbody tr")

    let newItem = sampleItem.cloneNode(true)

    let card = targetButton.parentElement.parentElement.parentElement.parentElement
    let productId = card.querySelector(".card-body").getAttribute("id")
    console.log(productId)
    
    
    newItem.querySelector("img")["src"] = card.querySelector("img")["src"]

    newItem.querySelector(".title").innerText = card.querySelector(".card-title").innerText.substring(0, 15) + "...";
    newItem.querySelector(".priceRow").innerText = card.querySelector(".price").innerText
    newItem.querySelector("#categoryRow").innerText = card.querySelector(".category").innerText
    newItem.querySelector(".removeBtn").setAttribute("id",productId)
    newItem.classList.remove("hide")
    tableBody.append(newItem)

    let totalPriceText = document.querySelector("tfoot #totalPrice strong")
    let cardPrice = card.querySelector(".price #productPrice").innerText
    
    cardPrice = Number(cardPrice)
   
    totalPrice += cardPrice;

    totalPriceText.innerText = totalPrice
    


}

/**
 * Changes behavior of sticky shopping element
 */
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
/**
 * Removes spesific row from card and updates total price
 * 
 * Returns back to related card inital position (every card-body and its remove button has same id)
 */
const removeElementFromCard = function(){
    var parent = document.querySelector("tbody");

    if (parent.addEventListener) {
        parent.addEventListener('click', handler, false);
    }else if (parent.attachEvent) {
        parent.attachEvent('onclick', handler);
    }

    function handler(e) {

        let productId = e.target.getAttribute("id")
        let tableRow = e.path[2] //it gives the event's table row element
        
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

        let removedCard = document.getElementById(productId)
        removedCard["style"] = "backgroud-color:white"
    }
}

/**
 * Cleans all the old behaviors and returns page the initial state
 */
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


/**
 * This function searches for elements according to the DOM content
 */
const search = function(){
    let searchBar = document.getElementById("searchBar")

    let allCards = document.querySelectorAll("#cardContainer #cardCont")
    searchBar.addEventListener("keyup",(e) => {
        let keyword = e.target.value;

        allCards.forEach(card => {
            card.style.display = "block"
            let cardTitle = card.querySelector(".card-title").innerText.toLowerCase()
            let brand = card.querySelector(".category").innerText.toLowerCase()

            if(!(cardTitle.includes(keyword)||brand.includes(keyword))){
                card.style.display = "none"
            }
        })
        
    })

  
}
/**
 * Clear all cards from DOM
 */
const cleanContainer = function(){
    let cardContainer = document.getElementById("cardContainer")
    cardContainer.innerHTML = ""
}


window.onload = function(){
    const url = "https://striveschool-api.herokuapp.com/api/product/"
    
    getLengthOfEachLetter() //animation function

    getStore(url)

    let cleanBtn = document.querySelector("#cleanCard")

    cleanBtn.addEventListener("click",cleanCard)

   
}