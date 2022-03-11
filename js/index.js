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

//CARGAR AUTOR NOTA 1


//CARGAR NOTAS
for(n = 1; n < 20; n++) {
    
    const seccion = document.querySelector(`.seccion-${n}`);
    const titulo = document.querySelector(`.titulo-${n}`);
    const subtitulo = document.querySelector(`.subtitulo-${n}`);
    const autor = document.querySelector(`.autor-${n}`);
    
    fetch(`./noticias/nota-${n}.json`)
        .then(res => res.json())
        .then(res => {
            seccion.innerHTML = res.seccion
            titulo.innerHTML = res.titulo
            subtitulo.innerHTML = res.subtitulo
            autor.innerHTML = res.autor
        });
}


