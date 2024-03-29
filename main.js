const menuEmail= document.querySelector('.navbar-email');
const desktopMenu= document.querySelector('.desktop-menu');
const menuResponsive= document.querySelector('.mobile-menu');
const hamburguerMenu= document.querySelector('.menu');

menuEmail.addEventListener('click',stateDesktopMenu);
hamburguerMenu.addEventListener('click', stateMenuResponsive);

function stateDesktopMenu () {

    desktopMenu.classList.toggle('inactive')

}

function stateMenuResponsive () {

    menuResponsive.classList.toggle('inactive')
}

