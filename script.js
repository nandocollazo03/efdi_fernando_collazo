const menus = document.querySelectorAll(".menu-button");

menus.forEach(function(button) {

    button.addEventListener("click", function() {

        const menu = button.parentElement;

        menu.classList.toggle("open");

    });

});