// Méthode isFinite()

let nb1 = 10;
let nbMin = Number.MIN_VALUE;
let nb2 = Number.POSITIVE_INFINITY;

console.log(nb2);
console.log('nbMin : ' + nbMin);
document.getElementById('nbMin').innerText = 'let nbMin = Number.MIN_VALUE; // renvoie ' + nbMin;

// Méthode isFinite()
if(Number.isFinite(nb1)){
    document.getElementById('p1').textContent = "Le nombre " + nb1 + " est fini";
};
console.log('isInfinite() : ' + Number.isFinite(5.2)); //renvoie true
console.log(Number.isFinite(nb2)); //renvoie False

// Méthode isInteger()
let nb3 = 10.2;
console.log('isInteger() : ' + Number.isInteger(nb1)); //renvoie true
console.log(Number.isInteger(nb3)); // renvoie false

// Méthode NaN
let nb4 = NaN;
let nb5 = 10;
console.log('isNaN() : ' + Number.isNaN(nb5)); //renvoie true
console.log(Number.isNaN(nb4)); //renvoie false

// Méthode isSageInteger()
let nb6 = 10;
let nb7 = 100000000000000000000000000;
console.log('isSafeInteger() : ' + Number.isSafeInteger(nb6)); //renvoie true
console.log(Number.isSafeInteger(nb7)); //renvoie false

// Méthode parseFloat()
let nb8 = '29 Pierre';
let nb9 = '29.5 Pierre 30';
let nb10 = 'Pierre 29';
console.log('parseFloat() : ' + Number.parseFloat(nb8)); //renvoie : 29;
console.log(Number.parseFloat(nb9)); //renvoie 29.5;
console.log(Number.parseFloat(nb10)); //renvoie NaN

// Méthode parseFloat()
/*La base 16 utilise les chiffres de 0 à 9 et les lettres A, B, C, D, E et F pour compter.
"FFF" = 15 * 15 * 15 = 16 * 16 * 16 -1 = 4095 en base 10
La base 2 n'utilise que les chiffres 0 et 1 pour compter */
console.log("Number.parseInt('0F', 16) : " + Number.parseInt('0F', 16));
console.log("Number.parseInt('FFF', 16) : " + Number.parseInt('FFF', 16));
console.log("Number.parseInt('1000', 16) : " + Number.parseInt('1000', 2));

// Méthode toFixed()
let nb11 = 1234.5678;
let tofixed = nb11.toFixed(2);
console.log(tofixed); // renvoie 1234.56
console.log(typeof tofixed);

//Méthode toPrecision()
let nb12 = 1245.450;
console.log('toPrecision() : ' + nb12.toPrecision(2)); //renvoie 1.2e+3
console.log(nb12.toPrecision(4)); //renvoie 1245
console.log(nb12.toPrecision(6)); //renvoie 1245.45

// Méthode toString()
let nb13 = 255;
console.log('toString : ' + nb13.toString(16)); //renvoie ff
let tostring = nb13.toString(16);
console.log(tostring); //renvoie 11111111
console.log(typeof tostring); //renvoie string