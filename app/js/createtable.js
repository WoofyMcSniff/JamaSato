function onLoad(){
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
