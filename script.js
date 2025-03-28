let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
const menuOpenButton = document.querySelector("#menu-open-button");
const menuCloseButton = document.querySelector("#menu-close-button");

menu.onclick = () =>{
  menu.classList.toggle('bx-x');
  navbar.classList.toggle('active');
}
window.onscroll= () =>{
  menu.classList.remove('bx-x');
  navbar.classList.remove('active');
}
menuOpenButton.addEventListener("click", () => {
  // toggle moblie menu visibility
  document.body.classList.toggle("show-mobile-menu");
});
//close menu when the close button is clicked
menuCloseButton.addEventListener("click", () => menuOpenButton.click());

//close menu when the nav link is clicked
navLinks.forEach(link => {
link.addEventListener("click", () => menuOpenButton.click());
});
const typed = new Typed('.multiple-text', {
  strings: ['Frontend Developer', 'Backend Developer','Web Designer'],
  typeSpeed: 80,
  backSpeed: 80,
  backDelay: 1200,
  loop:true,
});






