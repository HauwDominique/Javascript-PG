// 2 valeurs primitives
let ch1 = "Une chaine de caractères";
let ch2 = "Une chaine de caractères";

// retourne true
document.getElementById('p1').innerHTML = "ch1 == ch2 ? : " + (ch1 === ch2);

// 3 objets :
let ob1 = {prenom : 'Pierre'};
let ob2 = {prenom : 'Jean'};
let ob3 = ob1;

//false les 2 ojbets ne font pas références aux mêmes  membres
document.getElementById('p2').innerHTML = "ob1 == ob2 ? : " + (ob1 === ob2);
//true car les 2 objets font référence aux mêmes membres
document.getElementById('p3').innerHTML = 'ob1 == ob3 ? : ' + (ob1 === ob3);