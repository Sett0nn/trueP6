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

// const photographId = 243
const params = new URLSearchParams(window.location.search);
const photographId = parseInt(params.get('photographerId'));


const data = {
    "photographers": [
        {
            "name": "Mimi Keel",
            "id": 243,
            "city": "London",
            "country": "UK",
            "tagline": "Voir le beau dans le quotidien",
            "price": 400,
            "portrait": "src/assets/photographers/mimi_keel.png",
            "altname" : "Selfie of Mimi Keel, Photographer from London, UK"
        },
        {
            "name": "Ellie-Rose Wilkens",
            "id": 930,
            "city": "Paris",
            "country": "France",
            "tagline": "Capturer des compositions complexes",
            "price": 250,
            "portrait": "src/assets/photographers/Ellie.png",
            "altname" : "Selfie of Ellie-Rose Wilkens, Photographer from Paris, France"
        },
        {
            "name": "Tracy Galindo",
            "id": 82,
            "city": "Montreal",
            "country": "Canada",
            "tagline": "Photographe freelance",
            "price": 500,
            "portrait": "src/assets/photographers/Tracy.png",
            "altname" : "Selfie of Tracy Galindo, Photographer from Montreal, Canada"
        },
        {
            "name": "Nabeel Bradford",
            "id": 527,
            "city": "Mexico City",
            "country": "Mexico",
            "tagline": "Toujours aller de l'avant",
            "price": 350,
            "portrait": "src/assets/photographers/Nabeel.png",
            "altname" : "Selfie of Nabeel Bradford, Photographer from Mexico City, Mexico"
        },
        {
            "name": "Rhode Dubois",
            "id": 925,
            "city": "Barcelona",
            "country": "Spain",
            "tagline": "Je crée des souvenirs",
            "price": 275,
            "portrait": "src/assets/photographers/Rhode.png",
            "altname" : "Selfie of Tracy Galindo, Photographer from Montreal, Canada"
        },
        {
            "name": "Marcel Nikolic",
            "id": 195,
            "city": "Berlin",
            "country": "Germany",
            "tagline": "Toujours à la recherche de LA photo",
            "price": 300,
            "portrait": "src/assets/photographers/Marcel.png",
        }
    ],
    "media": [
        {
            "id": 342550,
            "photographerId": 82,
            "title": "Fashion Yellow Beach",
            "image": "Fashion_Yellow_Beach.jpg",
            "likes": 62,
            "date": "2011-12-08",
            "price": 55
        },
        {
            "id": 8520927,
            "photographerId": 82,
            "title": "Fashion Urban Jungle",
            "image": "Fashion_Urban_Jungle.jpg",
            "likes": 11,
            "date": "2011-11-06",
            "price": 55
        },
        {
            "id": 9025895,
            "photographerId": 82,
            "title": "Fashion Pattern on a Pattern",
            "image": "Fashion_Pattern_on_Pattern.jpg",
            "likes": 72,
            "date": "2013-08-12",
            "price": 55
        },
        {
            "id": 9275938,
            "photographerId": 82,
            "title": "Wedding Gazebo",
            "image": "Event_WeddingGazebo.jpg",
            "likes": 69,
            "date": "2018-02-22",
            "price": 55
        },
        {
            "id": 2053494,
            "photographerId": 82,
            "title": "Sparkles",
            "image": "Event_Sparklers.jpg",
            "likes": 2,
            "date": "2020-05-25",
            "price": 55
        },
        {
            "id": 7324238,
            "photographerId": 82,
            "title": "18th Anniversary",
            "image": "Event_18thAnniversary.jpg",
            "likes": 33,
            "date": "2019-06-12",
            "price": 55
        },
        {
            "id": 8328953,
            "photographerId": 82,
            "title": "Wooden sculpture of a horse",
            "video": "Art_Wooden_Horse_Sculpture.mp4",
            "likes": 24,
            "date": "2011-12-08",
            "price": 100
        },
        {
            "id": 7502053,
            "photographerId": 82,
            "title": "Triangle Man",
            "image": "Art_Triangle_Man.jpg",
            "likes": 88,
            "date": "2007-05-07",
            "price": 55
        },
        {
            "id": 8523492,
            "photographerId": 82,
            "title": "Purple Tunnel",
            "image": "Art_Purple_light.jpg",
            "likes": 24,
            "date": "2018-05-05",
            "price": 55
        },
        {
            "id": 75902334,
            "photographerId": 82,
            "title": "Art Mine",
            "image": "Art_Mine.jpg",
            "likes": 75,
            "date": "2019-11-25",
            "price": 55
        },

        {
            "id": 73852953,
            "photographerId": 925,
            "title": "8 Rows",
            "image": "Sport_2000_with_8.jpg",
            "likes": 52,
            "date": "2013-02-30",
            "price": 70
        },
        {
            "id": 92758372,
            "photographerId": 925,
            "title": "Fashion Wings",
            "image": "Fashion_Wings.jpg",
            "likes": 58,
            "date": "2018-07-17",
            "price": 70
        },
        {
            "id": 32958383,
            "photographerId": 925,
            "title": "Melody Red on Stripes",
            "image": "Fashion_Melody_Red_on_Stripes.jpg",
            "likes": 11,
            "date": "2019-08-12",
            "price": 70
        },
        {
            "id": 928587383,
            "photographerId": 925,
            "title": "Venture Conference",
            "image": "Event_VentureConference.jpg",
            "likes": 2,
            "date": "2019-01-02",
            "price": 70
        },
        {
            "id": 725639493,
            "photographerId": 925,
            "title": "Product Pitch",
            "image": "Event_ProductPitch.jpg",
            "likes": 3,
            "date": "2019-05-20",
            "price": 70
        },
        {
            "id": 23394384,
            "photographerId": 925,
            "title": "Musical Festival Keyboard",
            "image": "Event_KeyboardCheck.jpg",
            "likes": 52,
            "date": "2019-07-18",
            "price": 70
        },
        {
            "id": 87367293,
            "photographerId": 925,
            "title": "Musical Festival Singer",
            "image": "Event_Emcee.jpg",
            "likes": 23,
            "date": "2018-02-22",
            "price": 70
        },
        {
            "id": 593834784,
            "photographerId": 925,
            "title": "Animal Majesty",
            "image": "Animals_Majesty.jpg",
            "likes": 52,
            "date": "2017-03-13",
            "price": 70
        },
        {
            "id": 83958935,
            "photographerId": 925,
            "title": "Cute puppy on sunset",
            "video": "Animals_Puppiness.mp4",
            "likes": 52,
            "date": "2016-06-12",
            "price": 70
        },
        {
            "id": 394583434,
            "photographerId": 527,
            "title": "Rocky mountains from the air",
            "video": "Travel_Rock_Mountains.mp4",
            "likes": 23,
            "date": "2017-03-18",
            "price": 45
        },
        {
            "id": 343423425,
            "photographerId": 527,
            "title": "Outdoor Baths",
            "image": "Travel_Outdoor_Baths.jpg",
            "likes": 101,
            "date": "2017-04-03",
            "price": 45
        },
        {
            "id": 73434243,
            "photographerId": 527,
            "title": "Road into the Hill",
            "image": "Travel_Road_into_Hill.jpg",
            "likes": 99,
            "date": "2018-04-30",
            "price": 45
        },
        {
            "id": 23425523,
            "photographerId": 527,
            "title": "Bridge into the Forest",
            "image": "Travel_Bridge_into_Forest.jpg",
            "likes": 34,
            "date": "2016-04-05",
            "price": 45
        },
        {
            "id": 23134513,
            "photographerId": 527,
            "title": "Boat Wonderer",
            "image": "Travel_Boat_Wanderer.jpg",
            "likes": 23,
            "date": "2017-03-18",
            "price": 45
        },
        {
            "id": 92352352,
            "photographerId": 527,
            "title": "Portrait Sunkiss",
            "image": "Portrait_Sunkissed.jpg",
            "likes": 66,
            "date": "2018-05-24",
            "price": 45
        },
        {
            "id": 34513453,
            "photographerId": 527,
            "title": "Shaw Potrait",
            "image": "Portrait_Shaw.jpg",
            "likes": 52,
            "date": "2017-04-21",
            "price": 45
        },
        {
            "id": 23523533,
            "photographerId": 527,
            "title": "Alexandra",
            "image": "Portrait_Alexandra.jpg",
            "likes": 95,
            "date": "2018-11-02",
            "price": 45
        },
        {
            "id": 525834234,
            "photographerId": 527,
            "title": "Afternoon Break",
            "image": "Portrait_AfternoonBreak.jpg",
            "likes": 25,
            "date": "2019-01-02",
            "price": 45
        },

        {
            "id": 623534343,
            "photographerId": 243,
            "title": "Lonesome",
            "image": "Travel_Lonesome.jpg",
            "likes": 88,
            "date": "2019-02-03",
            "price": 45
        },
        {
            "id": 625025343,
            "photographerId": 243,
            "title": "Hillside Color",
            "image": "Travel_HillsideColor.jpg",
            "likes": 85,
            "date": "2019-04-03",
            "price": 45
        },
        {
            "id": 2525345343,
            "photographerId": 243,
            "title": "Wednesday Potrait",
            "image": "Portrait_Wednesday.jpg",
            "likes": 34,
            "date": "2019-04-07",
            "price": 45
        },
        {
            "id": 2523434634,
            "photographerId": 243,
            "title": "Nora Portrait",
            "image": "Portrait_Nora.jpg",
            "likes": 63,
            "date": "2019-04-07",
            "price": 45
        },
        {
            "id": 398847109,
            "photographerId": 243,
            "title": "Raw Black Portrait",
            "image": "Portrait_Background.jpg",
            "likes": 55,
            "date": "2019-06-20",
            "price": 45
        },
        {
            "id": 2534342,
            "photographerId": 243,
            "title": "Seaside Wedding",
            "image": "Event_SeasideWedding.jpg",
            "likes": 25,
            "date": "2019-06-21",
            "price": 45
        },
        {
            "id": 65235234,
            "photographerId": 243,
            "title": "Boulder Wedding",
            "image": "Event_PintoWedding.jpg",
            "likes": 52,
            "date": "2019-06-25",
            "price": 45
        },
        {
            "id": 23523434,
            "photographerId": 243,
            "title": "Benevides Wedding",
            "image": "Event_BenevidesWedding.jpg",
            "likes": 77,
            "date": "2019-06-28",
            "price": 45
        },
        {
            "id": 5234343,
            "photographerId": 243,
            "title": "Wild horses in the mountains",
            "video": "Animals_Wild_Horses_in_the_mountains.mp4",
            "likes": 142,
            "date": "2019-08-23",
            "price": 60
        },
        {
            "id": 95234343,
            "photographerId": 243,
            "title": "Rainbow Bird",
            "image": "Animals_Rainbow.jpg",
            "likes": 59,
            "date": "2019-07-02",
            "price": 60
        },

        {
            "id": 52343416,
            "photographerId": 195,
            "title": "Japanese Tower, Kyoto",
            "image": "Travel_Tower.jpg",
            "likes": 25,
            "date": "2019-04-03",
            "price": 60
        },
        {
            "id": 2523434,
            "photographerId": 195,
            "title": "Senset on Canals, Venice",
            "image": "Travel_SunsetonCanals.jpg",
            "likes": 53,
            "date": "2019-05-06",
            "price": 60
        },
        {
            "id": 95293534,
            "photographerId": 195,
            "title": "Mountain and Lake",
            "image": "Travel_OpenMountain.jpg",
            "likes": 33,
            "date": "2019-05-12",
            "price": 60
        },
        {
            "id": 356234343,
            "photographerId": 195,
            "title": "City Bike and Stair, Paris",
            "image": "Travel_Bike_and_Stair.jpg",
            "likes": 53,
            "date": "2019-06-20",
            "price": 60
        },
        {
            "id": 235234343,
            "photographerId": 195,
            "title": "Adventure Door, India",
            "image": "Travel_Adventure_Door.jpg",
            "likes": 63,
            "date": "2019-06-26",
            "price": 60
        },
        {
            "id": 6234234343,
            "photographerId": 195,
            "title": "Contrast, St Petersburg",
            "image": "Architecture_Contrast.jpg",
            "likes": 52,
            "date": "2019-06-30",
            "price": 60
        },
        {
            "id": 6525666253,
            "photographerId": 195,
            "title": "On a Hill, Tibet",
            "image": "Architecture_On_a_hill.jpg",
            "likes": 63,
            "date": "2019-07-20",
            "price": 60
        },
        {
            "id": 98252523433,
            "photographerId": 195,
            "title": "Leaning Tower, Pisa",
            "image": "Architecture_Dome.jpg",
            "likes": 88,
            "date": "2020-01-05",
            "price": 60
        },
        {
            "id": 9259398453,
            "photographerId": 195,
            "title": "Drone shot of Buenos Aires highways",
            "video": "Architecture_coverr_circle_empty_highway_in_buenos_aires_587740985637.mp4",
            "likes": 57,
            "date": "2020-01-20",
            "price": 65
        },
        {
            "id": 3523523534,
            "photographerId": 195,
            "title": "Corner Building and Blue Sky",
            "image": "Architecture_Corner_Room.jpg",
            "likes": 54,
            "date": "2020-05-05",
            "price": 60
        },
        {
            "id": 952343423,
            "photographerId": 930,
            "title": "Tricks in te air",
            "video": "Sport_Tricks_in_the_air.mp4",
            "likes": 150,
            "date": "2018-02-30",
            "price": 70
        },
        {
            "id": 235234343,
            "photographerId": 930,
            "title": "Climber",
            "image": "Sport_Next_Hold.jpg",
            "likes": 101,
            "date": "2018-03-05",
            "price": 65
        },
        {
            "id": 235343222,
            "photographerId": 930,
            "title": "Surfer",
            "image": "sport_water_tunnel.jpg",
            "likes": 103,
            "date": "2018-03-10",
            "price": 70
        },
        {
            "id": 7775342343,
            "photographerId": 930,
            "title": "Skier",
            "image": "Sport_Sky_Cross.jpg",
            "likes": 77,
            "date": "2018-04-16",
            "price": 50
        },
        {
            "id": 9253445784,
            "photographerId": 930,
            "title": "Race End",
            "image": "Sport_Race_End.jpg",
            "likes": 88,
            "date": "2018-04-22",
            "price": 65
        },
        {
            "id": 22299394,
            "photographerId": 930,
            "title": "Jump!",
            "image": "Sport_Jump.jpg",
            "likes": 95,
            "date": "2018-04-27",
            "price": 70
        },
        {
            "id": 3452342633,
            "photographerId": 930,
            "title": "White Light",
            "image": "Architecture_White_Light.jpg",
            "likes": 52,
            "date": "2018-05-03",
            "price": 75
        },
        {
            "id": 939234243,
            "photographerId": 930,
            "title": "Water on Modern Building",
            "image": "Architecture_Water_on_Modern.jpg",
            "likes": 55,
            "date": "2018-05-10",
            "price": 72
        },
        {
            "id": 222959233,
            "photographerId": 930,
            "title": "Horseshoe",
            "image": "Architecture_Horseshoe.jpg",
            "likes": 85,
            "date": "2018-05-15",
            "price": 71
        },
        {
            "id": 965933434,
            "photographerId": 930,
            "title": "Cross Bar",
            "image": "Architecture_Cross_Bar.jpg",
            "likes": 66,
            "date": "2018-05-20",
            "price": 58
        },
        {
            "id": 777723343,
            "photographerId": 930,
            "title": "Connected Curves",
            "image": "Architecture_Connected_Curves.jpg",
            "likes": 79,
            "date": "2018-05-21",
            "price": 80
        }
    ]
}


