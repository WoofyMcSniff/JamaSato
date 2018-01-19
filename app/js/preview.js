var url = '../app/metadata/metadata.json';
var polygonString;





var previewStyle = {
    "color": "red",
    "weight": 5
};

function addPreview(index) {  //index of metadata entry
    var jsondata = $.getJSON("../json/metadata.json", function (json) {
        polygonString = json[40].metadata[''].FOOTPRINT;  //change 1 here to index
        return polygonString
    });
    jsondata.promise().done(function () {
        var previewCoords = [];
        polygonString = polygonString.replace('POLYGON((', '');
        polygonString = polygonString.replace('))', '');
        polygonString = polygonString.replace(/,/g, '');
        polygonStringArray = polygonString.split(" ");
        for (var i = 0; i < polygonStringArray.length; i++) {
            var previewCorrdsPair = [];
            previewCorrdsPair.push(parseFloat(polygonStringArray[i]));
            previewCorrdsPair.push(parseFloat(polygonStringArray[i+1]));
            previewCoords.push(previewCorrdsPair);
            i++
        }
        console.log(previewCoords);
        var polygon = L.polygon(previewCoords,{color: 'red'}).addTo(map);
        console.log(polygon);
    });



};

