let headers = {
	"x-rapidapi-key": "91cbdcb779mshb25e7872769b4fcp110c07jsnbcf1d17bc30b",
	"x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
};

let allAlbums = { eminem: [], metallica: [], behemoth: [] };


const generateCard = function (albumInfo) {
	return `<div class="col col-12 col-sm-6 col-md-4 col-lg-2 ">

                <div class="card ${albumInfo.album.id}">   
                    <img src="${albumInfo.album.cover_medium}" class="card-img-top card-brdr-bl" alt="...">
                    <div class="card-body">
                    <h5 class="card-title">${albumInfo.title_short}</h5>
                
                    </div>
                </div>
            </div>`;
};

const addCardToPage = function(){
    let eminemSection = document.querySelector(".eminem .row")
    addCardToSection(eminemSection,allAlbums.eminem)

    let metallicaSection = document.querySelector(".metallica .row")
    addCardToSection(metallicaSection,allAlbums.metallica)

    let behemothSection = document.querySelector(".behemoth .row")
    addCardToSection(behemothSection,allAlbums.behemoth)
}

const addCardToSection = function(section,album){
    
    for(let i=0;i<album.length;i++) {
        
        let newCard = generateCard(album[i])
        section.innerHTML += newCard
    }   
        
    
}

  
const findUniqueAlbums = function(){
    
    let uniqueClassNames = []
    
    let allCards = document.querySelectorAll(".card")
    
    for(let card of allCards){
        if(!(uniqueClassNames.includes(card.classList))){
            uniqueClassNames.push(card.classList)
        }
    }
    alert("There are "+uniqueClassNames.length+" unique albums")
   
}
window.onload = function () {
	let artists = ["eminem", "metallica", "behemoth"];

	for (let artistName of artists) {
		fetch(
			`https://deezerdevs-deezer.p.rapidapi.com/search?q=${artistName}`,
			{ method: "GET", headers }
		)
			.then((response) => response.json())
			.then((artistData) => {
				allAlbums[artistName] = artistData.data;
			})
			.catch((error) => console.log(error));
    }
    

   
    let allSections = document.querySelectorAll("section")

    let showAlbumBtn = document.querySelector("#listAlbums")
    showAlbumBtn.addEventListener("click",(e) => {
        addCardToPage()
        for(let section of allSections){
            section.classList.remove("hide")
            e.target.classList.add("hide")
        }
    })


    let btn = document.querySelector("#findUnique")
    btn.addEventListener("click",findUniqueAlbums)

};
