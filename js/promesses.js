// Creation d'une promesse

function loadScript(src) {
    return new Promise((resolve, reject) => {
        let script = document.createElement('script');
        script.src = src;
        document.head.append(script);
        script.onload = () => resolve('Fichier ' + src + ' bien chargé');
        script.onerror = () => reject(new Error('Echec de chargement de ' + src));
    });
};

const promesse1 = loadScript('js/navigator.js');
// const promesse2 = loadScript('script2.js');

// promesse1.then(
//     function (result) {alert(result);},
//     function (error) {alert(error);}
// );
//
// promesse1.then(result => console.log('result : ' + result), error => alert(error));
// promesse2.then(result => alert(result), error => alert(error));

// promesse1.then(alert);
// promesse1.catch(console.log('promesse1 erreur'));
// promesse2.catch(alert);

// then() et catch() ensemble
// const promesse2 = promesse1.then(result => alert(result), error => alert(error));

// Chainage des promesses

// loadScript('js/navigator.js')
// .then(function (result) {
//     return loadScript('js/script2.js', result);
// })
// .then(function (result2) {
//     return loadScript('js/script3.js', result2);
// })
// .catch(alert);

//équivaut aussi a
// loadScript('js/navigator.js').then(result => loadScript('js/script2.js', result))
// .then(result2 => loadScript('js/script3.js', result2))
// .catch(alert)
//     .then(()=> console.log('après le catch'));

// ASYNC

// async function bonjour() {
//     return 'Bonjour';
// };
// console.log(bonjour());
// bonjour().then(alert);

// AWAIT

// async function test() {
//     const promise = new Promise((resolve, reject) => {
//         setTimeout(() => resolve('Ok, function test achevée !'), 2000)
//     });
//
//     let result = await promise; //Attend que la promesse soit résolue ou rejetée
//     console.log(result);
// };
//
// test();

// ASYNC AVEC AWAIT

// async function asyncAwait() {
//     const test1 = await loadScript('js/navigator.js');
//     alert(test1);
//     const test2 = await loadScript('js/script3.js');
//     alert(test2);
// };

// asyncAwait();

// function testOut(nbre){
//         setTimeout(() => console.log('testOut() ' + nbre + ' chargée'), 2000);
//     };

// async function test2() {
//     const promise1 = await testOut(1);
//     alert(promise1);
//     const promise2 = await testOut(2);
//     alert(promise2);
// };
//
// test2();
// testOut(1);
//
// ASYNC AWAIT ET TRY AND CATCH
// async function test3() {
//     try{
//         const test1 = await loadScript('js/navigator.js');
//         alert(test1);
//         const test2 = await loadScript('js/script3.js');
//         alert(test2);
//         const test3 = await loadScript('js/toto.js');
//         alert(test3);
//     } catch(err){
//         alert(err);
//         let script =  document.head.lastChild;
//         script.remove(); //supprime le script ajouté, si il y a une erreur
//     }
// };
//
// test3();

// async function test4() {
//     try{
//         let promise1 = await testOut(1);
//         console.log(promise1);
//         let promise2 = await testOut(2);
//         console.log(promise2);
//     }catch(err){
//         console.log(err);
//     }
// };

// test4();

//TEST SETIMEOUT AVEC NOMBRE et ASYNC et AWAIT

// on crée une function qui retourne un chiffre aléatoire entre 0 et 100

function getNumber() {
        return Math.round(Math.random()*100);
};
// console.log('getNumber =' + getNumber());

// 1 - on créé une function qui va renvoyer une PROMESSE. Cette fonction ajout un setTimeOut sur la fonction getNubmer()
function getNumberPromise(){
    return new Promise((resolve, reject) =>{
        setTimeout(()=>{resolve(getNumber())}, 1000);

        ()=>reject(new Error('Echec de la promesse')); // A VOIR SI CETTE LIGNE DE CODE EST CORRECTE
    });
};

// 2 - on crée une fonction asynchrone qui va exploiter le résultat de la promesse
async function additonNumber() {
    console.log('calling additionNumber'); //ici le code s'éxécute de suite

    try{
        const result1 = await getNumberPromise(); //ici le code attend le résultat de la promesse
        console.log('nombre1 = ' + result1);

        const result2 = await getNumberPromise();
        console.log('nombre2 = ' + result2); //ici le code attend le résultat de la promesse

        let addition = result1 + result2;
        console.log(addition);
        alert('resultat addition = ' + addition);
    } catch(err){
        console.log(err);
    }
};

additonNumber();

