//Mettre le code JavaScript lié à la page photographer.html


document.addEventListener("DOMContentLoaded", function () {
    fetch("src/utils/photographer.json")
        .then(response => response.json())
        .then(data => {
            const params = new URLSearchParams(window.location.search);
            const photographId = parseInt(params.get('photograph_id'));
           let photographInfo = data.find(element => element.id === photographId);

            let nameElement = document.getElementById("fullname")
            nameElement.textContent = photographInfo.fullname;

            let townElement = document.getElementById("town")
            townElement.textContent = photographInfo.localisation;

            let profilElement = document.getElementById("profil")
            profilElement.src = photographInfo.url;

            let descriptionElement = document.getElementById("description")
            descriptionElement.textContent = photographInfo.description;

       })
})

async function getPhotographerData() {
    try{
        const response = await fetch("src/utils/photographer.json")
        .then(response => response.json())
    } catch (error) {
        console.error(error)
     }
    }

    let PhotographerData = {}

 getPhotographerData().then(data => PhotographerData = data)

const photographerEvent = document.querySelectorAll("a").forEach(a=>{
    a.addEventListener('click', photographerInfo)
})

function photographerInfo(event) {
    let photographerChoice = PhotographData.photographers.find(photographer => {
        return event.target.id === photographer.name.toLowerCase()
        return event.target.id === photographer.city.toLowerCase()
        return event.target.id === photographer.country.toLowerCase()
        return event.target.id === photographer.tagline.toLowerCase()
        return event.target.id === photographer.price.toLowerCase()
        return event.target.id === photographer.picture.toLowerCase()
    })

    console.log(photographerChoice)

    document.querySelector("#photographerName").textContent = `${photographerChoice.name} photographer`
    document.querySelector("#city").textContent = `${photographerChoice.city}`
    document.querySelector("#country").textContent = `${photographerChoice.country}`
    document.querySelector("#tagline").textContent = `${photographerChoice.tagline}`
    document.querySelector("#price").textContent = `${photographerChoice.price}`
    document.querySelector("#picture").innerHTML = `${photographerChoice.picture}`

}








//const photographId = document.getElementById("photograph_id");
//const imagesIndexes = [1,2,3,4,5,6];
//const selectIndex = null;

//imagesIndexes.forEach(i =>{
    //const image = document.createElement("img");
    //image.src = `/`
//})