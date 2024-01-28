let container = document.querySelector('.container'); 
let button = document.getElementById('buttonProperties'); 
let count = 0;
let countsArray;

function addDiv(numberOfDivsToCreate) {    
    let gridCellDimensions = ((600 / numberOfDivsToCreate - 2)).toFixed(2); 
    let gridSize = Math.pow(numberOfDivsToCreate, 2); 

    // create grid squares & add to container
    while (gridSize > 0) {
        let newDiv = document.createElement('div'); 	
        container.appendChild(newDiv); 
        newDiv.classList.add('grid'); 
        newDiv.style.height = gridCellDimensions + 'px';  
        newDiv.style.width = gridCellDimensions + 'px'; 
        newDiv.style.border = '1px solid black';             
        gridSize--; 
    }

    let gridCells = document.querySelectorAll('.grid'); 
    countsArray = Array.from({ length: gridCells.length }, () => 0);
    gridCells.forEach(function(cell, index) {
        cell.addEventListener('mouseenter', function(){
            changeColor(cell,index);
            updateCount(index);
        });

    });
    console.log(gridCellDimensions);
    console.log('Grid has been created!!')
}

function updateCount(index)
{
    countsArray[index]++;
}

// change grid square color to red when blue and vice versa
function changeColor(cell,index) {
    if (countsArray[index]%2 == 0)
    {
        cell.style.backgroundColor = '#ff9999'; 
    }
    else
    {
        cell.style.backgroundColor = '#1C86EE';
    }
}

// clear grid + prompt for new grid size
function clear() {    	
    let reqGridSize = prompt('How many squares per side?'); 

    if (reqGridSize >= 1 && reqGridSize <= 100) { 
        while (container.hasChildNodes()) {
            container.removeChild(container.lastChild); // removes all grid squares
        }
        addDiv(reqGridSize); // create new grid 
    } else {
        alert ('Choose a number between 1-100'); 
        clear();
    }
}

button.addEventListener('click', clear);
window.onload = addDiv(16);
