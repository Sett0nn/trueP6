
console.log(window.photographers);
// let currentphotographerId;

let currentPicture;

let images = [];

 console.log(window.photographers)
let currentIndex = 0;

function loadImages() {
    const carousel = document.querySelector('img');
    window.photographers.forEach((data, index) => {
        const imgElement = document.createElement('img');
        imgElement.src = data.src;
        imgElement.alt = data.alt;
        imgElement.classList.add('carousel-image');
        if (index === 0) {
            imgElement.classList.add('active');

        }
        carousel.appendChild(imgElement);
    })
}
console.log(loadImages);

function showImage(index) {
  const imgElements = document.querySelectorAll('.carousel img');
  imgElements.forEach((img, i) => {
      img.classList.remove('active');
      if (i === index) {
          img.classList.add('active');
      }
  });
}
console.log(showImage);
function changeImage(direction) {
    currentIndex = currentIndex += direction;

}

function openModal() {
    document.querySelector('overlay').style.display = 'block';
    document.querySelector('.modal').classList.remove('modal--open');
}


const carouselModal = document.getElementsByClassName('carouselModal')[0];
carouselModal.className = 'carouselModal';
const carouselContents = document.createElement('carousel-content');
carouselContents.className = 'carousel-content';
const close = document.createElement('close');
close.className = 'close'
close.textContent = 'x';
let arrow = document.createElement('div');
arrow.className = 'arrow';
arrow.textContent = '<';
const carouselImage = document.createElement('img');
carouselImage.className = 'carousselImage';
carouselImage.alt = "carousel image";
let arrowReverse = document.createElement('div');
arrowReverse.className = 'arrow-reverse';
arrowReverse.textContent = ">";



window

function ImageShown (index) {
    currentPicture = images[index];
    carouselImage.src =  "src/assets/images/"+currentphotographerId + "/"+ currentPicture.image;
    currentIndex = index;
    }


function showPreviousImage() {
    currentIndex = (currentIndex > 0) ? currentIndex -1 : images.length - 1;
    ImageShown(currentIndex);
}

function showNextImage() {
    currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0;
    ImageShown(currentIndex);
}

arrow.addEventListener('click', showPreviousImage);
arrowReverse.addEventListener('click', showNextImage);


carouselContents.appendChild(arrow);
carouselContents.appendChild(close);
carouselModal.appendChild(carouselContents);


carouselContents.appendChild(carouselImage);

carouselContents.appendChild(arrowReverse);




window.addEventListener('pictureClicked', (event) => {
    const {
        photographerId,
        picture
    } = event.detail;
    carouselImage.src =  "src/assets/images/"+photographerId + "/"+ picture.image;
currentphotographerId = photographerId;
currentPicture = picture;
images = window.photographers.media.filter(data => data.photographerId === photographerId);
currentIndex = images.indexOf(picture);
console.log("test")
});





