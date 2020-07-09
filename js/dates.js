// Méthode Date() litterale

document.getElementById('date').innerText = 'Date() = ' + Date();

//Méthode now() date sous forme de nombre
document.getElementById('now').innerText = 'Date.now() = ' + Date.now();

let date1 = new Date();
document.getElementById('sp1').innerText = 'let date1 = new Date() = ' + date1;

let date2 = new Date(1553466000000);
document.getElementById('sp2').innerText = 'let date2 = new Date(1553466000000) = ' + date2;

let date3 = new Date(2019, 0, 25, 12, 30);
document.getElementById('sp3').innerText = 'let date3 = new Date(2019, 0, 25, 12, 30) = ' + date3;

let date4 = new Date('March 23, 2019 20:00:00');
document.getElementById('sp4').innerText = 'let date4 = new Date(\'March 23, 2019 20:00:00\') = ' + date4;

//GETTER de l'objet Date()
let date5 = new Date(2019, 0, 12, 30, 15);

let jourSemaine = date5.getDay();
let jourMois = date5.getDate();
let mois = date5.getMonth();
let annee = date5.getFullYear();
let heures = date5.getHours();
let heuresUTC = date5.getUTCHours();
let minutes = date5.getMinutes();

document.getElementById('getter').innerHTML =
    'let date5 = new Date(2019, 0, 12, 30, 15) = ' + date5 +
    '<br><br>jourSemaine = date5.getDay() = ' + date5.getDay() +
    '<br>jourMois = date5.getDate() = ' + date5.getDate() +
    '<br>mois = date5.getMonth() = ' + date5.getMonth() +
    '<br>annee = date5.getFullYear() = ' + date5.getFullYear() +
    '<br>heures = date5.getHours() = ' + date5.getHours() +
    '<br>heuresUTC = date5.getUTCHours() = ' + date5.getUTCHours() +
    '<br>minutes = date5.getMinutes() = ' + date5.getMinutes();

// SETTER
//on crée une date
let date6 = new Date(2019, 0, 25, 12, 30, 15);
console.log('date6 : ' + date6);

//on modifie la date
date6.setDate(31);
date6.setMonth(11);
date6.setFullYear(2000);
date6.setHours(14);
date6.setMinutes(45);
date6.setSeconds(10);
console.log('dateSET : ' + date6);

document.getElementById('setter').innerHTML =
    'On crée une date : let date6 = new Date(2019, 0, 25, 12, 30, 15) = ' + '<b>' + date5 +'</b>' +
    '<br>On modifie cette date :' +
    '<br>date6.setDate(31)' +
    '<br>date6.setMonth(11)' +
    '<br>date6.setFullYear(2000)' +
    '<br>date6.setHours(14)' +
    '<br>date6.setMinutes(45)' +
    '<br>date6.setSeconds(10)' +
    '<br>pour obtenir : ' + '<b>'+ date6 + '</b>';

// Convertion d'une date au format local
// On crée un date
let date7 = new Date();
console.log('date7 : ' + date7);

let dateLocale = date7.toLocaleString('fr-FR',{
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric'
});
document.getElementById('sp8').innerHTML = 'On crée une date : let date7 = new Date();\n' + '<br>' +
    '<br> let dateLocale = date7.toLocaleString(\'fr-FR\',{\n' +
    '<br>weekday: \'long\',' +
    '<br>year: \'numeric\',' +
    '<br>month: \'long\',\n' +
    '<br>day: \'numeric\',\n' +
    '<br>hour: \'numeric\',\n' +
    '<br>minute: \'numeric\',\n' +
    '<br>second: \'numeric\'\n' +
    '<br>});' +
    '<br><br>' +
    'ce qui donne Date = ' + dateLocale;

let date8 = new Date(2020, 4, 27, 14, 30, 00);
console.log('date8 : ' + date8);
date8.setDate(31);
console.log('date8-setdate : ' + date8);
date8.setMonth(11);
console.log('setMonth : ' + date8);

let date9 = new Date();
console.log('date9 : ' + date9);
let dateLocale9 = date9.toLocaleDateString('fr-FR',{
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
});
console.log('toLcaleDateString : ' + dateLocale9);



