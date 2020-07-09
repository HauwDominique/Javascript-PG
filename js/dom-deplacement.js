let li1 = document.getElementById('li1');
let p1 = document.getElementById('p1');
let newP = document.createElement('p'); //on créé un nouveau noeud
newP.textContent = 'paragraphe newP remplaçant le paragraphe p2 en javascript';


//méthode de clonage
let cloneP1 = p1.cloneNode(true);
li1.appendChild(cloneP1);

//méthode de remplacement
let li2 = document.getElementById('li2'); //on cible li2
let p2 = document.getElementById('p2'); //on cible l"élément à remplacer
li2.replaceChild(newP, p2);

//suppression d'un noeud
let sp2 = document.getElementById('sp2');
sp2.remove();

//méthode de suppression d'un noeud enfant
let li3 = document.getElementById('li3'); //on cible li3 comme parent
let p3 = document.getElementById('p3'); //on cible l'élément p3 à supprimer
let eltDel = li3.removeChild(p3); //on indique que l'on supprime p3 de li3
console.log(eltDel);

