window.photographers




 console.log(window.photographers)
let currentIndex = 0;

function loadImages() {
    const carousel = document.querySelector('img');
    data.forEach((data, index) => {
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

function showImage(index) {
  const imgElements = document.querySelectorAll('.carousel img');
  imgElements.forEach((img, i) => {
      img.classList.remove('active');
      if (i === index) {
          img.classList.add('active');
      }
  });
}

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
const arrow = document.createElement('div');
arrow.className = 'arrow';
arrow.textContent = '<';
const carouselImage = document.createElement('img');
carouselImage.className = 'carousselImage';
carouselImage.alt = "carousel image";
const arrowReverse = document.createElement('div');
arrowReverse.className = 'arrow';
arrowReverse.textContent = ">";




carouselContents.appendChild(arrow);
carouselModal.appendChild(close);
carouselModal.appendChild(carouselContents);


carouselContents.appendChild(carouselImage);

carouselContents.appendChild(arrowReverse);



window.addEventListener('pictureClicked', (event) => {
    const {
        photographerId,
        picture
    } = event.detail;
    carouselImage.src =  "src/assets/images/"+photographerId + "/"+ picture.image;

    console.log(event.detail.picture)
console.log("test")
});

