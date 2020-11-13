const headers = new Headers({
    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmFlNzhhZTA1NzIzZTAwMTdjMTVmYjAiLCJpYXQiOjE2MDUyNjk2NzgsImV4cCI6MTYwNjQ3OTI3OH0.6Sa4VOm_qWHuawvF6iMO0MeuPBJpezQnwTbbB1IO0IE"
})

const url = "https://striveschool-api.herokuapp.com/api/movies/"
let categories = []

let loadingSpinner = document.getElementById("loadingSpinner")

const getCategories = async function(){
    const response1 = await fetch(url,{method:"GET",headers})
    const category = await response1.json()
   
    
    
    for(let i=0;i<category.length;i++){
        loadingSpinner.classList.toggle("d-none")
        try{
            
            const response = await fetch(url+category[i],{headers})
            const spesificMovies = await response.json()
            
            if(response.ok){
                console.log("done")
                displayMovie(spesificMovies,category[i])
                loadingSpinner.classList.toggle("d-none")
            }else{
                alert("smthing went wrong")
                
            }
               
        }catch(err){
            console.log(err)
        }
    }
    
}

const getMovies = async function(category){
    console.log("gettingmoviess..")
   
    getCategories()
        
      
}


const getSectionContainer = function(){
    return document.getElementById("allCategories")
}

const displayMovie = function(array,title){
    let sectionContainer = getSectionContainer()
    
    let sampleContainer = document.querySelector(".category-container")
    
    let newContainer = sampleContainer.cloneNode(true)
    // newContainer.classList.toggle("d-none")

    
    
    newContainer.querySelector(".sectionTitle").innerText = title.toUpperCase()
    let allImgs = newContainer.querySelectorAll("img")

    let elId = title + `${Math.random()*10}`
    newContainer.querySelector(".carousel.slide.carousel-fade").id = elId
    
    Array.from(newContainer.querySelectorAll("a.toggle")).forEach(el => el["href"] = "#"+elId)
   
    for(let i=0;i<array.length;i++){
        if(allImgs[i]){
            allImgs[i]["src"] = array[i].imageUrl
            
        }
        
    }

    sectionContainer.append(newContainer)
}
window.onload = function(){
    console.log("loaded")
     
    getCategories()
}