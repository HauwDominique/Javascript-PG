// VARIABLE GLOBALE ET LOCALE
let x = 5;

let portee1 = function () {
    let y = 10;
    return "portee1() = " + (x + y);
};
console.log(portee1());

let portee2 = function () {
    x = 100;
    return "portee2() = " + x;
};
console.log(portee2());

//LES CLOSURES

function compteur() {
    let count = 0;

    return function(){
        return count++;
    };
}
let plusUn = compteur();

console.log('plusUn-v1 = ' + plusUn());
console.log('plusUn-v2 = ' +plusUn());

let plusUnbis = compteur();
console.log('plusUnbis = ' + plusUnbis());

console.log('plusUn-v3 = ' +plusUn());

