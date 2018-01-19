var searchdata

function tableButton(){


    $('#example').DataTable( {
			  searching: false,
				scrollX: true,
        "ajax": "./json/jsondata.json",
        "columns": [
            { "data": "name" },
            { "data": "date" },
            { "data": "location" }
        ]
    } );
		$('#example').on('click', 'tr', function () {
            var datastring = this.outerText;
            var croppedData = datastring.substring(0, datastring.indexOf('.SAFE'));
            croppedData = croppedData + '.SAFE'
            layertomap(croppedData);
    } );
}

function layertomap(croppedData) {
    var pathbase = './layer/' + croppedData

    console.log(pathbase);
}
/*function onLoad(){
			var url='../app/metadata/metadata.json';
			$.getJSON(url, function(json){
				var table = $('<table>');
				table.attr('border','1');
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
				for( var i=0; i<json.length;i++){
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
				$('body').append(table);
			});
		}

*/

/*
function tableButton() {

	console.log("tableButton");
			 $.getJSON("./json/jsondata.json", function (data) {

					 var arrItems = [];      // THE ARRAY TO STORE JSON ITEMS.
					 $.each(data, function (index, value) {
							 arrItems.push(value);       // PUSH THE VALUES INSIDE THE ARRAY.
					 });

					 // EXTRACT VALUE FOR TABLE HEADER.
					 var col = [];
					 for (var i = 0; i < arrItems.length; i++) {
							 for (var key in arrItems[i]) {
									 if (col.indexOf(key) === -1) {
											 col.push(key);
									 }
							 }
					 }

					 // CREATE DYNAMIC TABLE.
					 var table = document.createElement("table");

					 // CREATE HTML TABLE HEADER ROW USING THE EXTRACTED HEADERS ABOVE.

					 var tr = table.insertRow(-1);                   // TABLE ROW.

					 for (var i = 0; i < col.length; i++) {
							 var th = document.createElement("th");      // TABLE HEADER.
							 th.innerHTML = col[i];
							 tr.appendChild(th);
					 }

					 // ADD JSON DATA TO THE TABLE AS ROWS.
					 for (var i = 0; i < arrItems.length; i++) {

							 tr = table.insertRow(-1);

							 for (var j = 0; j < col.length; j++) {
									 var tabCell = tr.insertCell(-1);
									 tabCell.innerHTML = arrItems[i][col[j]];
							 }
					 }

					 // FINALLY ADD THE NEWLY CREATED TABLE WITH JSON DATA TO A CONTAINER.
					 var divContainer = document.getElementById("showData");
					 divContainer.innerHTML = "";
					 divContainer.appendChild(table);
			 });
	 };
*/
