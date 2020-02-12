let blocks = document.querySelectorAll('.block')
let block1 = blocks[0];
let block2 = blocks[1];
let block3 = blocks[2];
let block4 = blocks[3];
let block5 = blocks[4];

let red = 'block--red';
let blue = 'block--blue';
let green = 'block--green';
let pink = 'block--pink';
let gray = 'block--gray';

let marginAdd = 10;
let left;
let clicked = false

blocks.forEach((block) => {
    block.addEventListener('mousedown', (event) => {
        left = setInterval(() => {
            marginAdd +=+ 10;
            event.target.style.marginLeft = `${marginAdd}px`;
        }, 50);
        clicked = true;
    })
    block.addEventListener('mouseout', (event) => {
        clearInterval(left);
        marginAdd = 10;
        if (clicked) {
            event.target.style.marginLeft = '10px';
            gameLogic(event.target);
        }
        clicked = false;
    })
    block.addEventListener('mouseup', (event) => {
        clearInterval(left);
        marginAdd = 10;
        event.target.style.marginLeft = '10px';
        gameLogic(event.target);
        clicked = false;
    })
});

const gameLogic = (block) => {
    if (block === block2) {
        let temp = block.className
        block.className = block1.className;
        block1.className = temp;
    };
    if (block === block3) {
        let temp = block.className;
        block.className = block2.className;
        block2.className = block1.className;
        block1.className = temp;
    };
    if (block === block4) {
        let temp = block.className;
        block.className = block3.className;
        block3.className = block2.className;
        block2.className = block1.className;
        block1.className = temp;
    };
    if (block === block5) {
        let temp = block.className;
        block.className = block4.className;
        block4.className = block3.className;
        block3.className = block2.className;
        block2.className = block1.className;
        block1.className = temp;
    };
    
};