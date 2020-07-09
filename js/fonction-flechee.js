// DECLARATION DE FONCTION

function disBonjour(){
return 'Bonjour';
};

let p1 = document.getElementById('p1');
p1.innerText = "disBonjour();  // " + disBonjour();


// EXPRESSIONS DE FONCTION

let disAurevoir = function () {
    return "Au revoir";
};

let sayGoodBye = function goodBye(nom) {
    if(nom) {
        return "Good Bye " + nom;
    } else {
        return goodBye('inconnu');
    }
};

let p2 = document.getElementById('p2');
p2.innerHTML = "disAurevoir();  // " + disAurevoir() +
    "<br> sayGoodBye('Jean');  // " + sayGoodBye('Jean') +
    "<br> sayGoodBye();  // " + sayGoodBye();


// FONCTIONS FLECHEES

let somme = function (a,b) {
    return a + b;
};

let sommeFleche = (a,b) => a + b;
let sommeFlecheOneArg = a => a * 2;

let p3 = document.getElementById('p3');
p3.innerHTML = "somme(1,2); // " + somme(1,2) +
    "<br> sommeFleche(2,4); // " + sommeFleche(2,4) +
    "<br> sommeFlecheOneArg(5); // " + sommeFlecheOneArg(5);


// THIS

// This dans une méthode Objet
let banner = {
    nom: 'Banner',
    prenom: 'David',
    hobbies: ['sciences', 'technologie'],

    getFullName() {
        return this.nom + ' ' + this.prenom;
    }
};
console.log('objet : ' + banner.getFullName());

//THIS en dehors d'une méthode objet

let pierre = {name: 'Pierre'};
let jean = {name: 'Jean'};

function sayHello(){
    return "Bonjour " + this.name;
};

pierre.bonjour = sayHello; //ici on associe la fonction js sayHello à la clef "bonjour" de l'objet pierre. Cette clef "bonjour" devient implicitement une méthode associée à cet objet
jean.bonjour = sayHello;
console.log('pierre : ' + pierre.bonjour()); // on appelle la méthode bonjour() associée implicitement à l'objet pierre
console.log('jean : ' + jean.bonjour());


//FONCTION FLECHEE DANS UN OBJET
let alain = {
    nom: 'Croyable',
    prenom: 'Alain',

    disBonjour(){
        let bonjour = () => alert('Bonjour ' + this.prenom + ' ' + this.nom);
        bonjour();
    }
};

// alain.disBonjour();





