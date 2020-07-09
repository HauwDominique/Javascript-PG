// SETTIMEOUT()

let btn1 = document.getElementById('btn1');
btn1.addEventListener('click', message);

function message() {
    setTimeout(alert, 2000, 'Btn1 Message d\'alerte après 2 seconde');
}

// CLEARTIMEOUT()

let btn2 = document.getElementById('btn2');
let timeoutId;

btn2.addEventListener('click', messageBtn2);

function messageBtn2(){
    timeoutId = setTimeout(alert, 2000, 'Btn2 message après 2s');
};

let btn3 = document.getElementById('btn3');
btn3.addEventListener('click', stopDelai);

function stopDelai() {
    clearTimeout(timeoutId);
};


//SETINTERVAL() et CLEARINTERVAL()

let btn4 = document.getElementById('btn4');
let btn5 = document.getElementById('btn5');
let p1 = document.getElementById('p1');
let intervalHologeId;

btn4.addEventListener('click', afficheHeure);

function afficheHeure() {
    intervalHologeId = setInterval(function () {
        let d = new Date();
        p1.innerHTML = d.toLocaleTimeString();
        }, 1000);
};

btn5.addEventListener('click', stopHorloge);

function stopHorloge() {
    clearInterval(intervalHologeId);
};


let btn6 = document.getElementById('btn6');
let btn7 = document.getElementById('btn7');
let p2 = document.getElementById('p2');
let heu = 0, min = 0, sec = 0, dec = 0;

let intervalTimerId;

btn6.addEventListener('click', startTimer);

function startTimer() {
    intervalTimerId = setInterval(function () {
        p2.textContent = heu + ' : ' + min + ' : ' + sec + ' : ' + dec;
        dec += 1;
        if(dec >=10) { dec = 0; sec += 1 ;};
        if(sec >= 60) { sec = 0; min += 1};
        if(min >= 60) {min = 0; heur += 1};
        if(heu >= 24) {heu = 0};
    }, 100)
};

btn7.addEventListener('click', stopTimer);
function stopTimer() {
    clearInterval(intervalTimerId);
}