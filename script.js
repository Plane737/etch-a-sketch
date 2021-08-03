const canvas = document.querySelector("#canvas");

let currentColor = "black";

generateGrid(32);

function changeColor(e){
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



