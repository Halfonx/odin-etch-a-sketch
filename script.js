const container = document.querySelector('.container');

const createRow = function(numberOfDiv) {
    for (let i = 0; i < numberOfDiv; i++) {
        const newDiv = document.createElement('div');
        newDiv.classList.add('grid-element');
        container.appendChild(newDiv);
    }
}