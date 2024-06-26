import '../css/main.css';
import '../css/scheme.css';

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

/*El disparo de los eventos alterara la variable current permitiendonos acceder a otro id de video*/
bNext.addEventListener('click', (e)=>{
    current = current >= videos.length - 1 ? current = 0 : current += 1;/*Comparacion y asignación*/

    renderCurrentVideo(videos[current].id);
    console.log(current);
});

bPrev.addEventListener('click', (e)=>{
    current = current <= 0 ? videos.length - 1 : current -= 1;/*Comparacion y asignación*/

    renderCurrentVideo(videos[current].id);
    console.log(current);
});

/*Ejecutando la funcion para la primera vez que se ejecute la pagina*/
renderCurrentVideo(videos[current].id);
renderVideos();

function renderCurrentVideo (id){
    currentContainer.innerHTML = `<iframe width="100%" height="720" src="https://www.youtube.com/embed/${id}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
}

function renderVideos() {
    //Map por cada objeto en la lista videos crea una estructura html retornandome
    //un array.
    const htmls = videos.map((video, index) => {
        return `<div class="item">
        <a href="#" data-id="${index}">
            <img src="http://i3.ytimg.com/vi/${video.id}/hqdefault.jpg" />
        </a>
        </div>`;
    });

    videosContainer.innerHTML = htmls.join('');/*Uniendo los elementos html en uno solo sin separador*/
    document.querySelectorAll(".item a").forEach(item => {
        item.addEventListener('click', e => {
            e.preventDefault();
            const id = +item.getAttribute('data-id');
            current = id;
            console.log(typeof id);
            renderCurrentVideo(videos[current].id);
        });
    })
}