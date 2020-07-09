//LES CLASSES =============================================================================

let chaine1 = "Bonjour, je m'appelle Pierre et vous ?";

let masque1 = /[aeiouy]/; //cherche une voyelle
let masque2 = /j[aeiouy]/g; //cherche "j" suivie d'une voyelle et affiche tous les résultats
let masque3 = /[aeiyou][aeiouy]/g; //cherche une voyelle suivie d'une voyelle

let p1=document.getElementById('p1');

p1.innerHTML = 'chaine1.match(masque1); = ' + chaine1.match(masque1) +
    '<br> chaine1.match(masque2); = ' + chaine1.match(masque2) +
    '<br> chaine1.match(masque3); = ' + chaine1.match(masque3);

// console.log(chaine1.match(masque3))


//LES METACARACTERES ======================================================================

let chaine2 = 'Bonjour, je suis Pierre. Mon numéro est le [06.36.65.65.65]';

let masque4 = /[^aeiouy]/g; //cherche autre chose qu'une voyelle
let masque5 = /[\^aeiouy]/g; //cherche ^ ou une voyelle
let masque6 = /[aei^ouy]/g; //cherche ^ ou une voyelle
let masque7 = /[a-b]o/g; //cherche une lettre minuscule suivie d'un o
let masque8 = /[a-zA-Z]o/g; //cherche une lettre minuscule ou majuscule, suivie d'un o
let masque9 = /[a\-z]/g; // cherche "a", "-", et "z"
let masque10 = /[0-9az-]/g; //cherche un chiffre, "a", "z" et "-"
let masque11 = /[0-9\/\[\]]/g; //cherche un chiffre, "/", "[" et "]"

let p2 = document.getElementById('p2');
p2.innerHTML = 'chaine2.match(masque4); = ' + chaine2.match(masque4) +
    '<br> chaine2.match(masque5); = ' + chaine2.match(masque5) +
    '<br> chaine2.match(masque6); = ' + chaine2.match(masque6) +
    '<br> chaine2.match(masque7); = ' + chaine2.match(masque6) +
    '<br> chaine2.match(masque8); = ' + chaine2.match(masque8) +
    '<br> chaine2.match(masque9); = ' + chaine2.match(masque9) +
    '<br> chaine2.match(masque10); = ' + chaine2.match(masque10) +
    '<br> chaine2.match(masque11); = ' + chaine2.match(masque11);


// CLASSE PREDEFINIES
let chaine3 = "Bonjour, je suis ^Alain^. Mon /numéro/ est le [06.25.25.25.05]";

let masque12 = /\w/g; // un caractère alphanumérique
let masque13 = /\W/g; // tout sauf un caractère alphanumérique
let masque14 = /\d/g; // un chiffre
let masque15 = /[\da-z]/g; // un chiffre ou une lettre minuscule

let p3 = document.getElementById('p3');
p3.innerHTML = 'chaine3.match(masque12); = ' + chaine3.match(masque12) +
                '<br> chaine3.match(masque13); = ' + chaine3.match(masque13) +
                '<br> chaine3.match(masque14); = ' + chaine3.match(masque14) +
                '<br> chaine3.match(masque15); = ' + chaine3.match(masque15);

// META CARACTERE POINT
let chaine4 = 'Bonjour, je suis ^Pierre^. Mon no. est le [06-25-25-25-25]';

let masque16 = /o./g; //un "o" suivi par n'importe quel caractère sauf \n
let masque17 = /o\./g; // un "o" suivi d'un point
let masque18 = /o[.]/g; // "o" suivie d'un point
let masque19 = /[o.]/g; // un "o" ou un point

let p4 = document.getElementById('p4');
p4.innerHTML = 'chaine4.match(masque16); = ' + chaine4.match(masque16) +
            '<br> chaine4.match(masque17); = ' + chaine4.match(masque17) +
            '<br> chaine4.match(masque18); = ' + chaine4.match(masque18) +
            '<br> chaine4.match(masque19); = ' + chaine4.match(masque19);

// LES ALTERNATIVES

let masque20 = /o|j/g; // Un "o" ou un "j"
let masque21 = /[oj]/g; // Un "o" ou un "j"
let masque22 = /Pierre|Jeanne/g; // "Pierre" ou "Jeanne"

let p5 = document.getElementById('p5');
p5.innerHTML = 'chaine4.match(masque20); = ' + chaine4.match(masque20) +
                '<br> chaine4.match(masque21); = ' + chaine4.match(masque21) +
                '<br> chaine4.match(masque22); = ' + chaine4.match(masque22);;


// LES ANCRES
let chaine5 = "Bonjour, je suis Pierre a^$b. Mon no. est le [06.25.25.25.25]";

let masque23 = /^./g; //n'importe quel caractère en début de chaine sauf un \n
let masque24 = /^A-Z/g; //Une majuscule en début de chaine
let masque25 = /.$/g; // N'importe quel caractère en fin de chaine sauf un \n
let masque26 = /a\^\$b/g; // a^$b dans la chaine
let masque27 = /[e$]/g; // e ou $ dans la chaine
let masque28 = /^[^a-b]/g; // Autre chose qu'une minuscule en début de chaine
let masque29 = /^...$/; // Trois caractères sans retour à la ligne, avec le 1er caractère en début de chaine et le dernier en fin de chaine
let masque30 = /.../;

