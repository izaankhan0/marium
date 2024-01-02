document.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.querySelector('.menu-icon');
    const hiddenMenu = document.querySelector('.hidden-menu');
    const closeBtn = document.querySelector('.close');

    // Function to toggle the hidden menu
    function toggleMenu() {
        hiddenMenu.classList.toggle('show-menu');
    }

    // Event listener for the burger icon to toggle the menu
    menuIcon.addEventListener('click', toggleMenu);

    // Event listener for the close button to close the menu
    closeBtn.addEventListener('click', toggleMenu);

    // Event listener to close the menu when clicking anywhere on the screen
    document.addEventListener('click', function(event) {
        if (!hiddenMenu.contains(event.target) && event.target !== menuIcon) {
            hiddenMenu.classList.remove('show-menu');
        }
    });

    // Prevent scrolling when the menu is open
    function preventScroll(event) {
        if (hiddenMenu.classList.contains('show-menu')) {
            event.preventDefault();
        }
    }

    // Event listener to prevent scrolling when the menu is open
    document.addEventListener('scroll', preventScroll);
});