const card = document.createElement('div');
card.className = 'photographer-card';
console.log(card)


const photographInfo = data.photographers.find(element => element.id === photographId)
console.log(photographInfo)
console.log(photographId)



    const listElement = document.getElementById('photographers-banner')

    const ListImage = document.getElementById("photographers-image");


    const name = document.createElement('h2');
    console.log(photographInfo)
    name.textContent = photographInfo.name

    console.log(name.textContent)




    const img = document.createElement('img');
    img.src = photographInfo.portrait;
    img.alt = `Portrait de ${photographInfo.name}`;
    img.style.width = '280px';

    const city = document.createElement('div');
    city.textContent = photographInfo.city;
    city.className = 'city-photographer';

    const tagline = document.createElement('p');
    tagline.textContent = photographInfo.tagline;
    tagline.className = 'tagline-photographer';

    const price = document.createElement('p');
    price.textContent = `Prix: $${photographInfo.price}/jour`;
    price.className = 'price-photographer';

    listElement.appendChild(name);
    ListImage.appendChild(img);
    listElement.appendChild(city);
    listElement.appendChild(tagline);
    listElement.appendChild(price);



    // for (let i = 1; i <= 6; i++) {
    //     document.getElementById(`picture-${i}`).src = photographInfo.img[i - 1].url;
    //     document.getElementById(`counter-${i}-title`).textContent = photographInfo.img[i - 1].title;
    //
    // }


