// ACCEDER A L'ELEMENT CANVAS
let canvasElt = document.getElementById('c1')
let ctx = canvasElt.getContext('2d');


//STROKESTYLE ET STROKERECT()
let canvas2 = document.getElementById('c2');
let ctxC2 = canvas2.getContext('2d');

ctxC2.strokeStyle = '#4444CC'; //Nuance de bleu
ctxC2.strokeRect(50, 25, 200, 100);

//FILLSTyle et FILLRECT()
let canvas3 = document.getElementById('c3');
let ctxC3 = canvas3.getContext('2d');

ctxC3.fillStyle = "#4444CC"; //Nuance de bleu
ctxC3.fillRect(10, 10, 200, 100);

//CLEARRECT()
let canvas4 = document.getElementById('c4');
let ctxC4 = canvas4.getContext('2d');

ctxC4.fillStyle = "#4444CC"; //Nuance de bleu
ctxC4.fillRect(10, 10, 200, 100);

ctxC4.strokeStyle = "#4444CC";
ctxC4.strokeRect(250, 10, 200, 100);

ctxC4.clearRect(40, 30, 300, 60);

//CREER UNE LIGNE
let canvas5 = document.getElementById('c5');
let ctxC5 = canvas5.getContext('2d');

ctxC5.beginPath();
ctxC5.moveTo(50, 25);
ctxC5.lineTo(250, 125);
ctxC5.lineWidth = 3;
ctxC5.strokeStyle ='#4488EE';
ctxC5.stroke();

// CREER UNE FIGURE CONSTITUEE DE PLUSIEURS LIGNES
let canvas6 = document.getElementById('c6');
let ctxC6 = canvas6.getContext('2d');

//triangle vide bleu
ctxC6.beginPath();
ctxC6.moveTo(10, 125);
ctxC6.lineTo(125, 125);
ctxC6.lineTo(125, 10);
ctxC6.lineTo(10, 125);
ctxC6.lineWidth = 3;
ctxC6.strokeStyle = 'blue';
ctxC6.stroke();
ctxC6.closePath();

//ligne noires verticales
ctxC6.beginPath();
ctxC6.moveTo(135, 10);
ctxC6.lineTo(135, 125);
ctxC6.lineWidth = 5;
ctxC6.strokeStyle = 'black';
ctxC6.stroke();
ctxC6.closePath();

//triangle plein rouge
ctxC6.beginPath();
ctxC6.moveTo(145, 10);
ctxC6.lineTo(145, 125);
ctxC6.lineTo(255, 125);
ctxC6.lineWidth = 3;
ctxC6.fillStyle = 'red';
ctxC6.fill();

// PLUSIEURS LIGNES AVEC ORIGINES DIFFERENTES
let canvas7 = document.getElementById('c7');
let ctxC7 = canvas7.getContext('2d');

ctxC7.beginPath();
ctxC7.moveTo(20, 10);
ctxC7.lineTo(20, 140);

ctxC7.moveTo(50, 30);
ctxC7.lineTo(250, 30);
ctxC7.lineTo(50, 125);
ctxC7.lineTo(250, 125);
ctxC7.lineTo(50, 30);

ctxC7.moveTo(290, 10);
ctxC7.lineTo(290, 140);

ctxC7.lineWidth = 3;
ctxC7.strokeStyle = 'white';
// ctxC7.stroke();

//DESSINER UN CERCLE avec Arc()
let c8 = document.getElementById('c8');
let ctxC8 = c8.getContext('2d');

//Arc de cercle vert
ctxC8.beginPath();
ctxC8.lineWidth = 3;
ctxC8.strokeStyle = 'green';
ctxC8.arc(50,50,35,0.8*Math.PI,2*Math.PI);
ctxC8.stroke();

//cercle complet blanc
ctxC8.beginPath();
ctxC8.fillStyle = 'white';
ctxC8.arc(130, 85, 40, 0,2*Math.PI);
ctxC8.fill();

//Arc de cercle bleu
ctxC8.beginPath();
ctxC8.lineWidth = '3';
ctxC8.strokeStyle = 'blue';
ctxC8.arc(220,50,35,1*Math.PI,.4*Math.PI);
ctxC8.closePath();
ctxC8.stroke();


//arc de cercle avec artTo() - TANGENTE
let c9 = document.getElementById('c9');
let ctxC9 = c9.getContext('2d');

//tangent bleue
ctxC9.beginPath();
ctxC9.lineWidth = 4;
ctxC9.strokeStyle = 'blue';
ctxC9.moveTo(20,20);
ctxC9.arcTo(20,125,250,50,50);
ctxC9.stroke();

//tangent orange
ctxC9.beginPath();
ctxC9.lineWidth = 4;
ctxC9.strokeStyle ='orange';
ctxC9.moveTo(50,20);
ctxC9.arcTo(125,20,350,250,180);
ctxC9.stroke();

//DEGRADE LINEAIRE
let c10 = document.getElementById('c10');
let ctxC10 = c10.getContext('2d');

let lineaire = ctxC10.createLinearGradient(25,25,100,25); //on stocke dans une variable l'emplacement d'un dégradé linaire
lineaire.addColorStop(.5, 'green') // on applique la couleur au dégradé
lineaire.addColorStop(1, 'blue') //// on ajoute une autre couleur au dégradé

ctxC10.fillStyle = lineaire; //on applique cette couleur "lineaire2" au fillStyle
ctxC10.fillRect(25,25,125,100); //on crée la forme rectangle avec fillRect()


let lineaire2 = ctxC10.createLinearGradient(180,25,275,125); //on crée une nouvelle variable contenant l'emplacement d'un degradé linaire
lineaire2.addColorStop(0,'white'); //ajout d'une couleur à cette varible
lineaire2.addColorStop(.5,'yellow'); //ajout d'une couleur à cette varible
lineaire2.addColorStop(1,'red'); //ajout d'une couleur à cette varible

ctxC10.beginPath(); // on indique qu'on démarre une nouvelle forme au canva
ctxC10.moveTo(180,25); // point de départ de cette forme
ctxC10.lineTo(180, 125); // ajout d'un point de transition
ctxC10.lineTo(275,125); // ajout d'un autre point de transition
ctxC10.fillStyle = lineaire2; // ajout du degradé via le fillStyle
ctxC10.fill(); // creation de la forme géometrique


let lineaire3 = ctxC10.createLinearGradient(300,25,450,125);
lineaire3.addColorStop(0,'red');
lineaire3.addColorStop(.4,'orange');
lineaire3.addColorStop(.7,'white');

ctxC10.beginPath(); //on démarre une nouvelle figure
ctxC10.arc(375,80,60,.5*Math.PI,2*Math.PI); //creation d'un arc de cercle
ctxC10.fillStyle = lineaire3; //ajout du degradé à cet arc de cercle
ctxC10.fill(); //cet arc de cercle est plein


//DEGRADE RADIAL
let c11 = document.getElementById('c11');
let ctxC11 = c11.getContext('2d');

let radial1 = ctxC11.createRadialGradient(60,75,10,60,75,50);
radial1.addColorStop(0,'yellow');
radial1.addColorStop(1,'green');
ctxC11.arc(60,75,50,0,2*Math.PI);
ctxC11.fillStyle = radial1;
ctxC11.fill();

let radial2 = ctxC11.createRadialGradient(200,75,30,200,50,50);
radial2.addColorStop(.3,'white');
radial2.addColorStop(1,'red');
ctxC11.beginPath();
ctxC11.fillStyle = lineaire3;
ctxC11.arc(300,75,60,0,2*Math.PI);
ctxC11.fill();


