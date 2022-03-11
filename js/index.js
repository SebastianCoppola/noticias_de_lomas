// MENU SCROLL
const menu = document.querySelector('.menu');
const logoEnNav = document.querySelector('.logo-en-nav');

window.addEventListener('scroll', function(){
    menu.classList.toggle('active',window.scrollY >200);
    logoEnNav.classList.toggle('active',window.scrollY>200)
});

//CARGAR FECHA
const fecha = document.querySelector(".fecha");
fetch('./fecha/fecha.json')
    .then(res => res.json())
    .then(res => {
        fecha.innerHTML = res.fecha;
    });

// NOTA-1
var seccion1 = document.querySelector(".seccion-1");
var titulo1 = document.querySelector(".titulo-1");
var subtitulo1 = document.querySelector(".subtitulo-1");
var autor1 = document.querySelector(".autor-1");
fetch('./noticias/nota-1.json')
    .then(res => res.json())
    .then(res => {
        seccion1.innerHTML = res.seccion
        titulo1.innerHTML = res.titulo
        subtitulo1.innerHTML = res.subtitulo
        autor1.innerHTML = res.autor
    });

// NOTA-2
const seccion2 = document.querySelector(".seccion-2");
const titulo2 = document.querySelector(".titulo-2");
const subtitulo2 = document.querySelector(".subtitulo-2");
fetch('./noticias/nota-2.json')
    .then(res => res.json())
    .then(res => {
        seccion2.innerHTML = res.seccion
        titulo2.innerHTML = res.titulo
        subtitulo2.innerHTML = res.subtitulo
        autor2.innerHTML = res.autor
    });



