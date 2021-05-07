console.log("Up and running...!")

let menuBtn = document.getElementById("menuBtn");
let section = document.getElementById("sectionMenu");
let menuOpenIcon = document.getElementById("open");
let menuCloseIcon = document.getElementById("close");

menuBtn.addEventListener("click", () => {
    menuOpenIcon.classList.toggle("hide");
    menuCloseIcon.classList.toggle("hide");
    section.classList.toggle("active");
});


// https://www.linkedin.com/posts/akshaymarch7_how-to-check-if-a-browser-tab-is-active-or-activity-6759374707734142976-UjWR
setInterval(() => {
    console.log(document.visibilityState);
},5000)