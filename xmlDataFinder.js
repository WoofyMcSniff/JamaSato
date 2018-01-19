var fs = require('fs');
var path = require('path');
var child_process = require('child_process');
var jsonfile = require('jsonfile');
//var gdalinfo = require('gdalinfo-json');

var mainFolderPath = "C:\\Users\\Emma\\Documents\\Uni\\WiSe17\\Geosoftware2\\exampleData"; //'/opt/sentinel2'

var folderArray = fs.readdirSync(mainFolderPath, "")
console.log(folderArray);
var jsonDataPath = 'C:\\Users\\Emma\\Documents\\Uni\\WiSe17\\Geosoftware2\\exampleData\\S2A_MSIL1C_20161212T082332_N0204_R121_T34KGD_20161212T084403';
var jsonData = [];
for (var i = 0; i < folderArray.length; i++) {


    if (!fs.existsSync(jsonDataPath)) {
        var dataPath1 = mainFolderPath + '/' + folderArray[i] + '/MTD_MSIL1C.xml';
        var dataPath2 = mainFolderPath + '/' + folderArray[i] + '/MTD_MSIL2A.xml';
        /*gdalinfo.local(dataPath, function(err, metadta){
            if (err) {
                console.log(err);
            }
            console.log(JSON.stringify(metadata));
        })*/
        if (fs.existsSync(dataPath1)) {
            var jsonmd = child_process.execSync('gdalinfo -json ' + dataPath1, {'encoding': 'UTF8'});
            jsonData.push(jsonmd);

        } else if (fs.existsSync(dataPath2)) {
            var jsonmd = child_process.execSync('gdalinfo -json ' + dataPath2, {'encoding': 'UTF8'});
            jsonData.push(jsonmd);
            jsonfile.writeFile(jsonDataPath, jsonmd);
        }

    }

}

jsonfile.writeFile(jsonDataPath, JSON.stringify(jsonData));
console.log(jsonData);

