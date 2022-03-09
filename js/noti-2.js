const menu = document.querySelector('.menu');
const logoEnNav = document.querySelector('.logo-en-nav');


window.addEventListener('scroll', function(){

    menu.classList.toggle('active',window.scrollY >195);
    logoEnNav.classList.toggle('active',window.scrollY>195)
})

const seccion = document.querySelector(".seccion");
const titulo = document.querySelector(".titulo");
const subtitulo = document.querySelector(".subtitulo");
const autor = document.querySelector(".autor");
const parrafo1 = document.querySelector(".parrafo1");
const parrafo2 = document.querySelector(".parrafo2");
const parrafo3 = document.querySelector(".parrafo3");
const parrafo4 = document.querySelector(".parrafo4");
const parrafo5 = document.querySelector(".parrafo5");
const parrafo6 = document.querySelector(".parrafo6");
const parrafo7 = document.querySelector(".parrafo7");
const parrafo8 = document.querySelector(".parrafo8");
const parrafo9 = document.querySelector(".parrafo9");
const parrafo10 = document.querySelector(".parrafo10");
const parrafo11 = document.querySelector(".parrafo11");
const parrafo12 = document.querySelector(".parrafo12");
const parrafo13 = document.querySelector(".parrafo13");
const parrafo14 = document.querySelector(".parrafo14");
const parrafo15 = document.querySelector(".parrafo15");
const parrafo16 = document.querySelector(".parrafo16");
const parrafo17 = document.querySelector(".parrafo17");
const parrafo18 = document.querySelector(".parrafo18");
const parrafo19 = document.querySelector(".parrafo19");
const parrafo20 = document.querySelector(".parrafo20");



fetch('./noticias/nota-2.json')
    .then(res => res.json())
    .then(res => {
        seccion.innerHTML = res.seccion
        titulo.innerHTML = res.titulo
        subtitulo.innerHTML = res.subtitulo
        autor.innerHTML = res.autor
        parrafo1.innerHTML = res.parrafo1
        parrafo2.innerHTML = res.parrafo2
        parrafo3.innerHTML = res.parrafo3
        parrafo4.innerHTML = res.parrafo4
        parrafo5.innerHTML = res.parrafo5
        parrafo6.innerHTML = res.parrafo6
        parrafo7.innerHTML = res.parrafo7
        parrafo8.innerHTML = res.parrafo8
        parrafo9.innerHTML = res.parrafo9
        parrafo10.innerHTML = res.parrafo10
        parrafo11.innerHTML = res.parrafo11
        parrafo12.innerHTML = res.parrafo12
        parrafo13.innerHTML = res.parrafo13
        parrafo14.innerHTML = res.parrafo14
        parrafo15.innerHTML = res.parrafo15
        parrafo16.innerHTML = res.parrafo16
        parrafo17.innerHTML = res.parrafo17
        parrafo18.innerHTML = res.parrafo18
        parrafo19.innerHTML = res.parrafo19
    })





