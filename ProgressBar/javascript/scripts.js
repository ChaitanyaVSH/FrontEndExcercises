console.log("Up and Running...")

// https://www.javascripttutorial.net/javascript-dom/javascript-style/
function css(e, styles) {
    for (const property in styles)
        e.style[property] = styles[property];
}

let innerContainer = $("#innerContainer")
let width = 10;
innerContainer.css('width', () => {
    return `${width}%`
})

// css(innerContainer, {
//     width: "10%"
// })