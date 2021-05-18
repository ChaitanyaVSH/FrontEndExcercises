console.log("Up and Running...")

// https://www.javascripttutorial.net/javascript-dom/javascript-style/
function css(e, styles) {
    for (const property in styles)
        e.style[property] = styles[property];
}
// #####################################################################
// Do not modify above this line

let width = 0;
let innerContainer = $("#innerContainer");


let button = $("#button");
button.click(() => {
    width = $("#input");
    width = width[0].value;
    width = parseInt(width);

    innerContainer.css('width', () => {
        return `${width}%`;
    })
})

// css(innerContainer, {
//     width: "10%"
// })