let prenoms = ['Pierre', 'Mathilde', 'Jean'];
let produits = ['Livre', 20, 'Ordinateur', 5, ['Magnets', 100]];

document.getElementById('sp1').textContent = 'prenoms[0]; // renvoie : ' + prenoms[0];
document.getElementById('sp2').textContent = 'produits[4][1]; ∕∕renvoie : ' + produits[4][1];

// Afficher un tableau dans notre document html
document.getElementById('showArray').textContent = 'Affichage du tableau : ' + produits;

//boucle for.. of
for(let valeur of prenoms){
    document.getElementById('sp3').innerHTML += valeur + '<br>';
}

//boucle for... in
let pierre = {
    'prenom' : 'Pierre',
    'age' : 29,
    'sport' : 'hockey',
    'cours' : ['Html', 'Css', 'Js']
};

for(let key in pierre){
    document.getElementById('sp4').innerHTML += key + ' : ' + pierre[key] + '<br>';
}

// Méthode Push ()
// on ajoute 2 éléments à prenoms, et on récupère la taille du tableau
let taille = prenoms.push('Alain', 'Paul');
document.getElementById('sp5').innerHTML = 'console.log(taille) // renvoie ' + taille + ' (longueur du tableau prenoms)';

// Méthode Pop()
// on supprime le dernier élément du tableau. la méthode pop() supprimer le dernier élément du tableau, et retourne l'élément supprimé.
let del = prenoms.pop();
document.getElementById('sp6').innerHTML = '"' + del + '"' + ' supprimé du tableau prenoms. <br>' +
'console.log(prenoms.length) : renvoie : ' + prenoms.length;

prenoms.push('toto');
console.log(prenoms.length);

// Méthode unshift() et méthode shift()
let age = [20, 29, 33];
age.unshift(15);
console.log('age : ' + age[0]);
console.log('age long : ' + age.length);

let agesup = age.shift();
console.log('agesup : ' + agesup);
console.log('age long : ' + age.length);

// Méthode splice()
// on insère 2 prénom dans le tableau prénomns, après le 2e éléments et sans supprimer d'éléments
prenoms.splice(2, 0, 'Thomas', 'Manon');
console.log(prenoms);

// On supprime dans le tableau age, 2 elets après le 1er et on insère 35 après le 1er
let age2 = [29, 27, 28, 30];
console.log('avant splice : ' + age2) //renvoie 29, 27, 28, 30;
let agesplice = age2.splice(1, 2, 35) ;
console.log('après splice : ' + age2) // renvoie 29, 35, 3;
console.log('elements supprimés : ' + agesplice) //renvoie 27, 28;

// Méthode join()

document.getElementById('spjoin').textContent = prenoms.join(' - ');

// Méthode slice()
console.log('array' + prenoms);
let sliceprenoms = prenoms.slice(2, 4);
console.log('splice : ' + sliceprenoms);
console.log(sliceprenoms.join(' / '));

document.getElementById('spSlice').innerHTML = "let prenoms = ['Pierre', 'Mathilde', 'Thomas', 'Manon', 'Jean', 'Alain', 'toto']" +
    "<br>" + "let sliceprenoms = prenoms.slice(2, 4); //renvoie Thomas, Manon" +
    "<br>" + "sliceprenoms.join(' / ') //renvoie : Thomas / Manon ";

// Méthode concat()
let concat = prenoms.concat(age);
document.getElementById('concat').innerText = "concat.join(' - ') renvoie : " + concat.join(' - ');


// Méthode includes()
let include = prenoms.includes('Jean');
console.log(include);

//__________________________________________________________
//for of
let game = ['xbox', 'ps4', 'switch'];
for(let i=0; i<game.length; i++) {
    result = [i+1] + ' : ' + game[i];
    console.log(result);
}

let arraytest = [];
for(let key of game){
    console.log('for of : ' + key);
    arraytest.push(key);
    let toto = arraytest.join('/');
    console.log('arrayTest : ' + arraytest);
    console.log('toto : ' + toto);
}

//for in
let ustensile = {
    01: 'couteau',
    02: 'fournchette',
    03: 'cuillère'
};
console.log(ustensile);

for(key in ustensile){
    console.log(key + ' : ' + ustensile[key]);
}