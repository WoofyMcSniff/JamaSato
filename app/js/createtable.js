var searchdata;

/*function tableDestroy(table){
    table.destroy();
} */
function tableButton(res) {
    console.log(res);
    res = JSON.stringify(res);
    res = JSON.parse(res);
    console.log(res);

    console.log(currenturl);

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
        layertomap(datastring);
        console.log(datastring);
    });
}

function layertomap(datastring) {
    var pathbase = '/home/s_lech05/JamaSato/IMG/' + datastring;
    $('#dir')[0].value = pathbase;
}