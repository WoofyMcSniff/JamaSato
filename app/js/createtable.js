function showResults() {
    var url = '../json/metadata.json';
    var table = $('<table>');
    $.getJSON(url, function (json) {
        console.log("starting to create table");
        table.attr('border', '1');  //wie füllst du hier die Tabelle??
        var tr = $('<tr>');
        var td = $('<td>');
        td.html("ID");
        tr.append(td);
        td = $('<td>');
        td.html('Name');
        tr.append(td);
        td = $('<td>');
        td.html('IDNumber');
        tr.append(td);
        table.append(tr);
        for (var i = 0; i < json.length; i++) {
            var tr = $('<tr>');
            var td = $('<td>');
            td.html(json[i].size);
            tr.append(td);
            td = $('<td>');
            td.html(json[i].metadata);
            tr.append(td);
            td = $('<td>');
            td.html(json[i].coordinateSystem);
            tr.append(td);
            table.append(tr);
        }
        //get Element by id --> div mit id searchoutput
        $('#searchoutput').append(table);
    })
}
