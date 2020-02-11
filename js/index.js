// Your code goes here

// Event 1: Dark mode on button click

const darkenable = document.querySelectorAll('*:not(.dark):not(.btn)');
let mode = 0;

window.addEventListener('keydown', (event) => {
    if (event.keyCode === 68) {
        if (mode === 0) {
            darkenable.forEach(element => {
                element.style.backgroundColor = 'black';
                element.style.color = 'white';
                mode = 1;
            });
        }
        else {
            mode = 0;
            window.location.reload();
        }
    }
});

// Event 2: put border on navlinks on hover

navLinks = document.querySelectorAll('nav a');

navLinks.forEach((link) => {
    link.addEventListener('mouseenter', (event) => {
        event.target.style.border = 'black solid 1px';
        event.target.style.margin = '-1px';
    })
    link.addEventListener('mouseleave', (event) => {
        event.target.style.border = 'none';
        event.target.style.margin = '0px';
    })
});

// Event 3: delete anything by double clicking on it 

const everything = document.querySelectorAll('*');

everything.forEach((element) => {
    element.addEventListener('dblclick', (event) => {
        event.target.style.display = 'none';
    })
})

// Event 4: open the bus

funBus = document.querySelector('header img');
let busDoor = 'closed';

funBus.addEventListener('mouseenter', (event) => {
    event.target.src = 'img/fun-bus-open.png';
    busDoor = 'open';
})
funBus.addEventListener('mouseleave', (event) => {
    event.target.src = 'img/fun-bus.jpg';
    busDoor = 'closed';
})

// Event 5: we like to party

body = document.querySelector('body');

funBus.addEventListener('click', () => {
    if (busDoor = open) {
        body.style.animation = 'pulse .2s 10'
    }
})

// Event 6: return to top

let returnButton = document.querySelector('.return');

returnButton.addEventListener('click', () => {
    window.scrollTo(pageXOffset, 0);
    returnButton.style.display = 'none';
})

// Event 7: only show return button once scrolled

window.addEventListener('scroll', () => {
    returnButton.style.display = 'block';

});