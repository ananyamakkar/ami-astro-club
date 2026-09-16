const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
        const isOpen = navLinks.classList.toggle("active");

        menuToggle.setAttribute("aria-expanded", isOpen);
        menuToggle.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
        menuToggle.textContent = isOpen ? "✕" : "☰";
    });

    const links = navLinks.querySelectorAll("a");

    links.forEach(link => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("active");
            menuToggle.setAttribute("aria-expanded", "false");
            menuToggle.setAttribute("aria-label", "Open navigation");
            menuToggle.textContent = "☰";
        });
    });

    window.addEventListener("resize", () => {
        if (window.innerWidth > 650) {
            navLinks.classList.remove("active");
            menuToggle.setAttribute("aria-expanded", "false");
            menuToggle.setAttribute("aria-label", "Open navigation");
            menuToggle.textContent = "☰";
        }
    });
}

const filterButtons = document.querySelectorAll(".filter-button");
const galleryItems = document.querySelectorAll(".gallery-item");
const galleryCount = document.getElementById("galleryCount");

function updateGallery(filter) {
    let visibleCount = 0;

    galleryItems.forEach(item => {
        const matches = filter === "all" || item.dataset.category === filter;

        item.style.display = matches ? "block" : "none";
        if (matches) visibleCount++;
    });

    galleryCount.textContent = visibleCount;
}

filterButtons.forEach(button => {
    button.addEventListener("click", () => {
        filterButtons.forEach(item => item.classList.remove("active"));
        button.classList.add("active");

        updateGallery(button.dataset.filter);
    });
});

updateGallery("all");