// ################################################
// Do not modify the below block
window.addEventListener("DOMContentLoaded", () => {
    console.log("Up and running...");
})
// ################################################
// Make your code changes from the below

let menuBtn = document.getElementById("menuBtn");
menuBtn.addEventListener("click", () => {

    document.querySelector(".bars").classList.toggle("hide");
    document.querySelector(".close").classList.toggle("hide");
    document.querySelector(".menu").classList.toggle("show");
})