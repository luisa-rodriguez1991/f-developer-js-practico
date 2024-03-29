const menuEmail= document.querySelector('.navbar-email');
const desktopMenu= document.querySelector('.desktop-menu');

menuEmail.addEventListener('click',stateDesktopMenu);

function stateDesktopMenu () {

    desktopMenu.classList.toggle('inactive')

}

