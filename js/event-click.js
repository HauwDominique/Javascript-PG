let d1= document.querySelector('#d1');
let  d1p1 = document.querySelector('#d1p1');
let p3= document.getElementById('p3');

d1.addEventListener('click', function () {
    alert('div cliquée')
});

d1p1.addEventListener('click', function () {
    p3.textContent = 'On vient de cliquer sur le bouton';
    alert('paragraphe d1p1 cliqué');

});