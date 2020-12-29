document.addEventListener("DOMContentLoaded", function(){

    // Al caricamento della pagina, lo scroll del box "reviews" è a 0
    document.getElementById("reviews").scrollTo(0,0);

    // Prendiamo la freccia destra
    const next = document.querySelector(".fa-chevron-right");
    // Evento al click sulla freccia destra
    next.addEventListener("click", function(){
        // Settiamo la nuova review attiva
        let newActiveReview;
        // Se l'elemento non è l'ultimo della lista...
        if(document.querySelector(".review.active") != document.getElementById("reviews").lastElementChild) {
            // ... l'elemento attivo diventa il prossimo
            newActiveReview = document.querySelector(".review.active").nextElementSibling;
        } else {
            // ... altrimenti diventa il primo
            newActiveReview = document.getElementById("reviews").firstElementChild;
        }

        // Cambiano la review attiva
        setActiveReview(newActiveReview);

        // Scrolliamo fino alla review corrispondente
        let activeAttr = newActiveReview.getAttribute("data-review");
        // In base all'attributo, chiamiamo la funzione di scroll
        document.getElementById("reviews").scrollTo(scrollToX(activeAttr), 0);

        // Richiamiamo la funzione per aggiornare il cerchietto in base all'elemento attivo
        circleNav(newActiveReview);
    });

    // Prendiamo la freccia sinistra
    const prev = document.querySelector(".fa-chevron-left");
    // Evento al click sulla freccia sinistra
    prev.addEventListener("click", function(){
        // Settiamo la nuova review attiva
        let newActiveReview;
        // Se l'elemento non è il primo della lista...
        if(document.querySelector(".review.active") != document.getElementById("reviews").firstElementChild) {
            // ... l'elemento attivo diventa il precedente
            newActiveReview = document.querySelector(".review.active").previousElementSibling;
        } else {
            // ... altrimenti diventa l'ultimo
            newActiveReview = document.getElementById("reviews").lastElementChild;
        }

        // Cambiano la review attiva
        setActiveReview(newActiveReview);

        // Scrolliamo fino alla review corrispondente
        let activeAttr = newActiveReview.getAttribute("data-review");
        // In base all'attributo, chiamiamo la funzione di scroll
        document.getElementById("reviews").scrollTo(scrollToX(activeAttr), 0);

        // Richiamiamo la funzione per aggiornare il cerchietto in base all'elemento attivo
        circleNav(newActiveReview);
    });

    // Prendiamo il bottone "Surprise Me!"
    const surprise = document.getElementById("random-rev");
    // Evento al click sul bottone
    surprise.addEventListener("click", function(){
        // Prendiamo tutte le reviews
        let allReviews = document.querySelectorAll(".review");
        // Generiamo un numero casuale
        let randomNr = Math.floor(Math.random() * allReviews.length);
        
        // Se la review è la stessa già attiva, allora ri-generiamo il numero casuale
        while (allReviews[randomNr] == document.querySelector(".review.active")) {
            randomNr = Math.floor(Math.random() * allReviews.length);
        }

        // Settiamo la nuova review attiva
        setActiveReview(allReviews[randomNr]);

        // Scorriamo fino alla review da visualizzare
        let activeAttr = allReviews[randomNr].getAttribute("data-review");
        document.getElementById("reviews").scrollTo(scrollToX(activeAttr), 0);

        // Rendiamo attivo il cerchietto giusto in base alla review attiva
        circleNav(allReviews[randomNr]);
    });


    // Prendiamo tutti gli elementi cerchio
    const circles = document.querySelectorAll(".fa-circle");
    // Facciamo un ciclo su tutti i cerchi
    circles.forEach(circle => {
        // Evento al click su ogni cerchio
        circle.addEventListener("click", function(){
            // Se il cerchio cliccato non è già quello attivo
            if(this.className != "fas fa-circle") {
                // Rendiamo "inattivi" tutti i cerchi
                let activeCircle = document.querySelector(".arrows .fas.fa-circle");
                activeCircle.className = "far fa-circle";
                // Rendiamo attivo il cerchio cliccato
                this.className = "fas fa-circle";
                // Prendiamo l'attributo [data-review] del cerchio cliccato
                let activeAttr = this.getAttribute("data-review");
                // In base all'attributo, chiamiamo la funzione di scroll
                document.getElementById("reviews").scrollTo(scrollToX(activeAttr), 0);

                // Settiamo come attiva la nuova review
                let newActiveReview = document.querySelector('#reviews [data-review='+activeAttr+']');
                setActiveReview(newActiveReview);
            }
        });
    });


    ////// FUNZIONI //////

    // Funzione che cambia la review attiva prendendo come parametro la nuova review attiva
    function setActiveReview(newActive) {
        // Prendiamo la review attualmente attiva
        let activeRev = document.querySelector("#reviews .review.active");
        // Togliamo la classe "active"
        activeRev.classList.remove("active");
        // Rendiamo attiva la review che corrisponde al cerchio cliccato
        activeRev = newActive;
        activeRev.classList.add("active");
    }

    // Funzione che stabilisce il cerchietto attivo in base all'elemento attivo al momento
    function circleNav(activeEl) {
        // Prendiamo il data-review dell'elemento attivo
        let activeAttr = activeEl.getAttribute("data-review");
        // Rendiamo "inattivi" tutti i cerchi
        let activeCircle = document.querySelector(".arrows .fas.fa-circle");
        activeCircle.className = "far fa-circle";
        // Rendiamo "attivo" il cerchio col corrispondente data-review
        let arrowsDiv = document.querySelector(".arrows");
        activeCircle = arrowsDiv.querySelector('[data-review='+activeAttr+']');
        activeCircle.className = "fas fa-circle";
    }

    /* Funzione che, preso un valore "revN" dove N è un numero,
    fa scrollare la pagina al punto corrispondente
    in base al valore di N */
    function scrollToX(revN) {
        let nrRev = parseInt(revN.replace("rev", ""));
        let posX = 0;
        if(nrRev != 1) {
            posX = 600 * (nrRev-1);
        }
        return posX;
    }


});