const navSlide = () => {
const burger = document.querySelector('.burger');
const nav = document.querySelector('.navLinks');
const navLinks = document.querySelectorAll('.navLinks li');
//toggle nav
burger.addEventListener('click', ()=> {
    nav.classList.toggle('nav-active');
});
//animera länkar
navLinks.forEach((link, index) => {
    link.style.animation = `navLinkFade 0.5 ese forwards ${index / 5}s`;
    console.log(index /5);
})
}

navSlide();