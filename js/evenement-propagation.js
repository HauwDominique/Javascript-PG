let d1 = document.querySelector('#d1');
let btn1 = document.querySelector('#btn1');
let p1 = document.getElementById('p1');

d1.addEventListener('click', function () {
    alert('div d1 cliquée')
});

btn1.addEventListener('click', function () {
    p1.textContent = 'On vient de cliquer sur le bouton btn1';
    alert('Le bouton btn1 a été cliqué');
});

// réagir à la phase de capture
let d2 = document.querySelector('#d2');
let btn2 = document.querySelector('#btn2');
let p2 = document.querySelector('#p2');

d2.addEventListener('click', function () {alert('div d2 cliquée')}, true);
btn2.addEventListener('click', function () {p2.textContent = 'on vient de cliquer sur btn2'; alert('Le bouton btn2 a été cliqué')}, true);

//empêcher la propagation d'un évènement===============================================
let d3 = document.getElementById('d3');
let btn3 = document.getElementById('btn3');

//on utilise la phase de bouillenement
d3.addEventListener('click', function () {
    alert('div d3 cliquée')
}, );

btn3.addEventListener('click', cliqueAndStop);

//l'argumnet 'e' sert ici de référence à un objet Event
function cliqueAndStop(e) {
    alert('Btn3 cliqué - Arrêt de la propagation !');
    e.stopPropagation();
};

//Prévenir le comportement de base d'un évènement======================================
let envoi = document.getElementById('btn-envoi');
envoi.addEventListener('click', testDonnees);

function testDonnees(e) {
    let prenom = document.getElementById('prenom').value;
    //si (if...) les données ne remplissent pas certaines conditions, renvoie un message et empêche l'action par défaut de se déclencher
    if(prenom == '') {
        alert('envoie du formulaire bloqué : le champ est vide.');
        e.preventDefault();
        console.log(prenom);
    } else {
        console.log(prenom);
        alert('vous avez saisie ' + prenom);
    }
}