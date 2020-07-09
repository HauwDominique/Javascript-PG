
let a = 0;


//Boucle while (la boucle s'execute que si la condition est vraie)
while(a < 3) {
    document.getElementById('p1').innerHTML +=
        'a stocke la valeur ' + a + ' au passage n° ' + (a+1) +'<br>';
    a++;
    console.log ('toto '+ a);
};

//boucle do... while
/* ici on rentre dans la boucle, alors que la condition est fausse dès le départ (x est supérieur à 5.
La boucle s'exécute donc une fois quand même */

let x = 6;

do{
    document.getElementById('p2').innerHTML =
        'x stocke la valeur '+ x + ' au tour n° ' + x + '<br>';
    x++;
} while(x<5);

//boucle For

for(let i=0 ; i<3; i++) {
    document.getElementById('p3').innerHTML +=
        'i stocke la valeur ' + i + ' lors du tour n° ' + (i+1) +'<br>';
};

//l'instruction "continue"
for(let i = 0; i<=8; i++) {
    if(i%2 !=0) {
        continue;
    }
    document.getElementById('p4').innerHTML +=
        'i stocke la valeur ' + i + ' au tour n° ' + (i+1) +'<br>';
};

//l'instruction "break"
for(let i=0; i<100; i++) {
    if(i == 4) {
        break;
    }
    document.getElementById('p5').innerHTML +=
        'i stocke la valeur ' + i + ' au tour n° ' + (i+1) + '<br>';
}
