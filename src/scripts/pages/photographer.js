//Mettre le code JavaScript lié à la page photographer.html


// document.addEventListener("DOMContentLoaded", function () {
//     fetch("trueP6/src/data/photographers.json")
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

const params = new URLSearchParams(window.location.search);
const photographId = parseInt(params.get('photographerId'));









let navBar = document.getElementById("nav-bar");
let totalLikeCount = 0;
const totalLikeDisplay = document.createElement('div');
// const tjmDisplay = document.createElement('div');
// tjmDisplay.className = 'tjmDisplay'
// tjmDisplay. textContent = photographInfo.price;
totalLikeDisplay.className = 'total-Like';
totalLikeDisplay.textContent = `Total likes: 0`;
navBar.appendChild(totalLikeDisplay);
// navBar.appendChild(tjmDisplay);





// console.log(data.media[0].likes)
window.photographers.media[0].likes++
// console.log(data.media[0].likes)



const card = document.createElement('div');
card.className = 'photographer-card';
// console.log(card)


const photographInfo = window.photographers.photographers.find(element => element.id === photographId)





    const listElement = document.getElementById('photographers-banner');


    const [photographerHeader] = document.getElementsByClassName("photograph-header");


    const photographerForm = document.createElement('div');
    photographerForm.className = 'photographer-form';
    photographerHeader.appendChild(photographerForm)

    const photographDetails = document.createElement('div');
photographDetails.className = 'photograph-details';
    const headerName = document.createElement("div");
    headerName.className = 'header-name';
    console.log(photographInfo);
    headerName.textContent = photographInfo.name;
    // photographerHeader.appendChild(photographDetails);
photographerForm.appendChild(headerName);


const button = document.createElement('button');
button.className = 'contact_button';
button.textContent = 'Contactez-moi';
button.setAttribute('aria-haspopup', 'dialog');
button.addEventListener('click', () => displayModal(photographer.name));
photographerHeader.appendChild(button);





function handleContactButtonClick(event) {
    event.target.classList.add('active');
    openModal();
}


function closeModal() {
    const modal = document.getElementById('contact_modal');
    modal.setAttribute('aria-hidden', 'true');
    modal.style.display = 'none';
    // Retirer la classe 'active' du bouton lorsque le modal est fermé
    // document.querySelector('.contact_button').classList.remove('active');
}

    const Detailslocation = document.createElement('div');
Detailslocation.className = 'photograph-details';
    const locationForm = document.createElement('div')
locationForm.className = 'location-form';
Detailslocation.textContent = photographInfo.city
photographerForm.appendChild(Detailslocation);






    const img = document.createElement('img');
    img.src = photographInfo.portrait;
    img.alt = `Portrait de ${photographInfo.name}`;
    img.style.height = '230px';
    img.style.objectFit = 'cover';
    img.style.display = 'block';
    img.style.overflow = 'hidden';
    img.style.borderRadius = '50%';
    img.style.marginTop = '30px';
    photographerHeader.appendChild(img)

    // const photographForm = document.getElementById('div');
    // photographForm.

    // const city = document.createElement('div');
    // city.textContent = photographInfo.city;
    // city.className = 'city-photographer';

    const tagline = document.createElement('p');
    tagline.textContent = photographInfo.tagline;
    tagline.className = 'tagline-photographer';
photographerForm.appendChild(tagline)

    const price = document.createElement('p');
    price.textContent = `Prix: $${photographInfo.price}/jour`;
    price.className = 'price-photographer';





// on veut récuperer les photos des photograph
const pictures = window.photographers.media.filter(element =>  element.photographerId === photographId);
// console.log(pictures)
const ImagePhoto = document.getElementById("container-photo");
const PhotoStyle = document.getElementById("photo-style");
const containerPhoto = document.getElementById('container-photo');
console.log(PhotoStyle);
console.log(ImagePhoto);



