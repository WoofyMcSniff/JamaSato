var searchdata;

/*function tableDestroy(table){
    table.destroy();
} */
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
        var datastring = this.children[1].innerText;
        var pathbase = '/home/s_lech05/JamaSato/IMG/' + datastring;
        $('#dir')[0].value = pathbase;
    });
}

function layertomap(res) {
    layerpath = res.layerpath;

    /*map.on('click', function(ev) {
        alert(ev.latlng); // ev is an event object (MouseEvent in this case)
    });
    //layerpath.addTo(map)
    //add eventListener to layer  http://leafletjs.com/reference-1.3.0.html#event-objects */

}