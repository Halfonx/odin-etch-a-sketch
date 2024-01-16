const container = document.querySelector('#container');
const gridSizeButton = document.querySelector('#grid_size_button');

const createGrid = function() {
    for (let i = 0; i < 16; i++) {
        const row = document.createElement('div');
        row.classList.add('row');
        for (let j = 0; j < 16; j++) {
            const cell = document.createElement('div');
            cell.classList.add('cell');
            cell.addEventListener('mouseover', () => {
                cell.style.backgroundColor = "black";
            });
            cell.addEventListener('mouseout', () => {
                cell.style.backgroundColor = "white";
            });
            row.appendChild(cell);
        }
        container.appendChild(row);
    }
}

gridSizeButton.addEventListener('click', () => {
    const gridSizeValue = prompt('Enter a grid size');
    if (gridSizeValue < 8 || gridSizeValue > 100) {
        window.alert("Grid can't be lower than 8 and higher than 100");
        container.innerHTML = "";
        createGrid();
    } else {
        const createCustomGrid = function() {
            for (let i = 0; i < gridSizeValue; i++) {
                const row = document.createElement('div');
                row.classList.add('row');
                for (let j = 0; j < gridSizeValue; j++) {
                    const cell = document.createElement('div');
                    cell.classList.add('cell');
                    cell.addEventListener('mouseover', () => {
                        cell.style.backgroundColor = 'black';
                    });
                    cell.addEventListener('mouseout', () => {
                        cell.style.backgroundColor = 'white';
                    });
                    row.appendChild(cell);
                }
                container.appendChild(row);
            }
        }
        container.innerHTML = "";
        createCustomGrid();
    }
})

window.addEventListener("load", () => { // To display the grid directly when the page is loaded
    createGrid();
})