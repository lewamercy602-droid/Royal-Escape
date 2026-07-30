// Hamburger menu
const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

menuBtn.addEventListener("click", () => {
    navMenu.classList.toggle("active");

    if (navMenu.classList.contains("active")) {
        menuBtn.textContent = "✕";
    } else {
        menuBtn.textContent = "☰";
    }
});

// Explore button
const exploreBtn = document.getElementById("exploreBtn");

exploreBtn.addEventListener("click", () => {
    alert("Welcome to Royal Escape!");
}); 
