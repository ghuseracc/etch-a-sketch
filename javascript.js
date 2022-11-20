const container = document.querySelector('#container')

const content = document.querySelector('.content');
content.style.outline = '1px solid black';
content.style.width = '768px'
content.style.height = '768px';
let box = (768/16).toString();

//Create a 16X16 grid of divs
for (i = 0 ; i < 16 ; i++) {
    for (j = 0 ; j < 16 ; j++) {
    const div = document.createElement('div');
    div.className = 'grid';
    div.style.outline = '1px solid black';
    div.style.width = box + 'px';
    div.style.height = box + 'px';
    content.appendChild(div);
    }
}

//Select all created divs and add mouse event listeners
const divs = Array.from(document.querySelectorAll('.grid'));
divs.forEach(grid => grid.addEventListener('mouseover', mouseOver));
divs.forEach(grid => grid.addEventListener('mouseout', mouseOut));

function mouseOver() {
    this.classList.add('hover');
}

function mouseOut() {

}