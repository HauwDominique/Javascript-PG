// Methode match() en littéral

let p1 = document.getElementById('p1');
let chaine = 'Bonjour, je m\'appelle Pierre';

p1.innerText = 'let chaine = ' + chaine;

let masque1 = /Pierre/; //on recherche "Pierre"
let masque2 = /[A-Z]/; //on recherche la 1ere des majuscules entre A et Z
let masque3 = /[A-Z]/g; //avec le drapeaux g, on recherche toutes les  majuscules entre la lettre A et Z
// let masqueNull = /toto/;

//recherche 'Pierre" dans let chaine et renvoie la premiere correspondance
document.getElementById('p2').innerHTML = 'chaine.match(masque1); = ' + chaine.match(masque1) + ' - //recherche \'Pierre" dans let chaine et renvoie la premiere correspondance' +
    '<br> chaine.match(masque2); = ' + chaine.match(masque2) + ' - //recherche toute majuscule dans chaine et renvoie la 1ere correspondance' +
    '<br> chaine.match(masque3); = ' +  chaine.match(masque3) + ' - //recherche toutes les majuscules dans chaine et renvoie toutes les correspondances'+
    '<br> chaine.match(/toto/); = ' + chaine.match(/toto/) + ' - //renvoie null car n\'a pas trouvé de correspondance';


//Méthode search()
document.getElementById('p4').innerHTML = 'chaine.search(masque1); = ' + chaine.search(masque1) + ' - //search() retourne la position de la premiere correspondance trouvée' +
    '<br> chaine.search(masque2); = ' + chaine.search(masque2) +
    '<br> chaine.search(masque3); = ' + chaine.search(masque3);


//Méthode replace()
let chaine2 = 'bonjour je m\'appelle Pierre et vous ?';
let masque4 = /e/;
let masque5 = /ou/g;

document.getElementById('p5').innerHTML = "chaine2.replace(masque1, 'Jean'); = " + chaine2.replace(masque1, 'Jean') + ' - // remplace Pierre par Jean' +
    "<br> chaine2.replace(masque2, 'E'); = " + chaine2.replace(masque2, 'E') +  ' - // remplace le B de bonjour par E' +
    "<br> chaine2.replace(masque3, 'OU'); = " + chaine2.replace(masque3, 'OU') + ' - // remplace les majuscules trouvées par OU';


//Méthode split();
let chaine3 = "Hello, je m'appelle Bond";
let masque6 = /[,']/;
let sousChaine = chaine3.split(masque6);
console.log('souChaine = ' + sousChaine);

document.getElementById('p6').innerHTML = "letsousChaine = chaine3.split(masque6); = renvoie un tableau contenant 3 éléments à savoir : " +
    "<br> sousChaine[0]; = " + sousChaine[0] +
    "<br> sousChaine[1]; = " + sousChaine[1] + " - // A noter ques les séparateurs ne font plus partie de la chaine renvoyée ;ici  la virgule et l'apostrophe ne sont pas retournées" +
    "<br> sousChaine[2]; = " + sousChaine[2];


//Méthode exec()
let chaine4 = 'bonjour je suis Alain.';
let masque7 = /Alain/;

let resultat = masque7.exec(chaine4); //recherche masque 7 dans chaine 4
console.log(resultat)

let resultat2 = masque7.test(chaine4);
console.log('test() :' + resultat2);


//Divers test=============================================================
let chaineTest = 'un petit enfant';

let resultChaineTest = chaineTest.match(/petit/);
console.log('resultChaineTest = ' + resultChaineTest);

console.log('searchTest = ' + chaineTest.search(/enfant/));
let replaceTest = chaineTest.replace(/petit/, 'grand');
console.log('replaceTest = ' + replaceTest);
console.log('chaineTest = ' + chaineTest);

let splitTest = chaineTest.split(' ');
console.log('splitTest = ' + splitTest);

let execMasq = /enfant/;
let execTest = execMasq.exec(chaineTest);
console.log(execTest);
let testResult = execMasq.test(chaineTest);
console.log('testResult = ' + testResult);