const showPictures = () => {
    pictures.forEach((picture, index) => {
        const PictureContainer = document.createElement('div');
        PictureContainer.id = `picture-${picture.id}`;
        PictureContainer.className = 'picture-container';
        const PictureImage = document.createElement('img');
        const fileName = picture.video || picture.image
        PictureImage.src = "src/assets/images/"+photographId+"/"+ fileName;

        PictureImage.setAttribute('role', 'button');
        PictureImage.setAttribute('aria-label', `Open lightbox for ${picture.title}`);
        PictureImage.addEventListener('click', () => openLightbox(index));

        PictureImage.alt = picture.title;
        const pictureDetails = document.createElement('div');
        pictureDetails.className = 'picture-details';
        const likeDetails = document.createElement('div');
        likeDetails.className = 'like-details';
        const detailTitle = document.createElement('div');
        detailTitle.textContent = picture.title;
        let likeCount = picture.likes;
        const detailLike= document.createElement('div');
        const heartRed = document.createElement('img');


        heartRed.className = 'heart-detail';
        heartRed.src = "src/assets/icons/heart-solid.svg";
        detailLike.textContent = picture.likes ;
        detailLike.className = 'detail-like';
        // heartRed.addEventListener('click', function (){
        const handleLike = function (){
            console.log('heart clicked')
            likeCount+=1;
            detailLike.textContent = likeCount;
            heartRed.removeEventListener('click', handleLike);
            totalLikeDisplay.textContent = `Total likes: ${++totalLikeCount}`;

        };
        heartRed.addEventListener('click', handleLike);



        const fileExtension = fileName.split('.').pop().toLowerCase();
        const typeMedia = ['mp4'].includes(fileExtension) ? "VIDEO" : "IMAGE";
        // console.log(fileExtension)
        if (typeMedia === "VIDEO") {
            const pictureVideo = document.createElement('video');
            pictureVideo.className = 'picture-video';
            pictureVideo.controls = true;
            listElement.appendChild(pictureVideo);
            PictureContainer.appendChild(listElement)



            const sourceVideo = document.createElement('source');
            sourceVideo.src = "src/assets/images/" + photographId + "/" + fileName;
            sourceVideo.type = `video/${fileExtension}`;
            pictureVideo.appendChild(sourceVideo);


        } else if (typeMedia === "IMAGE") {
            // console.log("filename",fileName);
            const pictureImage = document.createElement('img');
            pictureImage.className = 'picture-image';
            pictureImage.src = "src/assets/images/" + photographId + "/" + fileName;
            pictureImage.alt = `Image de ${photographInfo.name}`;
            PictureContainer.appendChild(PictureImage);
        }




        const NavBar = document.createElement('div');
        NavBar.className = 'nav-bar';
        const Heart = document.createElement('img');

        const buttonHeader = document.createElement('div');
        buttonHeader.className='button-header';
        const Tjm = document.createElement('div');
        Tjm.getElementsBy = 'nav-bar';
        Tjm.textContent = price +" / jour";
        navBar.appendChild(Tjm);

        const photoList= document.createElement('div');
        photoList.className='photo-list';








        photoList.appendChild(NavBar);
        photoList.appendChild(buttonHeader);
        NavBar.appendChild(Heart);
        buttonHeader.appendChild(Tjm);


        // const pictureVideo = document.createElement('video');
        // pictureVideo.controls = true;
        // pictureVideo.muted = true;
        // pictureVideo.autoplay = true;
        // pictureVideo.loop = true;
        // pictureVideo.getElementById = 'picture-video';
        // const sourceVideo = document.createElement('source');
        // sourceVideo.src = "src/assets/images/"+photographId+"/"+ picture.video;
        // sourceVideo.type = 'video/mp4';



        containerPhoto.appendChild(PictureContainer);
        PictureContainer.appendChild(pictureDetails);
        pictureDetails.appendChild(detailTitle);
        likeDetails.appendChild(detailLike);
        pictureDetails.appendChild(likeDetails);
        likeDetails.appendChild(heartRed);
        // const ACTIVE_OPACITY = '1';
        // const GLOBAL_COUNTER_ELEMENT_ID = 'global-likes';


        const sortClass = document.createElement('div');
        sortClass.className = 'sort-class';
        const TitleSort=document.createElement('div');
        TitleSort.className = 'title-sort';
        TitleSort.textContent = 'Trier par';
        // const sortLike = document.getElementById("sort-like");
        // sortLike.className = 'title-sort';
        const sortDate=document.createElement('div');
        sortDate.className = 'title-sort';
        const sortTitle=document.createElement('div');
        sortTitle.className = 'title-sort';

        const sortBloc = document.getElementsByClassName('sort-class')
        sortBloc.className = 'sort-class';
        // .appendChild(sortClass)
        sortClass.appendChild(TitleSort)
        // sortClass.appendChild(sortLike)
        sortClass.appendChild(sortDate)
        sortClass.appendChild(sortTitle)










    });
}



