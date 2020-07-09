let x=0, y=20;

function portee1() {
    let x = 1;
    var y = 2;
    if(true) {
        let x = 5;//Variable différente, n'écrase pas la variable x du bloc parent
        var y = 10; //écrase la variable y du bloc parent

        document.getElementById('p3').innerHTML = 'x (dans if) = ' + x;
        document.getElementById('p4').innerHTML = 'y (dans if) = ' + y;
    }
    document.getElementById('p5').innerHTML = 'x (hors if) = ' + x;
    document.getElementById('p6').innerHTML = 'y (hors if) = ' + y;
};

document.getElementById('p1').innerHTML = 'x (hors fonction) = ' + x +'<br>';
document.getElementById('p2').innerHTML = 'y (hors fonction) = ' + y + '<br>';

portee1();