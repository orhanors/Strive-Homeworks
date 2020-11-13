const headers = new Headers({
    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmFlNzhhZTA1NzIzZTAwMTdjMTVmYjAiLCJpYXQiOjE2MDUyNjk2NzgsImV4cCI6MTYwNjQ3OTI3OH0.6Sa4VOm_qWHuawvF6iMO0MeuPBJpezQnwTbbB1IO0IE",
    "Content-Type": "application/json"
})

let id = new URLSearchParams(window.location.search).get("id")
let category = new URLSearchParams(window.location.search).get("category")

const buttonSpinner = document.getElementById("buttonSpinner")
const url = "https://striveschool-api.herokuapp.com/api/movies/"

const postMovie = async function(url){
    
    let body = JSON.stringify(createMovie())
    buttonSpinner.classList.toggle("d-none")

    try {
        let response = await fetch(url,{method:"POST",body,headers})

        if(response.ok){
            alert("Successfully created :) ")
            buttonSpinner.classList.toggle("d-none")
            window.open("fakebase.html","_blank")
        }else{
            alert("Something went wrong :( ")
            buttonSpinner.classList.toggle("d-none")
        }
    } catch (error) {
        console.log(error)
    }
    
}

const editMovie = async function(){
    let body = JSON.stringify(createMovie())

    try {
        let response = await fetch(url+id,{method:"PUT",body,headers})

        if(response.ok){
            alert("Succesfully edited")
            
        }else{
            alert("Something went wrong")
        }
    } catch (error) {
            console.log(error)
    }
}

const handleEdit = function(e){
    e.preventDefault()
    
    editMovie(url)
}


const handleSubmit = function(e){
    e.preventDefault()
   
    postMovie(url)
}


const createMovie = function(){
    let selected = document.getElementById("slct")
    

    let name = document.getElementById("name").value
    let description = document.getElementById("description").value
    let category = selected.options[selected.selectedIndex].text.toLowerCase()
    let image = document.getElementById("image").value 
    
    return {  "name": name,
             "description" : description, 
             "category":category, 
             "imageUrl": image
            }
}

const fillFormForEditing = async function(url){
    let selected = document.getElementById("slct")
    try {
        const response = await fetch(url+category,{headers})
        let data = await response.json()
        console.log(data)
        data = data.filter(index => index._id == id)
        data = data[0]

        document.getElementById("name").value = data.name
        document.getElementById("description").value = data.description
        selected.options[selected.selectedIndex].text = data.category
        document.getElementById("image").value = data.imageUrl

    } catch (error) {
        console.log(error)
    }
}

window.onload = function(){
    const form = document.getElementById("movieForm")
    
    fillFormForEditing("https://striveschool-api.herokuapp.com/api/movies/")
    if(id){

        document.querySelector("h3").innerText = "Edit Movie"

        form.addEventListener("submit",(e) => handleEdit(e))
    }else{
        form.addEventListener("submit",(e) => handleSubmit(e))
    }
    
   
}




/*
let newMovies = []
const getMoivesFromAPI = async function(){
    const url = "http://www.omdbapi.com/?apikey=827e9820&s=spiderman"

    const response = await fetch(url)
    const data = await response.json()
    newMovies = data.Search
    postMovie2()
    // for(let i = 0;i<3;i++){
    //     createMovie2(data.Search[i])
    // }
        
    
    // data.search.forEach( obj => console.log(obj))
}

const postMovie2 = async function(){
    
    
    buttonSpinner.classList.toggle("d-none")

    let body;
    for(let i=0;i<newMovies.length;i++){
        console.log(createMovie2(newMovies[i]))
        body = JSON.stringify(createMovie2(newMovies[i]))

        try {
            let response = await fetch("https://striveschool-api.herokuapp.com/api/movies/",{method:"POST",body,headers})
    
            if(response.ok){
                alert("Successfully created :) ")
                buttonSpinner.classList.toggle("d-none")
            }else{
                alert("Something went wrong :( ")
                buttonSpinner.classList.toggle("d-none")
            }
        } catch (error) {
            console.log(error)
        }
    }
   
    
}
*/
/*
const createMovie2 = function(obj){
    
    
    return {   "name": obj.Title,
             "description" : obj.Year, 
             "category":"sci-fi", 
             "imageUrl": obj.Poster
            }
}
*/