//Make a 16 x 16 grid using divs and JS DOM Methods
    //ASSIGN the value of 16*16 to a variable (grid)
    //GET the container node and assign to a variable
    //FOR every value from 0 to the value of grid,
        //CREATE a div element
        //APPEND the div element to the container

const grid = 16 * 16;
const container = document.querySelector("#container");

for (let i = 0; i <= grid; i++){
    let div = document.createElement("div");
    container.appendChild(div);
}
