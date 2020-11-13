const headers = new Headers({
    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmFiYzVmYTRiY2RlMTAwMTc2MTZhOGUiLCJpYXQiOjE2MDUwOTYyNTAsImV4cCI6MTYwNjMwNTg1MH0.nlxiDWCpfMdhafwVpCciynh11DPZiiOjeTw39P39iz8",
    "Content-Type": "application/json"   
})
let buttonSpinner = document.getElementById("buttonSpinner")

/**
 * Applies POST process  
 * @param {String} url Apı url
 */
const postProduct = async function(url){
    const body = JSON.stringify(createProduct())
    buttonSpinner.classList.toggle("d-none")
    try{
        let response = await fetch(url,{method:"POST",body,headers})

        if(response.ok){
            alert("Succesfully Created :)")
            cleanFormContent()
            buttonSpinner.classList.toggle("d-none")
        }else{
            alert("something went wrong :(")
            cleanFormContent()
            buttonSpinner.classList.toggle("d-none")
        }
    }catch(err){
        console.log(err)
    }
} 

/**
 * Apllies EDIT process
 * @param {String} url 
 */
const editProduct = async function(url){
    
    const editedBody = JSON.stringify(createProduct())
    buttonSpinner.classList.toggle("d-none")

    try {
        
        let response = await fetch(url,{method:"PUT",body:editedBody,headers})
        if(response.ok){
            alert("Successfuly Edited")
            cleanFormContent()
            buttonSpinner.classList.toggle("d-none")
            window.location.href = "products_office.html"
        }else{
            alert("Something went wrong")
            buttonSpinner.classList.toggle("d-none")
            cleanFormContent()
        }
    } catch (error) {
        console.log(error)
    }

}

const handleSubmit = function(e,url){
    e.preventDefault()
    postProduct(url)    
}

const handleEdit = function(e,url){
    e.preventDefault()
    let id = new URLSearchParams(window.location.search).get("id")
    editProduct(url+id)
}


/**
 * Cleans input form content after sending information
 */
const cleanFormContent = function(){
        document.getElementById("name").value = ""
        document.getElementById("description").value = ""
        document.getElementById("brand").value = ""
        document.getElementById("image").value = "" 
        document.getElementById("price").value = ""
}

/**
 * Fills form values regarding with id
 * @param {String} url 
 */
const fillFormForEditing = async function(url){
    let id = new URLSearchParams(window.location.search).get("id")

    try {
        let response = await fetch(url+id,{headers})
        let product = await response.json()
        document.getElementById("name").value = product.name
        document.getElementById("description").value = product.description
        document.getElementById("brand").value = product.brand
        document.getElementById("image").value = product.imageUrl
        document.getElementById("image").disabled = true
        document.getElementById("price").value = product.price

    } catch (error) {
        console.log(error)
    }

    
}


const createProduct = function(){

    let name = document.getElementById("name").value
    let description = document.getElementById("description").value
    let brand = document.getElementById("brand").value
    let image = document.getElementById("image").value
    let price = document.getElementById("price").value

    
    return {
        "name": name,  //REQUIRED
        "description": description, //REQUIRED
        "brand": brand, //REQUIRED
        "imageUrl": image, //REQUIRED
        "price": price, //REQUIRED
        
    }
}


window.onload = function(){
    const url = "https://striveschool-api.herokuapp.com/api/product/"
    const form = document.getElementById("productForm")

    let id = new URLSearchParams(window.location.search).get("id")

    // İf there is id in the URL call EDIT operations, else call POST operations
    if(id){
        document.querySelector("h3").innerText = "Edit Product"
        fillFormForEditing(url)
        form.addEventListener("submit",(e) => handleEdit(e,url))
    }else{
        form.addEventListener("submit",(e) => handleSubmit(e,url))
       
    }
   
}
