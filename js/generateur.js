// CREATION D'UNE FONCTION GENERATRICE

function* generateSequence() {
    yield 1;
    yield "toto";
    yield ['Jean', 'Pierre'];
};

// CREATION DU GENERATEUR (stocké dans un objet)

let generateur = generateSequence();
let un = generateur.next();
let string = generateur.next()
let array = generateur.next()
console.log(un);
console.log(string);
// console.log(array);
// for(let p in array){
//     console.log(p);
// }
//
// let value =  array.value;
// console.log(value);
//
// for(val of value){
//     console.log(val);
// }

//DELEGATION AVEC YIELD*

function* generateSequence1(){
    yield 10;
    yield 20;
};

function* generateSequence2() {
    yield 30;
    yield* generateSequence1();
    yield 40;
};

let generateur2 = generateSequence2();
let trente = generateur2.next();
let yielSeqdGen1 = generateur2.next();
let yieldSeqGen2 = generateur2.next();
let yieldSeqGen3 = generateur2.next();
console.log(trente);
console.log(yielSeqdGen1);
console.log(yieldSeqGen2);
console.log(yieldSeqGen3);