function sortPictures(criteria) {
    console.log(criteria)
    if (criteria === 'likes') {
        pictures.sort(function (a, b) {
            return b.likes - a.likes;

        });
    } else if (criteria === 'date') {
        pictures.sort(function (a, b) {
            return new Date(b.date) - new Date(a.date);
        });
    } else if (criteria === 'title') {
        pictures.sort(function (a, b) {
            return a.title.localeCompare(b.title);
        });
    }
    containerPhoto.innerHTML = '';
    listElement.innerHTML = '' ;
    showPictures()


}

sortPictures('likes');





Array.from(pictures).forEach(function(picture) {
    totalLikeCount += picture.likes;
    totalLikeDisplay.textContent = `Total likes: ${totalLikeCount}`;

});











// Add these new functions and elements for the lightbox

let currentIndex = 0;

function openLightbox(index) {
    currentIndex = index;
    updateLightboxContent();
    document.getElementById('lightbox-modal').style.display = 'flex';
    document.getElementById('lightbox-modal').setAttribute('aria-hidden', 'false');
}

function closeLightbox() {
    document.getElementById('lightbox-modal').style.display = 'none';
    document.getElementById('lightbox-modal').setAttribute('aria-hidden', 'true');
}

function nextImage() {
    currentIndex = (currentIndex + 1) % pictures.length;
    updateLightboxContent();
}

function prevImage() {
    currentIndex = (currentIndex - 1 + pictures.length) % pictures.length;
    updateLightboxContent();
}

function updateLightboxContent() {
    const picture = pictures[currentIndex];
    const lightboxContent = document.getElementById('lightbox-content');
    const fileName = picture.video || picture.image;
    const fileExtension = fileName.split('.').pop().toLowerCase();
    const typeMedia = ['mp4'].includes(fileExtension) ? "VIDEO" : "IMAGE";

    if (typeMedia === "VIDEO") {
        lightboxContent.innerHTML = `
            <video controls aria-label="${picture.title}">
                <source src="src/assets/images/${photographId}/${fileName}" type="video/${fileExtension}">
            </video>
        `;
    } else {
        lightboxContent.innerHTML = `
            <img src="src/assets/images/${photographId}/${fileName}" alt="${picture.title}">
        `;
    }
    document.getElementById('lightbox-title').textContent = picture.title;
}

// Add this HTML structure at the end of your existing HTML body
const lightboxHTML = `
    <div id="lightbox-modal" class="lightbox-modal" role="dialog" aria-hidden="true" aria-labelledby="lightbox-title">
        <button class="close-button" onclick="closeLightbox()" aria-label="Close lightbox">&times;</button>
        <button class="prev-button" onclick="prevImage()" aria-label="Previous image">&#10094;</button>
        <div class="lightbox-content-wrapper">
            <div id="lightbox-content"></div>
            <p id="lightbox-title"></p>
        </div>
        <button class="next-button" onclick="nextImage()" aria-label="Next image">&#10095;</button>
    </div>
`;

document.body.insertAdjacentHTML('beforeend', lightboxHTML);

document.addEventListener("DOMContentLoaded", function() {
    const lightboxModal = document.getElementById('lightbox');
    console.log(lightboxModal)
    const lightboxContent = document.getElementById('lightbox-content');
    console.log(lightboxContent)
    const lightboxTitle = document.getElementById('lightbox-title');
    console.log(lightboxTitle)
    const triggers = document.querySelectorAll('.lightbox-trigger');
    console.log(triggers)
    const closeButton = document.getElementById('lightbox-close');
    console.log(closeButton)
    const prevButton = document.getElementById('lightbox-prev');
    console.log(prevButton)
    const nextButton = document.getElementById('lightbox-next');
    console.log(nextButton)
    let currentIndex = 0;
    console.log(currentIndex)
});

// Add the CSS to the document
const styleElement = document.createElement('style');
styleElement.textContent = lightboxCSS;
document.head.appendChild(styleElement);

