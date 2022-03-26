$("document").ready(function () {
  var typed = new Typed("#typing", {
    strings: ["WEB DEVELOPER.", "UI/UX DESIGNER.", "INVESTOR."],
    typeSpeed: 100,
    backSpeed: 70,
    loop: true,
  });
});

const menu = document.getElementsByClassName("menu")[0];
const sections = document.getElementsByClassName("sections")[0];
const socialMedia = document.getElementsByClassName("socialMedia")[0];
const navbar = document.getElementsByClassName("navbar")[0];

menu.addEventListener("click", () => {
  sections.classList.toggle("active");
  socialMedia.classList.toggle("active");
  navbar.classList.toggle("active");
});
