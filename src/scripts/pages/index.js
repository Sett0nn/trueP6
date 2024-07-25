async function getPhotographers() {
    // Ceci est un exemple de données pour avoir un affichage de photographes de test dès le démarrage du projet,
    // mais il sera à remplacer avec une requête sur le fichier JSON en utilisant "fetch".

    fetch('scripts/utils/photographer.json')
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
            profilElement.src = photographInfo.url

            if    (!response.ok){
                throw new Error('Network response was not ok ' + response.statuText);
            }
        });




    async function displayData(photographers) {
        const photographersSection = document.querySelector(".photographer_section");

        photographers.forEach((photographer) => {
            const photographerModel = photographerTemplate(photographer);
            const userCardDOM = photographerModel.getUserCardDOM();
            photographersSection.appendChild(userCardDOM);
        });
    }

    async function init() {
        // Récupère les datas des photographes
        const {photographers} = await getPhotographers();
        displayData(photographers);
    }

    init();
}