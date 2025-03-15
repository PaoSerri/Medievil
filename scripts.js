document.addEventListener("DOMContentLoaded", function () {
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });

    console.log("Bootstrap tooltips attivati!");
});
document.addEventListener("DOMContentLoaded", function () {
    var dropdown = document.querySelector(".dropdown");
    dropdown.addEventListener("mouseover", function () {
        var menu = dropdown.querySelector(".dropdown-menu");
        menu.classList.add("show");
    });
    dropdown.addEventListener("mouseleave", function () {
        var menu = dropdown.querySelector(".dropdown-menu");
        menu.classList.remove("show");
    });
});
document.addEventListener("DOMContentLoaded", function () {
    var dropdowns = document.querySelectorAll(".dropdown");

    dropdowns.forEach(function (dropdown) {
        dropdown.addEventListener("mouseover", function () {
            var menu = dropdown.querySelector(".dropdown-menu");
            menu.classList.add("show");
        });

        dropdown.addEventListener("mouseleave", function () {
            var menu = dropdown.querySelector(".dropdown-menu");
            menu.classList.remove("show");
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

