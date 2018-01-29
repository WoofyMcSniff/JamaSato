var searchdata;

function tableButton(res) {

    res = JSON.stringify(res);      //reworking given data to be usable by DataTables
    res = JSON.parse(res);

    $('#example').DataTable({ //Initializing DataTable (framework)
        searching: false,
        scrollX: true,      // enable List scorolling to fit the sidebar
        data: res,          // searching through given data (res) by column and strings
        destroy: true,      // delete initialized table to enable reinitialization for a new search query
        columns: [
            {data: 'date'},
            {data: 'name'},
            {data: 'location'}
        ],
        "order": [[1, "desc"]]      // Ordering by date
    });
    addPreview(res);        //Adding the footprint of all search results to the map
    $('#example').on('click', 'tr', function () {
        var table = $('#example').DataTable();
        var datastring = this.children[1].innerText;
        if ( $(this).hasClass('selected') ) {   //Selection highlighting of one dataset in the table
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

function layertomap(datastring) { //getting the path to our tile layer on the server and creating a path for further use
    var pathbase = '/home/s_lech05/JamaSato/IMG/' + datastring;
    $('#dir')[0].value = pathbase;
}