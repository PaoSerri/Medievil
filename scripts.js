// Attivo i Tooltp di bootstrap 
document.addEventListener("DOMContentLoaded", function () {
    // Dopo aver caricato il documento
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]')); //Seleziono tutti gli elem. con attrib = data-bs-toggle="tooltip
    //per ciascun elemento creo istanza e lo rendo attivo
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });

    console.log("Bootstrap tooltips attivati!");
});

// Gestione dei menu a discesa
document.addEventListener("DOMContentLoaded", function () {
    var dropdowns = document.querySelectorAll(".dropdown");//salvo tutti gli elementi .dropdown
    //ciclo per applicare l'evento a tutti gli elementi
    dropdowns.forEach(function (dropdown) {
        //ogni volta che mouseover il menu a discesa diventa visibile
        dropdown.addEventListener("mouseover", function () {
            var menu = dropdown.querySelector(".dropdown-menu");
            menu.classList.add("show");//rendo visibile il menu
        });
        //quando mouse non è più sopra scompare
        dropdown.addEventListener("mouseleave", function () {
            var menu = dropdown.querySelector(".dropdown-menu");
            menu.classList.remove("show");//menu non più visibile
        });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    // Funzione per la ricerca
    //Implementazione di ricerca dinamica per filtrare gli elementi in base a quello che l'utente digita
    document.getElementById("searchInput").addEventListener("keyup", function() {
        //prendo valore scritto in input
        //trasformo i caratteri tutti in minuscolo
        let searchValue = this.value.toLowerCase();
        //salvo gli elementi presenti
        let items = document.querySelectorAll(".miniature");
        //ciclo per ogni elemento presente
        items.forEach(function(item) {
            //Prendo il titolo e la descrizione dalla card dell'elemento
            let title = item.querySelector(".card-title").textContent.toLowerCase();
            let description = item.querySelector(".card-text").textContent.toLowerCase();
            //Controllo se il valore cercato è contenuto nel titolo o descrizione dell'elemento caricato nel sito 
            if (title.includes(searchValue) || description.includes(searchValue)) {
                item.style.display = "block";//se trovo valore, elemento rimane visibile
            } else {
                item.style.display = "none";//non trovo valore, elemento viene nascosto
            }
        });
    });

    // Funzione di filtro per categoria
    //Filto gli elementi in base alla categoria selezionata 
    document.getElementById("filterSelect").addEventListener("change", function() {
        //Dopo che utente selezione opzione da menu a discesa: filterSelect
        let category = this.value;//Assegno alla variabile la categoria selezionata
        let items = document.querySelectorAll(".miniature");//Salvo tutti gli elementi in items
        //ciclo per ogni elemetno
        items.forEach(function(item) {
            //Se la categoria è all mostro tutti elementi
            //O se elemento ha data-category = categoria selezionata lo mostro
            if (category === "all" || item.getAttribute("data-category") === category) {
                item.style.display = "block";//mostro elemento (rimane a schermo)
            } else {
                item.style.display = "none";//altrimenti lo nascondo
            }
        });
    });
});

