function menuOpen() {

    const burger = document.querySelector('.nav__burger');
    const menu = document.querySelector('.nav__links');

    burger.addEventListener('click', () => {
        burger.classList.toggle('close');
        menu.classList.toggle('nav__active');
    });
    menu.addEventListener('click', () => {
        if (menu.classList.contains('nav__active')) {

            menu.classList.remove('nav__active');
            burger.classList.remove('close');
        }

    }

    );
}

menuOpen();