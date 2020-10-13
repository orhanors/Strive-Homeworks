/*Create a responsive section for your favourite albums.
------------------------>*/
window.onload = function () {
    loadPage()
}


const loadPage = function () {
    let allCards = document.querySelector(".allCards");

    let pageTitle = addElement(allCards, 'h2', {
        id: "subTitle"
    })

    let row = addElement(allCards, "div", {
        className: "row"
    })
    for (let i = 0; i < albums.length; i++) {
        addCard(albums[i], row, 'sm')
    }
}
const addCard = function (album, row, size) {

    let col = addElement(row, "div", {
        className: `col-xl-${4} col-md-${3} col-md-${2}`,
        style: "margin-bottom:50px;",
    });
    let card = addElement(col, "div", {
        className: "card",
        style: "min-width:240px",
    });
    let img = addElement(card, "img", {
        className: "card-img-top",
        src: album.cover,
    });
    let body = addElement(card, "div", {
        className: "card-body"
    });
    let title = addElement(body, "h5", {
        className: "card-title",
        innerText: album.name,
    });
    let artist = addElement(body, "p", {
        className: "card-text",
        innerText: album.artist,
    });
    let year = addElement(body, "p", {
        className: "card-text",
        innerText: album.year,
    });
    let genre = addElement(body, "p", {
        className: "card-text genre",
        innerText: album.genre,
    });
    let a = addElement(body, "button", {
        className: "btn btn-",
        onclick: function () {
            discoverPage(album);
        },
        style: "min-width:100%",
        id: "btn-more",
        innerHTML: "Discover &rarr; ",
    });
}

function discoverPage(album) {

    const root = document.querySelector(".allCards");
    const brand = document.querySelector("#brand");
    brand.innerHTML = "&larr; Back To Albums";
    root.innerHTML = "";
    let jumbotron = addElement(root, "div", {
        className: "jumbotron jumbotron-fluid",
        style: `background:url(${album.cover});background-size:cover; background-position:50% 35%; height:400px; margin-top:50px;padding:30px;`,
    });
    let jumbotronContainer = addElement(jumbotron, "div", {
        className: "container",
    });

    let jumbotronTitle = addElement(jumbotronContainer, "h1", {
        className: "display-4",
        innerText: album.name,
        style: "color:#fff",
    });
    let jumbotronDescription = addElement(jumbotronContainer, "p", {
        className: "lead",
        innerText: `${album.artist},${album.year}`,
        style: "color:#fff",
    });
    let button = addElement(jumbotronContainer, "a", {
        className: "btn btn-danger",
        innerText: "Listen",
        style: "width:80px",
        //href: album.url,
        target: "blank",
    });

    let albumTitle = addElement(root, "h2", {
        innerText: "About Album"
    });
    let aboutAlbum = addElement(root, "p", {
        innerText: album.albumInfo
    });
    let aboutTitle = addElement(root, "h3", {
        innerText: "About Artist",
        style: "margin:50px 0px;",
    });
    let aboutContent = addElement(root, "div", {
        className: "row"
    });
    let artistAvatarContainer = addElement(aboutContent, "div", {
        className: "col-md-4 col-lg-4 col-xl-4 col-sm-12",
    });

    /* 
    let avatar = addElement(artistAvatarContainer, "img", {
        src: artist.avatar,
        style: "width:100%",
    });

    */
    let artistInfoContainer = addElement(aboutContent, "div", {
        className: "col-md-8 col-lg-8 col-xl-8 col-sm-12",
    });

    let artistTitle = addElement(artistInfoContainer, "h4", {
        innerText: album.artist,
    });
    let about = addElement(artistInfoContainer, "div", {
        innerText: album.artistInfo
    })
};