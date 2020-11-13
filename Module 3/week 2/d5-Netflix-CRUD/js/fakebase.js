const headers = new Headers({
    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmFlNzhhZTA1NzIzZTAwMTdjMTVmYjAiLCJpYXQiOjE2MDUyNjk2NzgsImV4cCI6MTYwNjQ3OTI3OH0.6Sa4VOm_qWHuawvF6iMO0MeuPBJpezQnwTbbB1IO0IE"
})


const getMovies = async function(url){

    try{
        let response = await fetch(url,{method:"GET",headers})
        let movies = await response.json()
        displayRows(movies)
        handleDelete()
        redirectEditPage()
    }catch(err){
        console.log(err)
    }
   
    
}

const handleDelete = function(){
    let deleteBtns = document.querySelectorAll("#delete");

    deleteBtns.forEach((btn) => {
        btn.addEventListener("click",(e) => deleteProcess(e))
    })
}
const deleteProcess = function(e){
    let eventRow  = e.target.closest("tr")
    let movieID = eventRow.querySelector("th").innerText

    let confirmationModal = document.getElementById('confirmation-modal');
    let deleteBtn = document.querySelector("#confirmation-modal .deletebtn")


    confirmationModal.style.display = "block"

    confirmationModal.querySelector("p").innerText = ""
   
    confirmationModal.querySelector("p").innerText += "Are you sure you want to delete "+ e.target.closest("tr").querySelector("#name").innerText +"?"

    const url = "https://striveschool-api.herokuapp.com/api/movies/"
    confirmationModal.addEventListener("click",async (event) => {
        if(event.target === deleteBtn){
            try{
                let response = await fetch(url+movieID, {method:"DELETE",headers})
                if(response.ok){

                   eventRow.style.display ="none"
                }
            }catch(err){
                console.log(err)
            }  
        }
    })
}
const getContainer = function(){
    return document.querySelector(".table.table-bordered tbody")
}

const displayRows = async function(array){
    let container = getContainer()

    for(let movie of array){
        container.innerHTML += generateProductRow(movie)
    }
}


const redirectEditPage = function(){
    let editBtns = document.querySelectorAll("#edit")

    editBtns.forEach((btn) => {
        btn.addEventListener("click",(e) =>{
            let movieId = e.target.closest("tr").querySelector(".movieID").innerText
            let category = e.target.closest("tr").querySelector("#category").innerText
            // window.localStorage.setItem("")
            window.location.href = `./backoffice.html?id=${movieId}&category=${category}`
        })
    })
}

const generateProductRow = function(movie){
    return `<tr>
                <th class="movieID" scope="row">${movie._id}</th>
                <td> <img src="${movie.imageUrl}" alt="${movie.name} by ${movie.brand}"></td>
                <td id="name">${movie.name}</td>
                <td id="description">${movie.description}</td>
                <td id="category">${movie.category}</td>
                <td class="text-center">
                
                    <button id="edit" type="button" class="btn btn-success"><i class="fas fa-edit"></i></button>
                    <button id="delete" type="button" class="btn btn-danger"><i class="far fa-trash-alt"></i></button>
                </td>
           </tr>`
}



window.onload = function(){

    let options = ["horror","drama","comedy","action","sci-fi","documentary"]

    options.forEach((category) => {
        const url = `https://striveschool-api.herokuapp.com/api/movies/${category}`
        getMovies(url)
    })
   

    
}