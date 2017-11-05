var map = L.map('map', {zoomControl: false, zoomAnimation: false,
    minZoom: 10, //maxBounds: [[50, 5.77], [53.00, 9.46]]
    maxBounds: [[48,3.5],[55,11.5]]
}).setView([51.422080, 8.022025], 15),



var whiteAndBlack =
    L.tileLayer('//{s}.tile.stamen.com/toner-lite/{z}/{x}/{y}.png', {
        attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>',
        subdomains: 'abcd',
        maxZoom: 20,
        minZoom: 0,
        label: 'White and Black'  // optional label used for tooltip
    }).addTo(map),
    blackAndWhite =
    L.tileLayer('//{s}.tile.stamen.com/toner/{z}/{x}/{y}.png', {
        attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>',
        subdomains: 'abcd',
        maxZoom: 20,
        minZoom: 0,
        label: 'Black and White'
    }),
    nasa =
    L.tileLayer.wms('https://firms.modaps.eosdis.nasa.gov/wms/viirs', {
        layers: 'NASA FIRMS',
        label: 'NASA Fire Hotspots'
    }),
    osm =
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: 'OpenStreetMap',
      label: 'Street Map'
    });

var baseMaps = {
    'White and Black': whiteAndBlack,
    'Black and White': blackAndWhite,
    'NASA Fire Hotspots' : nasa,
    'Street Map' : osm
};

map.addControl(L.control.layers({
    basemaps}),
    L.control.zoom({
    position: 'topright'
}),L.control.scale({
	position:'bottomright'
}));
