const container = document.querySelector('#container')

const content = document.querySelector('.content');
content.style.outline = '1px solid black';
content.style.width = '768px'
content.style.height = '768px';
let grid = (768/16).toString();

for (i = 0 ; i < 16 ; i++) {
    for (j = 0 ; j < 16 ; j++) {
    const div = document.createElement('div');
    div.style.outline = '1px solid black';
    div.style.width = grid + 'px';
    div.style.height = grid + 'px';
    content.appendChild(div);
    }
}
