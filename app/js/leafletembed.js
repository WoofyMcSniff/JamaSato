var map = L.map('map');
map.setView([51.2, 7], 9);

L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 18,
    attribution: 'Map data &copy; OpenStreetMap contributors'
}).addTo(map);

var sidebar = L.control.sidebar('sidebar').addTo(map);

// FeatureGroup is to store editable layers
var drawnItems = new L.FeatureGroup();
console.log(drawnItems)
map.addLayer(drawnItems);
var drawControl = new L.Control.Draw({
  draw: {
    polyline: false,
    polygon: false,
    marker: false,
    circle: false,
    circlemarker: false,
  },
  edit: {
    featureGroup: drawnItems
  }
});

//add event handlers for drawing on Map and save coordinates into an array 

var recCoord
map.on(L.Draw.Event.CREATED, function (e) {

  drawnItems.clearLayers();

   var type = e.layerType;
   var layer = e.layer
   console.log(layer);

   drawnItems.addLayer(layer);
    if (type === 'rectangle') {
    recCoord = layer._latlngs[0];

   }
    console.log(recCoord)

});




map.addControl(drawControl);

var toolbar = L.Toolbar();
toolbar.addToolbar(map);

var modifiedDraw = L.drawLocal.extend({
  draw: {
    toolbar: {
      buttons: {
          rectangle: 'Draw a recangle on the map'
        }
      }
    }
  });

  map.addControl(drawControl);
