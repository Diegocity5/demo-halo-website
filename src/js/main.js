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