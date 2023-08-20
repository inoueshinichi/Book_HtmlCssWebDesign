window.addEventListener('load', () => {
    var $button = document.querySelector('.toggle-menu-button');
    var $menu = document.querySelector('.header-site-menu');
    $button.addEventListener('click', () => {
        if ($menu.classList.contains('is-show')) {
            $menu.classList.remove('is-show');
        } else {
            $menu.classList.add('is-show');
        }
    });
});