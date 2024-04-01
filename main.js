const menuEmail= document.querySelector('.navbar-email');
const desktopMenu= document.querySelector('.desktop-menu');

const hamburguerMenu= document.querySelector('.menu');
const menuResponsive= document.querySelector('.mobile-menu');

const shopCar= document.querySelector('.navbar-shopping-cart');
const shopCarDetail= document.querySelector('.product-detail');

menuEmail.addEventListener('click',stateDesktopMenu);
hamburguerMenu.addEventListener('click', stateMenuResponsive);
shopCar.addEventListener('click',stateShopCarDetail);

function stateDesktopMenu () {

    const isShopCarclosed = shopCarDetail.classList.contains('inactive');
    if (!isShopCarclosed) {
        shopCarDetail.classList.add('inactive');
    }
    desktopMenu.classList.toggle('inactive');
    
}

function stateMenuResponsive () {
    const isShopCarclosed = shopCarDetail.classList.contains('inactive');
    if (!isShopCarclosed) {
        shopCarDetail.classList.add('inactive');
    }
    menuResponsive.classList.toggle('inactive');
}

function stateShopCarDetail() {
    const isMenuResponsiveclosed = menuResponsive.classList.contains('inactive');
    const isDesktopMenuclosed = desktopMenu.classList.contains('inactive');

    if (!isMenuResponsiveclosed || !isDesktopMenuclosed ) {
        menuResponsive.classList.add('inactive');
        desktopMenu.classList.add('inactive')
    }
    shopCarDetail.classList.toggle('inactive')
}