// Funzione document ready
document.addEventListener("DOMContentLoaded", function() {

    // Prendiamo tutti i .btn del documento
    const btnArray = document.querySelectorAll(".btn");

    // Funzione che prende il btn come attributo
    let changeCounter = function(btn) {
        
        // Funzione al click sul btn
        btn.addEventListener("click", function(){
            // Prendiamo l'id del btn
            let btnId = this.getAttribute("id");

            // Prendiamo il #nr del counter
            let nr = document.getElementById("nr");

            // In base all'id del btn, cambiamo valore al #nr del counter
            if(btnId == "decrease") {
                nr.textContent -= 1;
            } else if(btnId == "reset") {
                nr.textContent = 0;
            } else if(btnId == "increase") {
                nr.textContent = parseInt(nr.textContent) + 1;
            }

            // In base al valore del #nr, gli cambiamo colore
            if (nr.textContent > 0) {
                nr.style.color = "green";
            } else if (nr.textContent < 0) {
                nr.style.color = "red";
            } else {
                nr.style.color = "black";
            }
        });
    }

    // Eseguiamo un ciclo per richiamare la funzione del click per ogni .btn
    for(let i = 0; i < btnArray.length; i++) {
        changeCounter(btnArray[i]);
    }



});