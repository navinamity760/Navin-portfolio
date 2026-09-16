// ========================================
// NAVIGATION SCROLL EFFECT
// ========================================

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {
        navbar.style.boxShadow = "0 5px 25px rgba(0,0,0,0.05)";
    } else {
        navbar.style.boxShadow = "none";
    }

});


// ========================================
// SCROLL REVEAL
// ========================================

const sections = document.querySelectorAll(
    ".section, .contact-section"
);

sections.forEach(section => {
    section.classList.add("reveal");
});


const observer = new IntersectionObserver(
    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }

        });

    },
    {
        threshold: 0.1
    }
);


sections.forEach(section => {
    observer.observe(section);
});


// ========================================
// CURRENT YEAR
// ========================================

const year = new Date().getFullYear();

const footer = document.querySelector("footer span");

if (footer) {
    footer.innerHTML =
        `© ${year} Navin Kumar Kumawat`;
}