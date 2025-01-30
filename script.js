
if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    let element = document.querySelector('.menu__sublist');
    element.classList.add('menu__sublist_mobile');

    let elementRigth = document.querySelector('.menu__sublist_right');
    elementRigth.classList.add('menu__sublist_mobile');
} else {
    let element = document.querySelector('.menu__sublist');
    element.classList.add('menu__sublist_pc');

    let elementRigth = document.querySelector('.menu__sublist_right');
    elementRigth.classList.add('menu__sublist_pc');
};

const menuIcon = document.querySelector('.menu__icon');
if (menuIcon) {
    const menuContainer = document.querySelector('.menu__container');
    const main = document.querySelector('.main');
    menuIcon.addEventListener('click', function (event) {
        menuContainer.classList.toggle('menu__container_active');
        main.classList.toggle('main_lock');
    });
};

const links = document.querySelector('a');
links.addEventListener('click', function (event) {
    event.preventDefault();
});

const menuItems = document.querySelectorAll('.menu__item');
if (menuItems.length > 0) {
    for (let index = 0; index < menuItems.length; index++) {
        const menuItem = menuItems[index];
        menuItem.addEventListener('click', function (event) {
            menuItem.classList.toggle('menu__item_active');
            menuItem.querySelector('.menu__sublist').classList.toggle('menu__sublist_active');
            menuItem.querySelector('.menu__drop').classList.toggle('menu__drop_active');
        });
    };
};

const menuSubItems = document.querySelectorAll('.menu__subitem');
if (menuSubItems.length > 0) {
    for (let index = 0; index < menuSubItems.length; index++) {
        const menuSubItem = menuSubItems[index];
        menuSubItem.addEventListener('click', function (event) {
            menuSubItem.querySelector('.menu__sublist_right').classList.toggle('menu__sublist_active');
            menuSubItem.querySelector('.menu__drop_rigth').classList.toggle('menu__drop_active');
        });
    };
};