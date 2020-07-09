//On crée une function constructeur Utilisateur , SANS AJOUT D'UNE METHODE et du membre taille

function Utilisateur(n, a, m){
    this.nom = n;
    this.age = a;
    this.mail = m;
};

//On ajoute des propriétés et méthode au prototype de Utilisateur
Utilisateur.prototype.taille = 170;
Utilisateur.prototype.bonjour = function () {
    alert('Bonjour, je suis ' + this.nom[0] + ' et je mesure ' + this.taille + ' cm');
};

//On crée 2 objet : Pierre et Jean
let pierre = new Utilisateur(['Pierre', 'Palmade'], 45, 'palmage@gmail.com');
let jean = new Utilisateur(['Jean', 'VeuxEncore'], 48, 'plus@gmail.com');
console.log(pierre);

//héritage et hierarchie d'objet javascript

// 1- création du constructeur PARENT Ligne

function Ligne(longueur){
    this.longueur = longueur;
}
//ajout à ce constructeur Ligne d'une méthode taille via le prototype
Ligne.prototype.taille = function(){
    document.getElementById('p1').innerHTML = 'Longueur : ' + this.longueur;
}

// 2 - création du constructeur ENFANT rectangle (qui va hériter du constructeur parent Ligne pour sa propriété longueur)

function Rectangle(longueur, largeur){
    Ligne.call(this, longueur);
    this.largeur = largeur;
}

Rectangle.prototype = Object.create(Ligne.prototype);
Rectangle.prototype.constructor = Rectangle;
Rectangle.prototype.aire = function () {
    document.getElementById('p2').innerHTML = 'Aire : ' + this.largeur * this.longueur;
};

// 3 - Création d'un constructeur enfant Parallelepipede
function Parallelepiped(longueur, largeur, hauteur) {
    Rectangle.call(this, longueur, largeur);
    this.hauteur = hauteur;
};
Parallelepiped.prototype = Object.create(Rectangle.prototype);
Parallelepiped.prototype.constructor = Parallelepiped;
Parallelepiped.prototype.surface = function(){
    document.getElementById('p3').innerHTML = 'Surface : ' + this.longueur * this.largeur * this.hauteur;
};

let geo = new Parallelepiped(5, 4, 3);
geo.taille();
geo.aire();
geo.surface();
