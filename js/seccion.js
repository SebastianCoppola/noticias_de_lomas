// MENU SCROLL
const menu = document.querySelector('.menu');
const logoEnNav = document.querySelector('.logo-en-nav');

window.addEventListener('scroll', function(){
    menu.classList.toggle('active',window.scrollY >200);
    logoEnNav.classList.toggle('active',window.scrollY>200)
})

//CARGAR FECHA
const fecha = document.querySelector(".fecha");
fetch('./fecha/fecha.json')
    .then(res => res.json())
    .then(res => {
        fecha.innerHTML = res.fecha;
    });

//SECCION
const seccionActual = localStorage.seccion;

//CARGAR NOTAS
const noticias = document.querySelector(".noticias")
const cantidadDeNotas = localStorage.cantidadDeNotas;

for( n=1 ; n <= cantidadDeNotas ; n++) {
    fetch(`noticias/nota-${n}.json`)
        .then(res => res.json())
        .then(res => {
            if(res.seccion == seccionActual){
                const caja = document.createElement("div");
                caja.setAttribute("class","noti");
                caja.setAttribute("id",res.notaNumero);
                noticias.appendChild(caja); 
                    caja.innerHTML = 
                    `<a href="noticia.html">
                        <div class="noti-img">${res.imga}</div>
                        <h2 class="titulo">${res.titulo}</h2>
                        <h3 class="subtitulo">${res.subtitulo}</h3>
                    </a>`;
            }
        })
}

//A QUE NOTA VOY
setTimeout(function(){
    const $notas = document.querySelectorAll(".noti");
    $notas.forEach((noticia) => {
        // asignas a cada instancia de tu lista el evento
        noticia.addEventListener("click", function (e) {
            // aquí manipulas el índice del elemento en el arreglo
            localStorage.setItem("noticias",noticia.id);
        })
    });
}, 1000);

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