console.log("Up and running...!")

let menuBtn = document.getElementById("menuBtn");
let section = document.getElementById("sectionMenu");
let menuOpenIcon = document.getElementById("open");
let menuCloseIcon = document.getElementById("close");

menuBtn.addEventListener("click", () => {
    menuOpenIcon.classList.toggle("hide")
    menuCloseIcon.classList.toggle("hide")
    section.classList.toggle("active")
});