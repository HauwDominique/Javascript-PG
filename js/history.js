document.getElementById('p1').innerHTML = 'history.length = ' + history.length + ' pages visitées;';

let b1 = document.getElementById('b1');
let b2 = document.getElementById('b2');
let b3 = document.getElementById('b3');

b1.addEventListener('click', historyGo);
b2.addEventListener('click', historyBack);
b3.addEventListener('click', historyForward);

function historyGo(){
    history.go(-2);
};

function historyBack(){
    history.back();
};

function historyForward() {
    history.forward();
};