const headers = new Headers({
    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmFiYzVmYTRiY2RlMTAwMTc2MTZhOGUiLCJpYXQiOjE2MDUwOTYyNTAsImV4cCI6MTYwNjMwNTg1MH0.nlxiDWCpfMdhafwVpCciynh11DPZiiOjeTw39P39iz8"
    })

const url = "https://striveschool-api.herokuapp.com/api/product/"

const getProducts = async function(url){
    let spinner = document.getElementById("loadingSpinner")
    spinner.classList.toggle("d-none")

    try {
        let response = await fetch(url,{headers})

        if(response.ok){
            spinner.classList.toggle("d-none")
            let products = await response.json()
            displayProductRows(products)
            handleDelete()
            handleEdit()
            modalImgTransition()
        }
    } catch (error) {
        console.log(error)
    }
    
}

const handleDelete = function(){
    let deleteBtns = document.querySelectorAll("#delete")

    deleteBtns.forEach((btn) =>{
        btn.addEventListener("click",(e) => deleteProcess(e))
    })
}

const handleEdit = function(){
    let editBtns = document.querySelectorAll("#edit")

    editBtns.forEach((btn) => {
        btn.addEventListener("click",(e) => editProcess(e))
    })
}
const deleteProcess = function(e){
    let eventRow  = e.target.closest("tr")
    let productID = eventRow.querySelector("th").innerText

    let confirmationModal = document.getElementById('confirmation-modal');
    let deleteBtn = document.querySelector("#confirmation-modal .deletebtn")


    confirmationModal.style.display = "block"
    confirmationModal.querySelector("p").innerText = ""
    confirmationModal.querySelector("p").innerText += "Are you sure you want to delete "+ e.target.closest("tr").querySelector("#name").innerText +"?"

    
    confirmationModal.addEventListener("click",async (event) => {
        if(event.target === deleteBtn){
            try{
                let response = await fetch(url+productID, {method:"DELETE",headers})
                if(response.ok){

                   eventRow.style.display ="none"
                }
            }catch(err){
                console.log(err)
            }  
        }
    })
}

const editProcess = function(e){
    let productId = e.target.closest("tr").querySelector(".productID").innerText
    
    if(productId){
        window.location.href = `back_office.html?id=${productId}`
    }
}






const getTableBody = function(){
    return document.querySelector(".table.table-bordered tbody")
}
/**
 * Takes whole data array and generates rows 
 * @param {Array} array Fetched array 
 */
const displayProductRows = function(array){
    let tableBody = getTableBody()
    
    array.forEach(product => {
        tableBody.innerHTML += generateProductRow(product)
    })
}


/**
 * Takes a single product object and generates new table row according to this product
 * @param {Object} product Single product object 
 */

const generateProductRow = function(product){
    return `<tr>
                <th class="productID" scope="row">${product._id}</th>
                <td> <img src="${product.imageUrl}" alt="${product.name} by ${product.brand}"></td>
                <td id="name">${product.name}</td>
                <td>${product.brand}</td>
                <td>${product.price}</td>
                <td class="text-center">
                
                    <button id="edit" type="button" class="btn btn-success"><i class="fas fa-edit"></i></button>
                    <button id="delete" type="button" class="btn btn-danger"><i class="far fa-trash-alt"></i></button>
                </td>
           </tr>`
}

const titleRedirect = function(){
    let title = document.querySelector("h1")

    title.addEventListener("click",()=>{
        window.open("index.html","_blank")
    })
}
window.onload = function(){
    titleRedirect()
    
    const url = "https://striveschool-api.herokuapp.com/api/product/"

    getProducts(url)

    
}