var searchdata;
var lyr;

function tableButton(res) {


    $('#example').DataTable({
        searching: false,
        scrollX: true,
        data: res,
        destroy: true,
        columns: [
            {data: 'date'},
            {data: 'name'},
            {data: 'location'}
        ],
        "order": [[1, "desc"]]
    });

    addPreview(res);

    $('#example').on('click', 'tr', function () {
        var table = $('#example').DataTable();
        var datastring = this.children[1].innerText;
        if ( $(this).hasClass('selected') ) {
            $(this).removeClass('selected');
        }
        else {
            table.$('tr.selected').removeClass('selected');
            $(this).addClass('selected');
        }
        var pathbase = '/home/s_lech05/JamaSato/IMG/' + datastring;
        $('#dir')[0].value = pathbase;
    });
}

function layertomap(res) {
    var path = res.lay

    var varl  = 'http://gis-bigdata.uni-muenster.de:13014' +pathbase+ '/{z}/{x}/{y}.png'
    var lyr = L.tileLayer(varl, {tms: true, opacity: 0.7, attribution: ""});

    /*map.on('click', function(ev) {
        alert(ev.latlng); // ev is an event object (MouseEvent in this case)
    });
    //layerpath.addTo(map)
    //add eventListener to layer  http://leafletjs.com/reference-1.3.0.html#event-objects */

}
function createGrayscale(){
  var bandId = document.getElementById('gray');
  var pathBase = $('#dir')[0].value;
  //adding grayscale Image here
}
