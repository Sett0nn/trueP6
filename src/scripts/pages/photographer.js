//Mettre le code JavaScript lié à la page photographer.html


// document.addEventListener("DOMContentLoaded", function () {
//     fetch("src/utils/photographer.json")
//         .then(response => response.json())
//         .then(data => {
//             const params = new URLSearchParams(window.location.search);
//             const photographId = parseInt(params.get('photograph_id'));
//            let photographInfo = data.find(element => element.id === photographId);
//
//
//             let nameElement = document.getElementById("fullname")
//             nameElement.textContent = photographInfo.fullname;
//
//             let townElement = document.getElementById("town")
//             townElement.textContent = photographInfo.localisation;
//
//             let profilElement = document.getElementById("profil")
//             profilElement.src = photographInfo.url;
//
//             let descriptionElement = document.getElementById("description")
//             descriptionElement.textContent = photographInfo.description;
//
//        })
// })
//
// async function getPhotographerData() {
//     try{
//         const response = await fetch("src/data/photographers.json");
//         return response.json();
//     } catch (error) {
//         console.error(error)
//      }
//     }
//
//     ( async() => {
//
//      const data = await getPhotographerData();
//      console.log(data)
//
//  })()

async function getPhotographerData(){
    console.log("test");
    try {
        const response = await fetch("src/data/photographers.json")
        console.log(response.json());
        return await response.json()
    } catch (error) {
        console.log(error)
    }
}
console.log(getPhotographerData());


function createPhotographers(getPhotographerData) {
    const container = document.querySelector('#container');
    console.log(container);

    for (let i = 0; i < getPhotographerData.lenght; i++) {
        const photographer = getPhotographerData[i];
        console.log(photographer);

        const NameElement = document.createElement('fullname');
        NameElement.className = 'photographer-name';
        console.log(NameElement);

        const TownElement = document.creatElement("town");
        TownElement.className = 'photographerTown';
        console.log(TownElement);

        const QuoteElement = document.createElement('quote');
        QuoteElement.className = 'PhotographerQuote';
        console.log(QuoteElement);


        const TjmElement = document.createElement('div');
        TjmElement.className = 'photographerPrice';
        console.log(TjmElement);

    }
}

console.log(createPhotographers);





//     let PhotographerData = {}
// console.log(PhotographerData)
// // //
//  getPhotographerData().then(data => PhotographerData = data)
// // //
//
// // // //
// const photographerInfo = (event) => {
//     // Fonction à définir
//     console.log("Photographer Info:", event.target);
// };
//
// document.querySelectorAll("img_position").forEach(a => {
//     a.addEventListener('click', photographerInfo);
//     console.log("Event Listener Added to:", a);
// });
//
// function photographerInfo(event) {
//     let photographerChoice = PhotographData.photographers.find(photographer => {
//         return event.target.id === photographer.name.toLowerCase()
//         return event.target.id === photographer.city.toLowerCase()
//         return event.target.id === photographer.country.toLowerCase()
//         return event.target.id === photographer.tagline.toLowerCase()
//         return event.target.id === photographer.price.toLowerCase()
//         return event.target.id === photographer.picture.toLowerCase()
//     })}
// //
//     console.log(photographerChoice)
//
//     document.querySelector("#photographerName").textContent = `${photographerChoice.name} photographer`
//     document.querySelector("#city").textContent = `${photographerChoice.city}`
//     document.querySelector("#country").textContent = `${photographerChoice.country}`
//     document.querySelector("#tagline").textContent = `${photographerChoice.tagline}`
//     document.querySelector("#price").textContent = `${photographerChoice.price}`
//     document.querySelector("#picture").innerHTML = `${photographerChoice.picture}`

// }
//







//const photographId = document.getElementById("photograph_id");
//const imagesIndexes = [1,2,3,4,5,6];
//const selectIndex = null;

//imagesIndexes.forEach(i =>{
    //const image = document.createElement("img");
    //image.src = `/`
//})