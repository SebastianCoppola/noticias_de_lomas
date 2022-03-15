//FILE EXISTS
function checkFileExist(urlToFile){
    var xhr = new XMLHttpRequest();
    xhr.open('HEAD',urlToFile,false);
    /*xhr.send();*/

    if(xhr.status == "404"){
        return false;
    } else {
        return true;
    }
}


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

//CARGAR NOTA
const seccion = document.querySelector(".seccion");
const titulo = document.querySelector(".titulo");
const subtitulo = document.querySelector(".subtitulo");
const autor = document.querySelector(".autor");
const imga = document.querySelector(".imga");
const epigrafea = document.querySelector(".epigrafea")
const parrafo1 = document.querySelector(".parrafo1");
const parrafo2 = document.querySelector(".parrafo2");
const parrafo3 = document.querySelector(".parrafo3");
const parrafo4 = document.querySelector(".parrafo4");
const parrafo5 = document.querySelector(".parrafo5");
const imgb = document.querySelector(".imgb");
const epigrafeb = document.querySelector(".epigrafeb")
const parrafo6 = document.querySelector(".parrafo6");
const parrafo7 = document.querySelector(".parrafo7");
const parrafo8 = document.querySelector(".parrafo8");
const parrafo9 = document.querySelector(".parrafo9");
const parrafo10 = document.querySelector(".parrafo10");
const imgc = document.querySelector(".imgc");
const epigrafec = document.querySelector(".epigrafec")
const parrafo11 = document.querySelector(".parrafo11");
const parrafo12 = document.querySelector(".parrafo12");
const parrafo13 = document.querySelector(".parrafo13");
const parrafo14 = document.querySelector(".parrafo14");
const parrafo15 = document.querySelector(".parrafo15");
const imgd = document.querySelector(".imgd");
const epigrafed = document.querySelector(".epigrafed")
const parrafo16 = document.querySelector(".parrafo16");
const parrafo17 = document.querySelector(".parrafo17");
const parrafo18 = document.querySelector(".parrafo18");
const parrafo19 = document.querySelector(".parrafo19");
const parrafo20 = document.querySelector(".parrafo20");
const parrafo21 = document.querySelector(".parrafo21");
const parrafo22 = document.querySelector(".parrafo22");
const parrafo23 = document.querySelector(".parrafo23");
const parrafo24 = document.querySelector(".parrafo24");
const parrafo25 = document.querySelector(".parrafo25");
const parrafo26 = document.querySelector(".parrafo26");
const parrafo27 = document.querySelector(".parrafo27");
const parrafo28 = document.querySelector(".parrafo28");
const parrafo29 = document.querySelector(".parrafo29");
const parrafo30 = document.querySelector(".parrafo30");

const index = localStorage.noticias;
fetch(`./noticias/nota-${index}.json`)
    .then(res => res.json())
    .then(res => {
        seccion.innerHTML = res.seccion
        titulo.innerHTML = res.titulo
        subtitulo.innerHTML = res.subtitulo
        autor.innerHTML = res.autor
        imga.innerHTML = res.imga
        epigrafea.innerHTML = res.epigrafea
        parrafo1.innerHTML = res.parrafo1
        parrafo2.innerHTML = res.parrafo2
        parrafo3.innerHTML = res.parrafo3
        parrafo4.innerHTML = res.parrafo4
        parrafo5.innerHTML = res.parrafo5
        imgb.innerHTML = res.imgb
        epigrafeb.innerHTML = res.epigrafeb
        parrafo6.innerHTML = res.parrafo6
        parrafo7.innerHTML = res.parrafo7
        parrafo8.innerHTML = res.parrafo8
        parrafo9.innerHTML = res.parrafo9
        parrafo10.innerHTML = res.parrafo10
        imgc.innerHTML = res.imgc
        epigrafec.innerHTML = res.epigrafec
        parrafo11.innerHTML = res.parrafo11
        parrafo12.innerHTML = res.parrafo12
        parrafo13.innerHTML = res.parrafo13
        parrafo14.innerHTML = res.parrafo14
        parrafo15.innerHTML = res.parrafo15
        imgd.innerHTML = res.imgd
        epigrafed.innerHTML = res.epigrafed
        parrafo16.innerHTML = res.parrafo16
        parrafo17.innerHTML = res.parrafo17
        parrafo18.innerHTML = res.parrafo18
        parrafo19.innerHTML = res.parrafo19
        parrafo20.innerHTML = res.parrafo20
        parrafo21.innerHTML = res.parrafo21
        parrafo22.innerHTML = res.parrafo22
        parrafo23.innerHTML = res.parrafo23
        parrafo24.innerHTML = res.parrafo24
        parrafo25.innerHTML = res.parrafo25
        parrafo26.innerHTML = res.parrafo26
        parrafo27.innerHTML = res.parrafo27
        parrafo28.innerHTML = res.parrafo28
        parrafo29.innerHTML = res.parrafo29
        parrafo30.innerHTML = res.parrafo30
    })


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



