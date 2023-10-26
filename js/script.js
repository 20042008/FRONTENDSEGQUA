
const album = document.getElementById('albumFotos');
const casamentos = document.getElementById('casamentos');
const buffer = document.getElementById('buffet');

// ters constantes para referenciar as "iframes do projeto"
const movieAlbum = document.querySelector('.movieAlbum');
const movieCasamentos = document.querySelector('.movieCasamentos');
const movieBuffet = document.querySelector('.movieBuffet');

// album classlist.toggle()''


// evento de click
album.addEventListener('click', () => {
    album.classList.toggle('active');
    movieAlbum.classList.toggle('active');
});
casamentos.addEventListener('click', () =>{
    casamentos.classList.toggle('active');
    movieCasamentos.classList.toggle('active');
});
 buffet.addEventListener('click', () =>{
    buffet.classList.toggle('active');
    movieBuffet.classList.toggle('active');

})












































/* / tres constantes para referenciar as "ITEM" divs Projetos
const form = document.getElementById('form');  
// "const" = Escopo Global - boa pratica é "declar" variavel
const site = document.getElementById('site');
const port = document.getElementById('port');
const movieform = document.querySelector('.movieform');
const moviesite = document.querySelector('.moviesite');
const movieport = document.querySelector('.movieport');


// evento de click
form.addEventListener("click",() => {
    form.classList.toggle('active');
    movieform.classList.toggle('active');
});
site.addEventListener("click",() => {
    site.classList.toggle('active');
    moviesite.classList.toggle('active');
});
port.addEventListener("click",() => {
    port.classList.toggle('active');
    movieport.classList.toggle('active');
});

*/