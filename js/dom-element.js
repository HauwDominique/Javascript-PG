//On cible dans le document la div de class="exo1"
let divExo1 = document.querySelector('div.exo1');
console.log(divExo1);

//on cible ensuite dans cette div, le titre h3 et on en change son contenu text
divExo1.querySelector('h3').textContent ='H3 - Test avec le sélecteur CSS';

//on cible la div présente dans divExo1
let divExo1div = divExo1.querySelector('div');
console.log(divExo1div);

// sélectionne le 1er paragraphe de divExo1div et change sa couleur
divExo1div.querySelector('p').style.color = 'blue';

//sélectionne tous les paragraphes de divExo1
let allParasExo1 = divExo1.querySelectorAll('p');

//utilisation de forEach() sur l'objet NodeList de allParasExo1
allParasExo1.forEach(function (nom, index) {
    nom.textContent += ' - (paragraphe n° : ' + index + ')';
});

//sélectionne l'élémnet avec un id = p1
document.getElementById('p1').style.color = 'red';

//sélectionne l'élément avec un className Attention, retourne un tableau qu'il faut ensuite traiter
let bleu = document.getElementsByClassName('bleu');
for(valeur of bleu) {
    valeur.style.color = 'blue';
}

//sélectionne tous les élémnents p de la div Exo1
let parasExo1 = divExo1.getElementsByTagName('p');
console.log(parasExo1);
for(valeur of parasExo1) {
    valeur.style.color = 'orange';
}

//sélectionne l'élémnet body et applique une couleur jaune
// document.body.style.color = 'yellow';

//modifie le texte de l'élément title
document.title = "Document Objet Model en détail"


//exo2 ===========================================================

//accède au contenu html interne de la div exo2 et la modifie
let divExo2 = document.querySelector('div.exo2');
console.log(divExo2);
divExo2.innerHTML += '<ul>' +
    '<li>ajout avec innerHtml dans la div exo2</li>' +
    '<li>un autre ajout avec innerHtml</li><' +
    '/ul>';

//accède au 1er  paragraphe de exo2 et le modifie
divExo2.querySelector('p').outerHTML = '<h4>Je suis un titre transformé avec outerHtml</h4>';

// ∕Accède au texte (visible ou non) de l'élément avec l'id p2
let texteEntier = document.getElementById('p2').textContent;
console.log(texteEntier);

// ∕Accède au texte (visible) de l'élément avec l'id p2
let texteVisible = document.getElementById('p2').innerText;
console.log(texteVisible);
