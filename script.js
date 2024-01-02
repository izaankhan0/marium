// script.js

function toggleMenu() {
    const hiddenMenu = document.querySelector('.hidden-menu');
    hiddenMenu.classList.toggle('show-menu');
}

document.addEventListener('DOMContentLoaded', function() {
    const hiddenMenu = document.querySelector('.hidden-menu');

    document.addEventListener('click', function(event) {
        if (!hiddenMenu.contains(event.target) && event.target !== menuIcon) {
            hiddenMenu.classList.remove('show-menu');
        }
    });

    function preventScroll(event) {
        if (hiddenMenu.classList.contains('show-menu')) {
            event.preventDefault();
        }
    }

    document.addEventListener('scroll', preventScroll);
});

function closeBtn(){
    document.querySelector('.show-menu').classList.remove('show-menu')
}