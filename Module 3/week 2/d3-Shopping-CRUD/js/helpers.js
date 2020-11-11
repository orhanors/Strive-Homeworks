/**
 * MODAL IMAGE TRANSITION
 */

const modalImgTransition = () => {
    let modal = document.getElementById("myModal");

    // Get the image and insert it inside the modal - use its "alt" text as a caption
    let allImg = document.querySelectorAll(".card img");
    var modalImg = document.getElementById("img01");
    let captionText = document.getElementById("caption");
    
    allImg.forEach((img) =>{
        img.onclick = function(){
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
        captionText["style"] = "font-weight:bolder"
        captionText.classList.add("mt-4")
            
        }
    })
        

    // Get the <span> element that closes the modal
    let span = document.getElementsByClassName("close")[0];

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() { 
    modal.style.display = "none";
    }
}

/**
 * HEADER ANIMATION
 */
const getLengthOfEachLetter = function () {
	let letters = document.querySelectorAll("#logo path");

    //this loop makes word invisible(bcz dashoffset is equal to dasharray)
    let delay = 0;
	for (let i = 0; i < letters.length; i++) { 
        let element = letters[i] 
        element.style["stroke-dasharray"]=element.getTotalLength(); 
        element.style["stroke-dashoffset"]=element.getTotalLength();
        

        element.style["animation-delay"] = delay+"s";
        delay += 0.3
	}
   
};
