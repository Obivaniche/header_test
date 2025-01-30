
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
    menuIcon.addEventListener('click', function(element) {
        menuContainer.classList.toggle('menu__container_active')
    });
};