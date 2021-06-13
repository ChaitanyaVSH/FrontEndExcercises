console.log("Up and running...")

let menuBtn = document.querySelector(".menuImg");
let menu = document.querySelector(".menu")

menuBtn.addEventListener("click", () => {
    menu.classList.toggle("moveright");
})