// on veut récuperer les photos des photograph
const pictures = data.media.filter(element =>  element.photographerId === photographId);
console.log(pictures)
const ImagePhoto = document.getElementById("container-photo");
const PhotoStyle = document.getElementById("photo-style");
console.log(PhotoStyle);
console.log(ImagePhoto);




pictures.forEach(picture => {
const containerPhoto = document.getElementById('container-photo');
const PictureContainer = document.createElement('div');
PictureContainer.className = 'picture-container';
    const PictureImage = document.createElement('img');
    const fileName = picture.video || picture.image
    PictureImage.src = "src/assets/images/"+photographId+"/"+ fileName;


    PictureImage.alt = picture.title;
    const pictureDetails = document.createElement('div');
    pictureDetails.className = 'picture-details';
    const detailTitle = document.createElement('div');
    detailTitle.textContent = picture.title;
    const detailLike= document.createElement('div');
     detailLike.textContent = '10 likes';


    const fileExtension = fileName.split('.').pop().toLowerCase();
    const typeMedia = ['mp4'].includes(fileExtension) ? "VIDEO" : "IMAGE";
  console.log(fileExtension)
    if (typeMedia === "VIDEO") {
        const pictureVideo = document.createElement('video');
        pictureVideo.className = 'picture-video';
        pictureVideo.controls = true;
        listElement.appendChild(pictureVideo);


        const sourceVideo = document.createElement('source');
        sourceVideo.src = "src/assets/images/" + photographId + "/" + fileName;
        sourceVideo.type = `video/${fileExtension}`;
        pictureVideo.appendChild(sourceVideo);

    } else if (typeMedia === "IMAGE") {
        const pictureImage = document.createElement('img');
        pictureImage.className = 'picture-image';
        pictureImage.src = "src/assets/images/" + photographId + "/" + fileName;
        pictureImage.alt = `Image de ${photographInfo.name}`;

    }




    // const pictureVideo = document.createElement('video');
    // pictureVideo.controls = true;
    // pictureVideo.muted = true;
    // pictureVideo.autoplay = true;
    // pictureVideo.loop = true;
    // pictureVideo.getElementById = 'picture-video';
    // const sourceVideo = document.createElement('source');
    // sourceVideo.src = "src/assets/images/"+photographId+"/"+ picture.video;
    // sourceVideo.type = 'video/mp4';
    //


    containerPhoto.appendChild(PictureContainer);
    PictureContainer.appendChild(PictureImage);
    PictureContainer.appendChild(pictureDetails);
    pictureDetails.appendChild(detailTitle);
    pictureDetails.appendChild(detailLike);








    const imgElement = document.createElement('img');
    imgElement.style.width = '280px';
    // imgElement.style.display = 'block';
    const pictureContainer = document.createElement('div');
console.log(pictureContainer)

    for (let i = 0; i < picture.length; i++) {
        const photos = document.createElement('img');
        photos.src =  picture.image;



    }
    imgElement.src = "src/assets/images/"+photographId+"/"+ picture.image;

    imgElement.alt = picture.title;


    ImagePhoto.appendChild(imgElement);
    pictureContainer.appendChild(imgElement);





});






