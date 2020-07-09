/* Tout comme pour les boucles, les fonctions récursives vont nous permettre d’exécuter une action en boucle
et jusqu’à ce qu’une certaine condition de sortie soit vérifiée.
 */

function decompte(t) {
    if(t > 0) {
        document.getElementById('p1').innerHTML += 'decommpte : ' + t + '<br>';
        return decompte(t -=1);
    } else{
        return t;
    };
};

decompte(5);