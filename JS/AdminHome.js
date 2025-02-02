const mobileMenu = document.getElementById("mobile-menu");
const navLinks = document.querySelector(".nav-links");

mobileMenu.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

function anotherpage(){
    window.location.href = "/HTML/employees.html";
}
