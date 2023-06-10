const header = document.querySelector("header");

window.addEventListener("scroll", function()){
    header.classList.toggle("sticky", this.window.scrollY > 0);
}

const Links = document.querySelectorAll('links');
const section = document.querySelectorAll('section');

let activeLink = 0;

Links.forEach((link, 1) => {

})