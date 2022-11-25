const container = document.querySelector('#container')

const content = document.querySelector('.content');
//content.style.outline = '1px solid black';
content.style.width = '720px'
content.style.height = '720px';
let box = (720/16).toString();

//Create a 16x16 grid of divs
for (i = 0 ; i < 16 ; i++) {
    for (j = 0 ; j < 16 ; j++) {
    const div = document.createElement('div');
    div.className = 'grid';
    div.style.outline = '1px solid black';
    div.style.width = box + 'px';
    div.style.height = box + 'px';
    div.style.backgroundColor = 'white';
    content.appendChild(div);
    }
}

//Select all created divs and add mouse event listeners
let divs = Array.from(document.querySelectorAll('.grid'));
divs.forEach(grid => grid.addEventListener('mouseover', mouseOver));

function mouseOver() {
    //change div color to random rgb value
    this.style.backgroundColor = 'rgb(' + getRandomIntInclusive(0,255).toString() + "," + getRandomIntInclusive(0,255).toString() + "," + getRandomIntInclusive(0,255).toString() + ')';
}


const btn = document.querySelector('#btn');
btn.addEventListener('click', () => {
    //Prompt user for new grid size 
    let size = parseInt(prompt('Enter the number of squares, between 2-100, per side of the grid', '16'));
    while (size < 2 || size > 100 || isNaN(size)) {
        size = parseInt(prompt('Please enter a number between 2-100', '16'));
    }

    //Remove current grid and event listeners
    divs.forEach(grid => grid.removeEventListener('mouseover', mouseOver));
    divs.forEach(grid => content.removeChild(grid));

    let square = (720/size).toString();
    //Create new grid from user input
    for (i = 0 ; i < size ; i++) {
        for (j = 0 ; j < size ; j++) {
        const div = document.createElement('div');
        div.className = 'grid';
        div.style.outline = '1px solid black';
        div.style.width = square + 'px';
        div.style.height = square + 'px';
        div.style.backgroundColor = 'white';
        content.appendChild(div);
        }
    }
    //Add event listeners to new grid
    divs = Array.from(document.querySelectorAll('.grid'));
    divs.forEach(grid => grid.addEventListener('mouseover', mouseOver));
});

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
  }
