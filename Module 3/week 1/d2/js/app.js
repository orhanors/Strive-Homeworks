window.onload = function(){
    
    showData()
    let btn = document.querySelector("#searchBtn")
    btn.addEventListener("click",fetchData)
    // fetchData()
    
}

const showData = function(){
    fetch("https://deezerdevs-deezer.p.rapidapi.com/search?q=eminem", {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "91cbdcb779mshb25e7872769b4fcp110c07jsnbcf1d17bc30b",
		"x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com"
	}
    })
    .then(response => response.json())
    .then(result => result.data)
    .then(data => console.log(data))
}

const createCollection = function(){
    let section = document.querySelector("section");

    let newSection = section.cloneNode(true)
    // newSection.querySelector("h1").innerText = fetchData.artist.name;
    newSection.classList.remove("hide")
    document.querySelector("body").append(newSection)
}

const getRelatedData = function(fetchData){

    
    let img = fetchData.album.cover_medium;
    // let albumName = 
    let subHeader = fetchData.artist.name;
    let header = fetchData.title_short;
    // let overview = fetchData.
    let albumCard = newCard(img,subHeader,header)
    
    document.querySelector("section .row").append(albumCard)
    
}
const fetchData = function(){
    
    let input = document.querySelector("#searchInput")
    
    
    fetch(`https://deezerdevs-deezer.p.rapidapi.com/search?q=${input.value}`, {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "91cbdcb779mshb25e7872769b4fcp110c07jsnbcf1d17bc30b",
		"x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com"
	}
    })
    .then(response => response.json())
    .then(result => result.data)
    .then(data => {
        data.forEach((index) => {getRelatedData(index)})
    })
}

/**
 * Clones the sample card inside of the HTML and returns this cloned card
 */
const newCard = function(img,subHeader,header){
    let sampleCard = document.querySelector("section .col-12");
    let newCard = sampleCard.cloneNode(true);
    newCard.classList.remove("hide")
    newCard.querySelector("img")["src"] = img;
    newCard.querySelector(".card-title").innerText = subHeader;
    newCard.querySelector(".card-header").innerText = header;
    
    // newCard.querySelector(".card-text").innerText = overview;
    return newCard;
}