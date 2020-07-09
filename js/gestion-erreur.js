// TRY AND CATCH

// try{
//     alert('Bonjour')
// } catch{
//     alert('Une erreur s\'est produite;')
// };

// try{
//     prenom; //on affiche une variable qui n'a pas été déclarée ;  ce qui va générer une erreur
//     alert('Bonjour');
// } catch (e) {
//     alert('Erreur rencontrée ; ' +
//     '\nNom de l\'erreur : ' + e.name +
//     '\nMessage de l\'erreur : ' + e.message +
//     '\nEmplacement de l\'erreur : ' + e.stack);
// };

//THROW()

// function divThrow() {
//     let x = prompt('Entrez un premier nombre');
//     let y = prompt('entrez un second nombre');
//
//     if(isNaN(x) || isNaN(y) || x == '' || y == '') {
//         throw new Error('Merci de rentrer deux nombres');
//     } else if(y == 0) {
//         throw new Error('Division par 0 impossible !');
//     } else{
//         alert (x + ' divisé  par ' + y + ' = ' + x/y);
//     };
// }

// try{
//     divThrow()
// } catch (e) {
//     alert(e.message);
// };

