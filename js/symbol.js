//CREATION D'UN SYMBOL
const symbole1 = Symbol();
console.log(symbole1);

const symbole2 = Symbol('symbole2');
console.log(symbole2);

const x42 = Symbol(42);
console.log(x42);

//CREATION D'UN SYMBOL GLOBAL
const symbole3 = Symbol.for('symbole3');
console.log(symbole3);

//RECHERCHE LA CLEF D'UN SYMBOL GLOBAL
const symboleGlobal = Symbol.for('symbole3');
// console.log(symboleGlobal);

const clefSymboleGlobal = Symbol.keyFor(symboleGlobal);
console.log('clefSymboleGlobale = ' + clefSymboleGlobal);


// CAS CONCRET D'UTILISATION DES SYMBOL
const prenom = Symbol('clef1');
const age = Symbol('clef2');

//on crée un nouvel objet utilisateur
let user = {
    [prenom] : 'Jean',
    [age] : 26
};

console.log('user age = ' + user[age]);

user.prenom = 'toto';
console.log('user.prenom = ' + user.prenom);
console.log('user[prenom] = ' + user[prenom]);
user[prenom] = 'Paul';
console.log('user new [prenom] = ' + user[prenom]);

for(let u in user) {
    console.log('array user : ' + u);
}


let users = ['Jean', 'Valjean', 29];

for(let p of users) {
    console.log('tableau users : ' + p);
};

//On crée un objet itérable

let utilisateur = {
    prenom: 'Pierre',
    nom: 'Richard',
    age: 29,

     // Méthode itérateur avec Symbol.iterateur comme clef (ce qui permet de parcourir dans une boucle les valeurs de l'objet
    [Symbol.iterator]() {
        // renvoie un tableau contenant les valeurs des propriétés de l'objet
        let tableau = Object.values(this);
        let prop = 0;

        return{
            next(){
                if(prop < tableau.length){
                    return{
                        value: tableau[prop++],
                        done: false
                    };
                }else{
                    return{
                        value: undefined,
                        done: true
                    };
                }
            }
        };
    }
};

for(let p in utilisateur){
    console.log('in utilisateur : ' + p);
}

// for(let iterateur of utilisateur){
//     console.log("of utilisateur = " + iterateur);
// }