const container = document.querySelector('#container');

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
            row.appendChild(cell);
        }
    container.appendChild(row);
    }
}

window.addEventListener("load", () => { // To display the grid directly when the page is loaded
    createGrid();
})