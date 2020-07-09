
// Création d'un nouveau noeud
let newP = document.createElement('p');

//on insère du texte dans ce nouvel élément
newP.textContent = 'Voici le résultat d\'un "paragraphe créé et inséré grâce au javascript";';

// création direct d'un noeud type texte
let newText = document.createTextNode('Paragraphe crée et inséré avec textNode()'); //attention, ne crée par d'élément html, mais uniquement un élément text

//insertion du nouveau noeud après un noeud existant (ici la div d'id=append)
let appendDiv = document.getElementById('append');
appendDiv.append(newP);

appendDiv.style.fontStyle = 'italic';
// console.log('appendDiv : ' + appendDiv.nodeType);
// console.log('appendDiv : ' + appendDiv.nodeName);

//insertion avant le premier enfant
appendDiv.prepend(newText);


//DIFFERENCE ENTRE APPEND() ET APPENDCHILD()==============================

let divAppend2 = document.getElementById('divAppend2');
let newP2 = document.createElement('p');
let newTexte2 = document.createTextNode('Texte créé avec createTextNode et appendChild');

// newP2.textContent = 'paragraphe crée et inséré avec du javascript';

//ceci fonctionne
divAppend2.append(newP2, 'Texte inséré avec append()');

//ceci fonctionne aussi
divAppend2.appendChild(newTexte2);

//méthode insertAdjacent()
let sp4 = document.getElementById('sp4');
let newP4 = document.createElement('p');
let htmlContent = '<strong> et du texte important créé avec htmlContent et inséré en JS</strong>';

newP4.textContent = 'Un paragraphe P4 stocké dans la variable sp4, créé en JS';
sp4.insertAdjacentElement("afterbegin", newP4);
sp4.insertAdjacentHTML("beforeend", htmlContent);





