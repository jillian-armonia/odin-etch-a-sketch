//Make a 16 x 16 grid using divs and JS DOM Methods
    //ASSIGN the value of 16*16 to a variable (grid)
    //GET the container node and assign to a variable
    //FOR every value from 0 to the value of grid,
        //CREATE a div element
        //APPEND the div element to the container

let grid = 16 * 16;
const container = document.querySelector("#container");


function setGridSquares(){
    for (let i = 0; i < grid; i++){
        let div = document.createElement("div");
        div.style.flexBasis = `calc(100% / ${Math.sqrt(grid)})`
        container.appendChild(div);
    }
}

window.addEventListener("load", setGridSquares)
//Hover Effect
    //ADD an eventListener to the container
    //CHANGE the background color of a div when the mouse is hovering on it

container.addEventListener("mouseover", (e) => {
    if (e.target.id === "container") return;
    e.target.style.backgroundColor = "gray";
})

//Generate a new grid
    //CREATE a variable for the button
    //CREATE an onclick function
        //PROMPT the user to enter the number of squares per side for the grid
            //Make sure that it's a number
            //The max value is 100
        //WHEN the prompt has been entered:
            //DELETE the divs inside the container
            //MAKE a new grid with the new grid number

let btn = document.querySelector("button");
btn.onclick = () => {
    let askGrid = window.prompt("Enter a number and make a new sketchbook grid");

    if (isNaN(Number(askGrid))) alert("Please enter a number");
    else if (Number(askGrid) > 100) alert("Please enter a number 100 and below");
    else if (askGrid === null) return

    let squares = container.querySelectorAll("div")
    squares.forEach(square => square.remove());
    grid = (Number(askGrid)) ** 2;
    setGridSquares();
}
