{ // додаткові кавички, щоб ізолювати змінні (variables)

    const $menu = document.querySelector('[data-menu]');
    
    if($menu) {
        const $burgerBtn = document.querySelector('[data-action="toggle-menu-visibility"]');

        $burgerBtn.addEventListener('click', () => {

            if($burgerBtn.classList.contains('burger--active')) {

                toggleDisablePageScroll(false); // допоміжна глобальна функція, включає\виключає скролл на сторінці.
                $burgerBtn.classList.remove('burger--active');
                $menu.classList.remove('menu--open');

            } else {

                toggleDisablePageScroll(true);
                $burgerBtn.classList.add('burger--active');
                $menu.classList.add('menu--open');

            }

        });
    }
}