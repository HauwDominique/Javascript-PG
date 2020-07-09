let sp1 = document.getElementById('sp1');
let vide = document.getElementById('vide');

let noeudP1 = document.createElement('span');
noeudP1.textContent = ' // Ce paragraphe a un attribut';
noeudP1.style.fontStyle = 'italic';

let noeudP2 = document.createElement('p');
noeudP2.textContent = ' // Ce paragraphe n\'a pas d\'attribut';

if(sp1.hasAttributes()){
    sp1.append(noeudP1);
} else {
    sp1.append(noeudP2);
};

/*Si sp1 possède des attributs, hasAttributes() renvoie true et exécute le code de la condition */
if(sp1.hasAttributes()) {
    vide.textContent = 'sp1 possède des attributes';
};

//si sp1 possède un attribut id, hasAttribute(à renvoie true
if(sp1.hasAttribute('id')) {
    vide.textContent += ' dont un attribut id';
}

//Récupérer valeur attribut
let p2 = document.getElementById('p2');
let vide2 = document.getElementById('vide2');

if(p2.hasAttributes()){
    let attP1 = p2.attributes; //Liste des attributs de p1
    for(attr of attP1) {
        vide2.innerHTML += attr.name + ' = ' + attr.value + ' - ';
    }
}


let p3 = document.getElementById('p3');
let vide3 = document.getElementById('vide3');
if(p3.hasAttributes()) {
    //on récupère le nom des attributs dans un tableau
    let attP3 = p3.getAttributeNames();
    console.log('attP3 : ' + attP3);
    vide3.innerHTML = 'Attribut de p3 : <br>';

//    on boucle
    for(attr of attP3) {
        let valeur = p3.getAttribute(attr);
        vide3.innerHTML += attr + ' = ' + valeur + ' - ';
    };
}

//ajouter et ou modifier un attribut
let p4 = document.getElementById('p4');
let p4child = document.createElement('p');
p4.setAttribute('class', 'red');
let p4Attr= p4.getAttributeNames();
p4child.innerText = 'attribut de p4 : ' + p4Attr[1] + ':' + p4.className;

p4.append(p4child);

//suppression d'un attribut
let p5 = document.getElementById('p5');
let attrP5 = p5.getAttributeNames();
console.log('attrP5 : ' + attrP5);
p5.removeAttribute('class');
let attrP5bis = p5.getAttributeNames();
console.log('attrP5 : ' + attrP5bis);

//Toogle
let p6 = document.getElementById('p6');
let btn6 = document.getElementById('btn6');
btn6.addEventListener('click', function () {
    p6.toggleAttribute('readOnly');
});

//style
let p7 = document.getElementById('p7');
p7.style.color = 'blue';
p7.style.fontWeight = 'bold';
p7.style.fontStyle = 'italic';





