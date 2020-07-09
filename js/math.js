// Méthode floor()
let nb1 = 12.3456;
console.log('floor :' + Math.floor(nb1)); //renvoie 12

//Méthode ceil()
console.log('ceil() : ' + Math.ceil(nb1)); //renvoie 13

//Méthode round()
let nb2 = 2.54;
console.log('round() : ' + Math.round(nb2)); //renvoie 3

document.getElementById('p1').innerHTML = 'nb1 = 12.3456 : ' +
    '<br>Math.floor(nb1) : ' + Math.floor(nb1) +
    '<br>Math.ceil(nb1) : ' + Math.ceil(nb1) +
    '<br> Math.round(nb1) : ' + Math.round(nb1) +
    '<br> Math.trunc(nb1) : ' + Math.trunc(nb1);

// Méthode random()
//renvoie un nombre décimal aléatoire entre 0 et 1
document.getElementById('p2').textContent = 'Math.random() = ' + Math.random();

// renvoie un nombre décimal aléatoire entre 0 et 1, multiplie ce nombre par 100
document.getElementById('p3').textContent = 'Math.random()*100 = ' + Math.random()*100;

/* renvoie un nombre décimal aléatoire entre 0 et 1, multiplie ce nombre par 100, puis l'arrondi à l'entier le plus proche */
document.getElementById('p4').textContent = 'Math.round(Math.random()*100) = ' + Math.round(Math.random()*100);

//Méthode min() et max()
document.getElementById('p5').innerHTML = 'Math.min(50, 2.5, 5, 14) : ' + Math.min(50, 2.5, 5, 14);
document.getElementById('p6').innerHTML = 'Math.min(2, 7.2, -12, -5) : ' + Math.min(2, 7.2, -12, -5);
document.getElementById('p7').innerHTML = 'Math.max(2, 75, -156) : ' + Math.max(2, 75, -156);

//Méthode abs()
document.getElementById('p8').textContent = 'Math.abs(-4.2) : ' + Math.abs(4.2);

