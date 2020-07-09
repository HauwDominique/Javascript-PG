let x = 15;

let p = document.getElementById('id1');
switch (x) {
    case 2:
        p.innerText = 'x stocke la valeur 2';
        break;
    case 5:
        p.innerText = 'x stocke la valeur 5';
        break;
    case 10:
        p.innerText = 'x stocke la valeur 10';
        break;
    case 15:
        p.innerText = 'x stocke la valeur 15';
        break;
    case 20:
        p.innerText = 'x stocke la valeur 20';
        break;
    default:
        p.innerText = 'x ne stocke pas la valeur 2, 5, 10, 15 et 20;'
};