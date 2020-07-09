// javascript orienté OBJET ----------------------

function LigneObjet(nom, longueur){
    this.nom = nom;
    this.longueur = longueur;

    this.taille = function(){
        document.getElementById('p1').innerHTML +=
            'Longueur de ' + this.nom + ' : ' + this.longueur + '<br>'
    };
}

let result = new LigneObjet('Jean', 10);
result.taille();



//javascript orienté CLASS ------------------------

class Ligne{

    constructor(nom, longueur){
        this.nom = nom;
        this.longueur = longueur;
    }

    taille(){document.getElementById('p2').innerHTML +=
        'Longueur de ' + this.nom + ' : ' + this.longueur + '<br>'
    };
}

let geo1 = new Ligne('geo1', 5);
let geo2 = new Ligne('geo2', 15);

geo1.taille();
geo2.taille();

class Rectangle extends Ligne{

    constructor(nom, longueur, largeur) {
        super(nom, longueur); //Ce mot clef "super" Appelle le constructeur parent
        this.largeur = largeur;
    }

    aire(){document.getElementById('p3').innerHTML =
        'Aire de ' + this.nom + ' : ' + this.longueur * this.largeur + '<br>'
    };
}

let geo3 = new Rectangle('Geo3', 10, 20);
geo3.aire();
geo3.taille();