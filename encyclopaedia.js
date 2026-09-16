const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");

    const isOpen = navLinks.classList.contains("active");

    menuToggle.setAttribute("aria-expanded", isOpen);
    menuToggle.textContent = isOpen ? "✕" : "☰";
});

const navItems = document.querySelectorAll(".nav-links a");

navItems.forEach((item) => {
    item.addEventListener("click", () => {
        navLinks.classList.remove("active");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.textContent = "☰";
    });
});


const searchInput = document.getElementById("searchInput");
const filterButtons = document.querySelectorAll(".filter-button");
const knowledgeCards = document.querySelectorAll(".knowledge-card");
const entryCount = document.getElementById("entryCount");
const noResults = document.getElementById("noResults");

let currentFilter = "all";

function updateEntries() {

    const searchTerm = searchInput.value.toLowerCase().trim();
    let visibleCount = 0;

    knowledgeCards.forEach((card) => {

        const category = card.dataset.category;
        const name = card.dataset.name;

        const matchesCategory =
            currentFilter === "all" || category === currentFilter;

        const matchesSearch =
            name.includes(searchTerm);

        if (matchesCategory && matchesSearch) {
            card.style.display = "flex";
            visibleCount++;
        } else {
            card.style.display = "none";
        }

    });

    entryCount.textContent = `${String(visibleCount).padStart(2, "0")} ENTRIES FOUND`;

    if (visibleCount === 0) {
        noResults.style.display = "block";
    } else {
        noResults.style.display = "none";
    }
}

filterButtons.forEach((button) => {

    button.addEventListener("click", () => {

        filterButtons.forEach((item) => {
            item.classList.remove("active");
        });

        button.classList.add("active");

        currentFilter = button.dataset.filter;

        updateEntries();

    });

});

searchInput.addEventListener("input", updateEntries);

updateEntries();