//propriétés pour gérer un évènement
let div1 = document.getElementById('div1');

//on utilise les propriétés gestionnaires d'évènement
div1.onmouseover = function () {this.style.backgroundColor = 'yellow';};
div1.onmouseout = function () {this.style.backgroundColor = 'white';};

//addEventListener()
let btn = document.querySelector('button');
let p2 = document.getElementById('p2');

btn.addEventListener('click', function(){
        p2.style.color='blue';
        p2.style.fontWeight='bold';
    }
);

p2.addEventListener('mouseover', function () {
    p2.style.backgroundColor='orange';
});
p2.addEventListener('mouseout', function () {
    p2.style.backgroundColor="white";
});

// removeEventListener
let p3 = document.getElementById('p3');
let btn2 = document.getElementById('btn2');

function changeColor(){
    this.style.backgroundColor='orange';
};

p3.addEventListener('mouseover', changeColor);
p3.addEventListener('mouseover', function () {
    this.style.fontWeight='bold';
});
p3.removeEventListener('mouseover', changeColor);
