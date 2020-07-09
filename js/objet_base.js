//Création d'un objet LITTERAL (on a définit ses propriétés et méthode lors de sa création
let utilisateur = {
    //nom, age et mail sont des propriétés de l'objet utilisateur
    nom : ['Pierre', 'Giraud'],
    age : 29,
    mail: 'pierre.giraud@edhec.com',

    //bonjour est une méthode de l'objet utilisateur
    bonjour: function () {
        document.getElementById('p1').innerHTML =
            'Bonjour, je suis ' + this.nom[0] + ' et j\ai ' + this.age + ' ans';
    }
};

alert(typeof utilisateur);

utilisateur.bonjour();

utilisateur.age = 39;
utilisateur.bonjour();


//ajout de nouveaux membre dans l'objet utilisateur

utilisateur.taille = 170;
utilisateur.prez = function () {
    alert('Bonjour, je suis ' + utilisateur.nom[0] + ' je mesure ' + utilisateur.taille + ' cm');
};

utilisateur.prez();

utilisateur.nom[1] = 'Belmard';
utilisateur['nom'][0] = 'Jean';
console.log(utilisateur.nom);