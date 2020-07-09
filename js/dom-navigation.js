let p1 = document.getElementById('p1');
console.log(p1);
let p2 = document.getElementById('p2');

//on accède au noeud parent
p2.parentNode.style.backgroundColor = 'RGBa(240,160,000,0.5)';

//on accède à tous les noeuds enfant de p1. ChildNodes renvoie une NodeList
let enfantsP1 = p1.childNodes;

//on utilise ensuite une boucle forEach() pour les manipuler, ou un indice pour manipuler un seul noeud enfant
enfantsP1[1].style.color = 'blue';

/*on accède au noeud enfant élément seulement de p1;
children renvoie une HTMLCollection */
let enfantEltP1 = p1.children;
console.log(enfantEltP1);
//on accède ensuite aux différents enfants comme pour un tableau
enfantEltP1[0].style.textDecoration = 'underline';

//accèder au 1er noeud enfant de body
let bodyFirstChild = document.body.firstChild;
console.log('firstCHild : ' + bodyFirstChild);

//accèder au dernier noeud enfant de body
let bodyLastChild = document.body.lastChild;
console.log('lastChild : ' + bodyLastChild);

//accèder au 1er enfant de ul1
let ul1 = document.getElementById('ul1');
let ul1FirstChild = ul1.firstChild;
console.log('ul1FirstChild : ' + ul1FirstChild);

//accèder au 1er noeud élément de ul1
let ul1FirstEltChild = ul1.firstElementChild;
console.log('ul1FirstEltChild : ' + ul1FirstEltChild)

//dernier noeux enfant élément de body
let bodylastElementChild = document.body.lastElementChild;
console.log('blodyLastElementChild : ' + bodylastElementChild);

let sp1 = document.getElementById('sp1');
sp1.innerHTML = 'let sp1 = document.getElementById(\'sp1\');' +
    '<br>Nom du noeud = sp1.nodeName // renvoie : ' + sp1.nodeName +
    '<br>Valeur du noeud = sp1.nodeValue // renvoie : ' + sp1.nodeValue + ' car sp1 est un paragraphe vide qui se remplie ensuite par le js' +
    '<br>Type de noeud = sp1.nodeType // renvoie : ' + sp1.nodeType;

let h3 =  document.getElementById('h3');
console.log('h3 : ' + h3);
console.log(h3.nodeValue);

let p1PreviousElementSibling = p1.previousElementSibling;
console.log('p1PreviousElementSibling : ' + p1PreviousElementSibling);
console.log('p1PreviousElementSibling nodeName :' + p1PreviousElementSibling.nodeName);
console.log('p1PreviousElementSibling nodeValue : ' + p1PreviousElementSibling.nodeValue);

console.log('p1FirstChildNodeValue : ' + p1.firstChild.nodeValue);
console.log('p1FirstCHildNodeName : ' + p1.firstChild.nodeName);

let sp2 = document.getElementById('sp2');
sp2.innerHTML = 'let p1 = document.getElementById(\'p1\');' +
    '<br>Nom du noeud : p1.nodeName // renvoie :  ' + p1.nodeName +
    '<br>noeud enfant de p1 : p1.firsChild (ici la balise spans) = ' + p1.firstChild +
    '<br>Valeur du 1er enfant de p1 : p1.firstChild.nodeValue = ' + p1.firstChild.nodeValue
;