window.onload = function(){
    legendSection()
    albumList()
    genreFavorites()
}

const legendSection = function(){
    let images = document.querySelectorAll(".favorites img");
    let card_title = document.querySelectorAll(".favorites .card-header")
    let album_info = document.querySelectorAll(".favorites .card-text")
    let card_subtitle = document.querySelectorAll(".favorites .card-title")

    let image_datas = albums.filter((obj)=>obj.cover).map(el => el.cover)
    let card_title_data = albums.filter((obj) => obj.name).map(el => el.name)
    let album_info_data = albums.filter((obj) => obj.albumInfo).map(el => el.albumInfo)
    let card_subtitle_data = albums.filter((obj) => obj.artist).map(el => el.artist)
    
    console.log(album_info)
    
    for(let i=0;i<images.length;i++){
        images[i].src = image_datas[i]

        card_title[i].innerText = card_title_data[i]

        album_info[i].innerText = album_info_data[i]

        card_subtitle[i].innerText = card_subtitle_data[i]
        card_subtitle[i]["style"] = "text-align:center;font-weigt:900;color:black"
        

    }
}

const genreFavorites = function() {
    let favs = document.querySelectorAll(".favorites .card");
    
    let genres = albums.filter((obj)=>obj.genre).map(el => el.genre)
    for(let i=0;i<favs.length;i++){
        let genre = addElement(favs[i],"p",{className:"card-text text-center my-2",innerText:genres[i],style:"color:black;font-size:1rem;"})
    }
}

/*<button type="button" class="btn btn-dark">Dark</button> */

const albumList = function(){
    let favs = document.querySelectorAll(".favorites .card");

    let body = document.querySelector("body")

    let card_title_data = albums.filter((obj) => obj.name).map(el => el.name)
    let button;
    let div_co;
    let buttonBack;
    for(let i=0;i<favs.length;i++){
        button = addElement(favs[i],"button",{type:"button",className:"btn btn-sm btn-light mx-4",innerText:"Songs"})

        button.addEventListener("click",()=>{
            displayChange("none");

            div_co = addElement(body,"div",{className:"container-fluid d-flex flex-column tables"})
            let div = addElement(div_co,"div",{className:" mx-5 my-5" })
            createTable(div,8,64,card_title_data[i])
            buttonBack = addElement(div_co,"button",{type:"button",className:"btn btn-sm btn-warning",innerText:"<<Back"})
            buttonBack.addEventListener("click",()=>{
                let div_tables = document.querySelector(".tables")
                div_tables.style.display = "none";
                displayChange("block")
            })
        })

    }

    
    //TODO button.onclick ---> show table

    

}

const displayChange = function(stat){
    let sections = document.querySelectorAll("section");
    let header = document.querySelector("header");
    header.style.display = stat
    for(let el of sections){
        el.style.display = stat
    }
    





}
/**
 * 
 * <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
 * @param {*} songSize 
 */
const createTable = function(parent,songSize,duration,name){



    let table = addElement(parent,"table",{className:"table table-dark text-center"})
    let table_head = addElement(table,"thead",{className:"x"})
    let table_head_row1 = addElement(table_head,"th",{scope:"col",innerText:""})
    let table_head_row2 = addElement(table_head,"th",{scope:"col",innerText:"Song"})
    let table_head_row3 = addElement(table_head,"th",{scope:"col",innerText:"Duration"})
    let table_head_row4 = addElement(table_head,"th",{scope:"col",innerText:"Album"})

    let table_body = addElement(table,"tbody",{className:"y"})
    
    for(let i=0;i<songSize;i++){
        let tr = addElement(table_body,"tr",{className:"z"})
        let th = addElement(tr,"th",{scope:"row", innerText:i+1})
        
        let td1 = addElement(tr,"td",{innerText:"Song" + (i+1)});
        let td2 = addElement(tr,"td",{innerText:(duration/songSize-(Math.random()+3)).toFixed(2)});
        let td3 = addElement(tr,"td",{innerText:name})
        
    }


}