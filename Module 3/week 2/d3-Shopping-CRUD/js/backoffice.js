const postProduct = async function(url){
   
    
    const headers = new Headers({
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmFiYzVmYTRiY2RlMTAwMTc2MTZhOGUiLCJpYXQiOjE2MDUwOTYyNTAsImV4cCI6MTYwNjMwNTg1MH0.nlxiDWCpfMdhafwVpCciynh11DPZiiOjeTw39P39iz8",
        "Content-Type": "application/json"   
    })


    const body = JSON.stringify(createProduct())

    try{
        let response = await fetch(url,{method:"POST",body,headers})

        if(response.ok){
            alert("Succesfully Added :)")
        }else{
            alert("something went wrong :(")
        }
    }catch(err){
        console.log(err)
    }
}  

    
const handleSubmit = function(e,url){
    e.preventDefault()
    postProduct(url)    
}

const createProduct = function(){

    let name = document.getElementById("name").value
    let description = document.getElementById("description").value
    let brand = document.getElementById("brand").value
    let image = document.getElementById("image").value
    let price = document.getElementById("price").value

    console.log([name,description,brand,image,price])
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
    form.addEventListener("submit",(e) => handleSubmit(e,url))
}
