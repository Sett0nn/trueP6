




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

