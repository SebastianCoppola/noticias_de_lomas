const menu = document.querySelector('.menu');
const logoEnNav = document.querySelector('.logo-en-nav');


window.addEventListener('scroll', function(){

    menu.classList.toggle('active',window.scrollY >195);
    logoEnNav.classList.toggle('active',window.scrollY>195)
})

