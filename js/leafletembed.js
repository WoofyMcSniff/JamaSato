var map = L.map('myMap').setView([51.96, 7.626], 13);

L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { //brauchen hier andere Base Map OSM ist zu viel
    attribution: 'Map data © <a href="http://openstreetmap.org">OpenStreetMap</a> contributors', //dran denken die Attribution zu ändern
    maxZoom: 18,
}).addTo(map);
