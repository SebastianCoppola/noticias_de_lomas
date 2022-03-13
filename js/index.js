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


//A QUE NOTA VOY
const $noticia = document.querySelectorAll(".noti");
// iteras y entregas el índice como argumento
$noticia.forEach((noticia, index) => {
    // asignas a cada instancia de tu lista el evento
    noticia.addEventListener("click", function (e) {
        // aquí manipulas el índice del elemento en el arreglo
        localStorage.setItem("noticias",index+1);
    });
});


//A QUE SECCION VOY NAV
const $seccionNav = document.querySelectorAll(".seccion-nav");
// iteras y entregas el índice como argumento
$seccionNav.forEach((seccionNav, index) => {
    // asignas a cada instancia de tu lista el evento
    seccionNav.addEventListener("click", function (e) {
        // aquí manipulas el índice del elemento en el arreglo
        if(index==0){
            localStorage.setItem("seccion","Sociedad");
        } else if(index==1){
            localStorage.setItem("seccion","Política");
        } else if(index==2){
            localStorage.setItem("seccion","Deportes");
        } else if(index==3){
            localStorage.setItem("seccion","Gastronomía");
        } else if(index==4){
            localStorage.setItem("seccion","Cultura");
        } else if(index==5){
            localStorage.setItem("seccion","Opinión");
        } else if(index==6){
            localStorage.setItem("seccion","Historia Regional");
        }
    });
});
//A QUE SECCION VOY FOOTER
const $seccionFoot = document.querySelectorAll(".seccion-footer");
// iteras y entregas el índice como argumento
$seccionFoot.forEach((seccionFoot, index) => {
    // asignas a cada instancia de tu lista el evento
    seccionFoot.addEventListener("click", function (e) {
        // aquí manipulas el índice del elemento en el arreglo
        if(index==0){
            localStorage.setItem("seccion","Sociedad");
        } else if(index==1){
            localStorage.setItem("seccion","Política");
        } else if(index==2){
            localStorage.setItem("seccion","Deportes");
        } else if(index==3){
            localStorage.setItem("seccion","Gastronomía");
        } else if(index==4){
            localStorage.setItem("seccion","Cultura");
        } else if(index==5){
            localStorage.setItem("seccion","Opinión");
        } else if(index==6){
            localStorage.setItem("seccion","Historia Regional");
        }
    });
});
