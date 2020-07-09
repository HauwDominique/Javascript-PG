document.getElementById('sp1').innerHTML = 'navigator.language = ' + navigator.languages +
'<br> navigator.cookieEnabled = ' + navigator.cookieEnabled +
'<br> navigator.platform = ' + navigator.platform +
'<br> navigator.appCodeName = ' + navigator.appCodeName +
'<br>navigator.userAgent = ' + navigator.userAgent;


console.log(navigator.geolocation);

// interface geolocation
navigator.geolocation.getCurrentPosition(coordonnees);

function coordonnees(pos) {

    let crd = pos.coords;
    let latitude = crd.latitude;

    let longitude = crd.longitude;
    document.getElementById('p1').innerHTML = 'Latitude : ' + latitude.toFixed(2) + ' - Longitude : ' + longitude.toFixed(2);
};
