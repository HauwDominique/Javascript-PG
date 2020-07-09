// function Utilisateur(n, a, m) {
//     this.nom = n;
//     this.age = a;
//     this.mail = m;
//
//     this.bonjour = function () {
//         document.getElementById('p1').innerHTML =
//         'Bonjour, je suis ' + this.nom[0] + ' j\ai ' + this.age + ' ans';
//     }
// };
//
// let pierre = new Utilisateur(['Pierre', 'Giraud'], 26, 'pierre@gmail.com');
// pierre.bonjour();
//
// document.getElementById('p2').innerHTML = 'Nom complet = ' + pierre['nom'];
// document.getElementById('p3').innerHTML = 'Prénom = ' + pierre['nom'][0];
//
// let anne = new Utilisateur(['Anne', 'Carambeux'], 30, 'anne.c@gmail.com');
// let jean = new Utilisateur(['Jeans', 'Valjean'], 40, 'valjean.jean@gmail.com');
// console.log(anne);
//
// document.getElementById('p4').innerHTML =
//     'Mail: ' + anne.mail + ' - nom: ' + anne.nom[1] + ' - prénom: ' + anne.nom[0] + ' - age: ' + anne.age + ' ans';
// document.getElementById('p5').innerHTML =
//     'Mail: ' + jean.mail + ' - nom: ' + jean.nom[1] + ' - prénom: ' + jean.nom[0] + ' - age: ' + jean.age + ' ans';
//
// //ajout d'un membre à anne
// anne.taille = 170;
// document.getElementById('p6').innerHTML = anne.nom[0] + ' mesure ' + anne.taille +' cm';
//
// document.getElementById('p7').innerHTML = pierre.nom[0] + ' mesure ' + pierre.taille +' cm';

function User(n, a, m) {
    this.nom = n;
    this.age = a;
    this.mail = m;

    this.bonjour = function(){
        alert('Bonjour, je suis' + this.nom[0] + ', j\'ai ' + this.age + ' ans.');
    }
}

function Fruit(n, e, p){
    this.nom = n;
    this.etat = e;
    this.poids = p;

    this.description = function(){
        document.getElementById('p4').innerHTML = this.nom + ' pèse ' + this.poids + ' kg, et est ' + this.etat;
    }
}

let pierre = new User(['Pierre', 'Giraud'], 30, 'pierre.giraud@gmail.com');
// pierre.bonjour();

document.getElementById('p1').innerHTML = 'Nom complet : ' + pierre.nom;
document.getElementById('p2').innerHTML = 'Prénom : ' + pierre.nom[0];
document.getElementById('p3').innerHTML = 'Age : ' + pierre.age + ' ans.';

let pomme = new Fruit('pomme', 'mure', 5);
pomme.description();
pomme.taille = 170;

document.getElementById('p5').innerHTML = pomme.nom + ' mesure ' + pomme.taille;
document.getElementById('p6').innerHTML = 'taille de Pierre : ' + pierre.taille