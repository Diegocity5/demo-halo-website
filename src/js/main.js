const bShowMobileLinks = document.querySelector('#bmenu');
const mobileMenu = document.querySelector('.links');
const moreOptions = document.querySelector('#bmore');
const moreMenu = document.querySelector(".more .menu");

bShowMobileLinks.addEventListener('click', (e)=>{
    e.preventDefault();
    mobileMenu.classList.toggle("show");
});

moreOptions.addEventListener('click', function(e){
    e.preventDefault();
    moreMenu.classList.toggle("show");
});

/*Lista de objetos con ids de videos de halo teniendo cuenta
que la estructura básica de la URL de un video en YouTube es la siguiente:
https://www.youtube.com/watch?v=VIDEO_ID
donde VIDEO_ID es el identificador único del video en YouTube*/

const videos = [
    {
        id: "PyMlV5_HRWk",
    },
    {
        id: "XCbMVbeKlCg",
    },
    {
        id: "Fmdb-KmlzD8",
    },
    {
        id: "lOthvD1rMbQ",
    },
    {
        id: "nXDk86lQhto"
    }
];

const sliderContainer = document.querySelector('#slider');
const currentContainer = document.querySelector('#current');
const videosContainer = document.querySelector('#videos-container');
const bNext = document.querySelector('.next');
const bPrev = document.querySelector('.prev');
let current = 0;/*Nuestro contador inicia en la diapositiva cero*/


renderCurrentVideo(videos[current].id);

function renderCurrentVideo (id){
    currentContainer.innerHTML = `<iframe width="100%" height="720" src="https://www.youtube.com/embed/${id}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
}
