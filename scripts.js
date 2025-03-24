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
    // Funzione di ricerca
    document.getElementById("searchInput").addEventListener("keyup", function() {
        let searchValue = this.value.toLowerCase();
        let items = document.querySelectorAll(".miniature");

        items.forEach(function(item) {
            let title = item.querySelector(".card-title").textContent.toLowerCase();
            let description = item.querySelector(".card-text").textContent.toLowerCase();

            if (title.includes(searchValue) || description.includes(searchValue)) {
                item.style.display = "block";
            } else {
                item.style.display = "none";
            }
        });
    });

    // Funzione di filtro per categoria
    document.getElementById("filterSelect").addEventListener("change", function() {
        let category = this.value;
        let items = document.querySelectorAll(".miniature");

        items.forEach(function(item) {
            if (category === "all" || item.getAttribute("data-category") === category) {
                item.style.display = "block";
            } else {
                item.style.display = "none";
            }
        });
    });
});

