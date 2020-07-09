
//méthode include()
let str1 = 'Pierre';
let str2 = 'Pierre Giraud';

//la propriété length renvoie la longueur d'une chaine
document.getElementById('p4').innerHTML = "longueur de str2 : str2.length = " + str2.length;

//la méthode include()
let prez = "Bonjour, je m'appelle Pierre et j'ai 29 ans";

if(prez.includes('Pierre')){
    document.getElementById('sp1').textContent = '"Pierre" est présent dans let prez';
};
if(! prez.includes('pierre')){
    document.getElementById('sp2').textContent = '"pierre" n\'est pas présent dans let prez';
}

//méthode startsWith() et endsWith()
if(prez.startsWith('Bonjour')) {
    document.getElementById('sp3').textContent = 'prez commence par "Bonjour"';
}
if(prez.endsWith('29')){
    document.getElementById('sp3').textContent = 'prez finit par "29"';
}

//méthode substring()
document.getElementById('sp4').textContent = "prez.substring(9) = " + prez.substring(9);
document.getElementById('sp5').textContent = "prez.substring(9, 29) = " + prez.substring(9, 29);

//méthode indexOf()
document.getElementById('sp6').textContent = "indexOf('B') : " + prez.indexOf('B');
document.getElementById('sp7').textContent = "indexof('appelle') : " + prez.indexOf('appelle');

//méthode lastIndexOf()
document.getElementById('sp8').textContent = "lastIndexOf('e') : " + prez.lastIndexOf('e');

//méthode slice()
document.getElementById('pslice').textContent = "prez.slice(9, 29) = " + prez.slice(9, 29);

//méthode replace()
document.getElementById('sp9').textContent = "prez.replace('Pierre', 'Jean') = " + prez.replace('Pierre', 'Jean');