let p6 = document.getElementById('p6');
p6.innerHTML = 'chaine5.match(masque23); = ' + chaine5.match(masque23) +
                '<br> chaine5.match(masque24); = ' + chaine5.match(24) +
                '<br> chaine5.match(masque25); = ' + chaine5.match(masque24) +
                '<br> chaine5.match(masque25); = ' + chaine5.match(masque25) +
                '<br> chaine5.match(masque26); = ' + chaine5.match(masque26) +
                '<br> chaine5.match(masque27); = ' + chaine5.match(masque27) +
                '<br> chaine5.match(masque28); = ' + chaine5.match(masque28) +
                '<br> chaine5.match(masque29); = ' + chaine5.match(masque29) + '- // ici retourne null car la chaine contient plus de 3 caractères.'
                '<br> chaine5.match(masque30); = ' + chaine5.match(masque30);


// LES QUANTIFICATEURS

let masque31a = /er/g;
let masque31 = /er?/g;
let masque32 = /er+/g;
let masque33 = /^[A-Z].{10}/g;
// let masque33b = /[a-z].{10}/g;
let masque34 = /^\d{10,10}/g;

let p7 = document.getElementById('p7');
p7.innerHTML = 'chaine5.match(masque31a); = ' + chaine5.match(masque31a) +
    '<br> chaine5.match(masque31); = ' + chaine5.match(masque31) +
    '<br> chaine5.match(masque32); = ' + chaine5.match(masque32) +
    '<br> chaine5.match(masque33); = ' + chaine5.match(masque33) +
    // '<br> chaine5.match(masque33b); = ' + chaine5.match(masque33b) +
    '<br> chaine5.match(masque34); = ' + chaine5.match(masque34);

let chaine6 = "ary arry arrry";
let masque35 = /ar{0}/g;
let masque36 = /ar{2}/g;
let masque37 = /ar{1,3}/g;
let masque38 = /ar+/g;



let p8 = document.getElementById('p8');
p8.innerHTML = 'chaine6.match(masque35); = ' + chaine6.match(masque35) +
                '<br> chaine6.match(masque36); = ' + chaine6.match(masque36) +
                '<br> chaine6.match(masque37); = ' + chaine6.match(masque37) +
                '<br> chaine6.match(masque38); = ' + chaine6.match(masque38);


// LES SOUS MASQUES
let chaine7 = "Bonjour, Pierre et Alain";

let masque39 = /er|t/g; // Correspondance "er" ou "t"
let masque40 = /e(r|t)/; // Correspondance "er" ou "et" + capture r ou t
let masque40b = /e(r|t)/g; // Correspondance "er" ou "et" + capture r ou t
let masque41 = /Bon(jour)/; // Correspondance "Bonjour" + capture "jour"
let masque42 = /Bon(jour)/g; // Correspondance "Bonjour". Ici pas de capture "jour" car le drapeau g annule cette capture

let p9 = document.getElementById('p9');
p9.innerHTML = 'chaine7.match(masque39); = ' + chaine7.match(masque39) +
    '<br> chaine7.match(masque40); = ' + chaine7.match(masque40) +
    '<br> chaine7.match(masque40b); = ' + chaine7.match(masque40b) +
    '<br> chaine7.match(masque41); = ' + chaine7.match(masque41) +
    '<br> chaine7.match(masque42); = ' + chaine7.match(masque42);


// LES ASSERTIONS
let chaine8 = "Bonjour, Pierre Jacques et Alain";

let masque43 = /e(?=r)/g; // cherche "e" suivi de "r".
let masque44 = /e(?!r)/g; // cherche "e" non suivi de "r"
let masque45 = /(?<=i)e/g; // cherche "e" précédé de "i"
let masque46 = /(?<!i)e/g; // cherche "e" non précédé de "i"

let p10 = document.getElementById('p10');
p10.innerHTML = 'chaine8.match(masque43); = ' + chaine8.match(masque43) +
    '<br> chaine8.match(masque44); = ' + chaine8.match(masque44) +
    '<br> chaine8.match(masque45); = ' + chaine8.match(masque45) +
    '<br> chaine8.match(masque46); = ' + chaine8.match(masque46)

// LES OPTIONS ou DRAPEAUX
let chaine9 = "Bonjour, je suis Pierre\n et mon no. est\n le [06.25.25.25.25]";

let masque47 = /pierre/; // cherche "pierre" exactement
let masque48 = /pierre/i; // cherche "pierre" ou "Pierre", ou "PIERRE", etc;;;
let masque49 = /e$/; // cherche "e" en fin de chaine
let masque50 = /e$/gm; // cherche "e" en fin de chaque ligne
let masque51 = /./gs; // cherche tout caractère et effectue une recherche globale

let p11 = document.getElementById('p11');
p11.innerHTML = 'chaine9.match(masque47); = ' + chaine9.match(masque47) +
                '<br> chaine9.match(masque48); = ' +  chaine9.match(masque48) +
                '<br> chaine9.match(masque49); = ' +  chaine9.match(masque49) +
                '<br> chaine9.match(masque50); = ' +  chaine9.match(masque50) +
                '<br> chaine9.match(masque51); = ' +  chaine9.match(masque51);





