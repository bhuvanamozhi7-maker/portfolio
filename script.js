// =========================
// Welcome Message
// =========================
window.addEventListener("load", () => {
    console.log("Welcome to Bhuvaneshwari Portfolio 🚀");
});

// =========================
// Smooth Scroll
// =========================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});

// =========================
// Navbar Shadow on Scroll
// =========================
window.addEventListener("scroll", () => {

    const navbar = document.querySelector(".navbar");

    if (window.scrollY > 50) {
        navbar.style.boxShadow = "0 5px 20px rgba(0,191,255,0.4)";
    } else {
        navbar.style.boxShadow = "none";
    }

});

// =========================
// Button Animation
// =========================
const buttons = document.querySelectorAll(".btn");

buttons.forEach(button => {

    button.addEventListener("mouseenter", () => {
        button.style.transform = "scale(1.05)";
    });});

    const cards = document.querySelectorAll(".why-card");

const observer = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }
    });
},{
    threshold:0.2
});

cards.forEach(card=>{
    observer.observe(card);
});
