// 1 - Création du constructeur PARENT
function Ligne(longueur) {
    this.longueur = longueur;
};

Ligne.prototype.taille = function () {
    document.getElementById('p1').innerHTML = 'Longueur = ' + this.longueur;
};

// 2 - Création d'un constructeur ENFANT "Rectangle" héritant du parent "Ligne"
function Rectangle(longueur, largeur) {
    Ligne.call(this, longueur); //hérite du parent Line pour la longueur
    this.largeur = largeur;
};

Rectangle.prototype = Object.create(Ligne.prototype); //creation d'un objet grâce au prototype de ligne et on l'assigne à rectangle
Rectangle.prototype.constructor = Rectangle; //on réaffecte la propriété "constructor" de prototype de Rectangle
//création de la méthode "aire" via le prototype de Rectangle
Rectangle.prototype.aire = function () {
    document.getElementById('p2').innerHTML =
        'Aire : ' + this.longueur * this.largeur;
};

function Parallelepipede(longueur, largeur, hauteur) {
    Rectangle.call(this, longueur, largeur);
    this.hauteur = hauteur;
};

Parallelepipede.prototype = Object.create(Rectangle.prototype);
Parallelepipede.prototype.constructor = Parallelepipede;
Parallelepipede.prototype.surface = function () {
    document.getElementById('p3').innerHTML =
        'Surface = ' + this.longueur * this.largeur * this.hauteur;
};

let geo = new Parallelepipede(5, 4, 3);
geo.surface();
geo.aire();
geo.taille();


//A REVOIR ET COMPRENDRE : REAFFECTATION DE LA PROPRIETE CONSTRUCTOR