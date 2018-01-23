var searchdata;


function tableButton(res) {
    $('#example').DataTable({
        searching: false,
        scrollX: true,
        "data": "res",
        "columns": [
            {"data": "name"},
            {"data": "date"},
            {"data": "location"}
        ]
    });
    $('#example').on('click', 'tr', function () {
        var datastring = this.outerText;
        var croppedData = datastring.substring(0, datastring.indexOf('.SAFE'));
        croppedData = croppedData + '.SAFE';
        layertomap(croppedData);
    });
}

function layertomap(croppedData) {
    var pathbase = './layer/' + croppedData;

    console.log(pathbase);
}