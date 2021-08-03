const canvas = document.querySelector("#canvas");
const slider = document.querySelector("#mySlider");
const sliderContainer = document.querySelector("#slider-button-container");
const clearButton = document.querySelector("#clearButton");
const colorSelector = document.querySelector("#colorSelector");
clearButton.addEventListener("click", clearGrid);
let currentColor = "black";

function detectMouseUp() {
    slider.addEventListener("mouseup",clearGrid, {once: true});
}

function clearGrid() {
    canvas.innerHTML = "";
    generateGrid(slider.value);
}



slider.addEventListener("mousedown", detectMouseUp, false);



generateGrid(32);
function updateCurrentColor() {
    currentColor = colorSelector.value;
}


function changeColor(e){
    updateCurrentColor();
    e.target.style.backgroundColor = `${currentColor}`;

}

function generateGrid(size){

    const heightWidht = canvas.offsetHeight / size;
    let i = 0;

    canvas.style.gridTemplateColumns = `repeat(${size}, ${heightWidht}px)`

    while (i < size * size){
        const cell = document.createElement("div");
        cell.style.backgroundColor = "white";
        cell.style.height = cell.style.width = `${heightWidht}px`
        cell.addEventListener("mouseover", (e) => changeColor(e));
        canvas.appendChild(cell);
        i++
    }
}



