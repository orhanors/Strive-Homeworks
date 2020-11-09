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
