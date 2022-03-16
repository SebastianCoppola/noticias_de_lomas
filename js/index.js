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


//CARGAR NOTAS
const noticias = document.querySelector(".noticias")
//CHEQUEAR CANTIDAD DE NOTAS
var req = new XMLHttpRequest(); 
req.onload = function() {
    const contarPhp = this.responseText; 
    //CARGAR NOTAS
    for( n=1 ; n <= contarPhp ; n++) {
        fetch(`noticias/nota-${n}.json`)
            .then(res => res.json())
            .then(res => {
                    var caja = document.querySelector(`.noti-${res.notaNumero}`) 
                    caja.setAttribute("id",res.notaNumero);
                        caja.innerHTML = 
                        `<a href="noticia.html">
                            <div class="noti-img">
                                <img src="noticias/nota-${res.notaNumero}-cover.jpg" class="">
                                <h4 class="seccion-2">${res.seccion}</h4>
                            </div>
                            <div class="noti-texto">
                                <h2 class="titulo-2">${res.titulo}</h2>
                                <h3 class="subtitulo-2">${res.subtitulo}</h3>
                            </div>
                        </a>`;
            })
    }
};
req.open("get", "contar.php", true); 
req.send();

//A QUE NOTA VOY
setTimeout(function(){
    const $notas = document.querySelectorAll(".noti");
    //Almaceno CANTIDAD DE NOTAS
    localStorage.setItem("cantidadDeNotas",$notas.length)
    //Elimino notas vacias
    for ( h = 0 ; h < $notas.length ; h++){
        if(($notas[h].innerHTML) == ""){
            $notas[h].style.display="none";
        }
    }
    //Activo links a cada nota
    $notas.forEach((noticia) => {
        noticia.addEventListener("click", function (e) {
            localStorage.setItem("noticias",noticia.id);
        })
    });
}, 1000);

//A QUE SECCION VOY NAV
const seccionNav = document.querySelectorAll(".seccion-nav");
// iteras y entregas el índice como argumento
seccionNav.forEach((seccionNav, index) => {
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
const seccionFoot = document.querySelectorAll(".seccion-footer");
// iteras y entregas el índice como argumento
seccionFoot.forEach((seccionFoot, index) => {
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
