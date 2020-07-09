// PARAMETRES DU RESTE

let nom = "Banner", prenom = "David";
let p1 = document.getElementById('p1');


function profil(nom, prenom, ...hobbies) {
    let h = '';
    for(hobbie of hobbies){
        h += hobbie + ' - ';
    }
    return nom + ' ' + prenom + ' : ' + h;
}

//on stocke dans profilBanner, le résultat de la fonction avec les parametres du reste;
let profilBanner = profil('Banner', 'Bruce', 'physique', 'technologie');
p1.innerHTML = "Appel de la fonction profil, avec les arguments de Banner : <br>" +
                profilBanner;

// OPERATEUR DE DECOMPOSITION

console.log(Math.max(5, 10, 20, 15));
let tb1 = [2, 3, 4, 5];
console.log(Math.min(tb1));

console.log(Math.min(...tb1));
