let b1 = document.getElementById('b1');
let b2 = document.getElementById('b2');
b3 = document.getElementById('b3');

b1.addEventListener('click', recharge);
b2.addEventListener('click', assigne);
b3.addEventListener('click', remplace);

function recharge() {
    location.reload();
};

function assigne() {
    location.assign('https://www.pierre-giraud.com');
};

function remplace() {
    location.replace('https://www.pierre-giraud.com');
};

console.log(location.pathname);