// document.addEventListener("DOMContentLoaded", function() {
//     fetch("src/data/photographers.json")
//     .then(response => response.json())
//     .then(data => {
//         async function getPhotographerData() {
//             console.log("test");
//             try {
//                 const response = await fetch("src/data/photographers.json")
//                 console.log(response.json());
//                 return await response.json()
//             } catch (error) {
//                 console.log(error)
//             }
//         }
//     })
// })


//         function createPhotographers(getPhotographerData) {
//             const container = document.querySelector('#container');
//             console.log(container);
//
//             for (let i = 0; i < getPhotographerData.lenght; i++) {
//                 const photographer = getPhotographerData[i];
//                 console.log(photographer);
//
//                 const NameElement = document.createElement('fullname');
//                 NameElement.className = 'photographer-name';
//                 console.log(NameElement);
//
//                 const TownElement = document.creatElement("town");
//                 TownElement.className = 'photographerTown';
//                 console.log(TownElement);
//
//                 const QuoteElement = document.createElement('quote');
//                 QuoteElement.className = 'PhotographerQuote';
//                 console.log(QuoteElement);
//
//
//                 const TjmElement = document.createElement('div');
//                 TjmElement.className = 'photographerPrice';
//                 console.log(TjmElement);
//
//             }
//         }
//
//     })
// })
//
// console.log(createPhotographers);
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