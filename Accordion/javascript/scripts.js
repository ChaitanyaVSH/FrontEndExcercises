console.log("Up and running...");

let button = document.getElementById("accordionButton");
button.addEventListener("click", () => {
    let container = document.getElementById("container");
    container.classList.toggle("expand");
});