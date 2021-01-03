document.addEventListener("DOMContentLoaded", function(){

    // Mettiamo in variabili quello che andrà cliccato
    const modalWrapper = document.getElementById("modal-wrapper");
    const modal =  document.getElementById("modal");
    const modalOpener = document.getElementById("modal-opener");
    const modalExit = document.querySelector("#modal-exit .fa-times");
    const modalNo = document.getElementById("modal-no");

    // Al click su "modal-opener" apparirà la modale
    modalOpener.addEventListener("click", function(){
        modalWrapper.classList.remove("d-none");
        modal.classList.remove("d-none");
    });

    // Al click su "modal-exit" o su qualunque altra parte del documento, si chiuderà la modale
    document.body.addEventListener("click", function(event){
        if (event.target == modalWrapper || event.target == modalExit || event.target == modalNo) {
            modal.classList.add("d-none");
            modalWrapper.classList.add("d-none");
        }
    });

});