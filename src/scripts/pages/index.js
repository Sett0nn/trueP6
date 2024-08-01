


        async function getPhotographers() {
            try {
                const response = await fetch('src/data/photographers.json');
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                    const data = await response.json();
                    const photographerData = data.photographers;


                const params = new URLSearchParams(window.location.search);
                const photographersId = parseInt(params.get('photographers_id'));
               const container = document.querySelector('#photographers-container');




                for (let i = 0; i < photographerData.length; i++) {

                    const photographer = photographerData[i];
                    console.log(photographer);
                    //
                    let photographInfo = data.find(element => element.id === photographersId);
                    console.log(photographInfo);
                    //
                    // const photographerId = document.createElement('div')
                    // photographerId.classList.add = 'photographer';
                    //
                    //
                    // const nameElement = document.createElement("fullname");
                    // nameElement.className = 'name';
                    // photographersId.classList.add('photographerName');
                    // console.log(nameElement);
                    // nameElement.appendChild(document.createTextNode(photographer));
                    //
                    // let townElement = document.getElementById("town");
                    // townElement.textContent = photographInfo.localisation;
                    // console.log(townElement);
                    //
                    // let profilElement = document.getElementById("profil")
                    // profilElement.src = photographInfo.url
                    // console.log(profilElement);
                    //
                    // let TjmElement = document.createElementbyId('price');

                }
                }catch (error){
                    console.error(error);
                }
        }

              getPhotographers()



    // fetch('scripts/utils/photographer.json')
    //     .then(response => response.json())
    //     .then(data => {
    //         const params = new URLSearchParams(window.location.search);
    //         const photographId = parseInt(params.get('photograph_id'));
    //         let photographInfo = data.find(element => element.id === photographId);


        //     let nameElement = document.getElementById("fullname")
        //     nameElement.textContent = photographInfo.fullname;
        //
        //     let townElement = document.getElementById("town")
        //     townElement.textContent = photographInfo.localisation;
        //
        //     let profilElement = document.getElementById("profil")
        //     profilElement.src = photographInfo.url
        //
        //     if    (!response.ok){
        //         throw new Error('Network response was not ok ' + response.statuText);
        //     }
        // });




//     async function displayData(photographers) {
//         const photographersSection = document.querySelector(".photographer_section");
//
//         photographers.forEach((photographer) => {
//             const photographerModel = photographerTemplate(photographer);
//             const userCardDOM = photographerModel.getUserCardDOM();
//             photographersSection.appendChild(userCardDOM);
//         });
//     }
//
//     async function init() {
//         // Récupère les datas des photographes
//         const {photographers} = await getPhotographers();
//         displayData(photographers);
//     }
//
//     init();
// }
//
// const data = [
//     {
//         id : 1,
//         name: "kevin",
//         city: "Paris",
//     },
//     {
//         id: 2,
//         name: "tommy",
//         city: "Athis",
//     },
// ]
// console.log(data)
//
// document.createElement("div");

