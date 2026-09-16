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

const filterButtons = document.querySelectorAll(".filter-button");
const historyEntries = document.querySelectorAll(".history-entry");
const noResults = document.getElementById("noResults");

function updateHistory(filter) {

    let visibleCount = 0;

    historyEntries.forEach((entry) => {

        const category = entry.dataset.category;

        if (filter === "all" || category === filter) {
            entry.style.display = "grid";
            visibleCount++;
        } else {
            entry.style.display = "none";
        }

    });

    if (window.innerWidth <= 650) {

        historyEntries.forEach((entry) => {

            if (entry.style.display !== "none") {
                entry.style.display = "block";
            }

        });

    }

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

        updateHistory(button.dataset.filter);

    });

});

window.addEventListener("resize", () => {

    const activeFilter =
        document.querySelector(".filter-button.active").dataset.filter;

    updateHistory(activeFilter);

});