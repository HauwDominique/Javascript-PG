document.getElementById('sp1').innerText = 'Taille de la  fenêtre interne (window.innerHeight * window.innerWidth) : ' + window.innerHeight + ' * ' + window.innerWidth

document.getElementById('sp2').innerText = 'Taille de la  fenêtre externe (window.outerHeight * window.outerWidth) : ' + window.outerHeight + ' * ' + window.outerWidth;

// Méthodes pour afficher des boites de dialogues

let b1 = document.getElementById('b1');
let b2 = document.getElementById('b2');
let b3 = document.getElementById('b3');
let b4 = document.getElementById('b4');
let b5 = document.getElementById('b5');
let b6 = document.getElementById('b6');
let b7 = document.getElementById('b7');
let b8 = document.getElementById('b8');
let b9 = document.getElementById('b9');

let winSize = 'width=300, height=300';

b1.addEventListener('click', openWindow);
b2.addEventListener('click', resizeWindowBy);
b3.addEventListener('click', resizeWindowTo);
b4.addEventListener('click', moveWindowBy);
b5.addEventListener('click', moveWindowTo);
b6.addEventListener('click', scrollWindowBy);
b7.addEventListener('click', scrollWindowTo);
b8.addEventListener('click', closeWindow);
b9.addEventListener('click', openPrompt);


//on définit la méthode openWindow()
function openWindow(){
//    on récupère l'information renvoyé par open() dans une variable fenêtre
    fenetre = window.open('http://localhost:63342/JS/pierreGiraud-tuto/boucle.html?_ijt=flq2f8u2hcb6dju2uuu2nln2u7', '', winSize);
};

function resizeWindowBy(){
    fenetre.resizeBy(200, 100);//augmente A CHAQUE CLIC, la taille de 200px de large et 100px de haut.
};
function resizeWindowTo(){
    fenetre.resizeTo(250, 200);//redimensionne la taille de la fenêtre
};
function moveWindowBy(){
    fenetre.moveBy(100, 100);//A CHAQUE CLIC, déplace la  fenêtre
};
function moveWindowTo(){
    fenetre.moveTo(0, 0);//repositionne la fenetre par rapport au coin haut gauche
};
function scrollWindowBy(){
    fenetre.scrollBy(0, 100);//A CHAQUE CLIC Défile de 200px vers le bas
};
function scrollWindowTo(){
    fenetre.scrollTo(0, 0);//remonte en haut de la page
}
function closeWindow(){
    fenetre.close();//Fermel la fenêtre
}

// Méthode prompt()
function openPrompt(){
    let name = prompt('Quel est votre nom ?');
    alert('Vous vous appelez : ' + name);
};

// Méthode confirm()
// if(confirm('Ouvrir une fenêtre Google ?')){
//     fenetre = window.open('https://www.google.fr/?gws_rd=ssl');
// };

document.getElementById('sp3').innerHTML = "if(confirm('Ouvrir une fenêtre Google ?)){" +
    "<br>fenetre = window.open('https://google.fr';" +
    "<br>)};"
