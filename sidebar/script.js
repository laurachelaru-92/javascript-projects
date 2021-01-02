document.addEventListener("DOMContentLoaded", function(){

    /* Mettiamo in variabili l'hamburger-menu, la sidebar
        e la "X" della sidebar
    */
    const hamMenu = document.getElementById("ham-menu");
    const sidebar = document.getElementById("sidebar");
    const exit = document.getElementById("exit");

    function slideMenu(el) {
        el.addEventListener("click", function(){
            // ... se il menu è chiuso, lo apriamo
            if (sidebar.classList.contains("close-sidebar")) {
                // Sostituiamo la classe "close" con la "open"
                sidebar.classList.remove("close-sidebar");
                sidebar.classList.add("open-sidebar");
            } 
            // ... se il menu è aperto, lo chiudiamo
            else {
                // Sostituiamo la classe "open" con la "close"
                sidebar.classList.remove("open-sidebar");
                sidebar.classList.add("close-sidebar");
            }
            // La transizione a "slide" è gestita dal css
        });
    }

    slideMenu(hamMenu);
    slideMenu(exit);




});