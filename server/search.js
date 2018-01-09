var exports = module.exports = {};

/**
 *@return
 */
exports.search = function (input)
{
    var mainFolderPath = "C:\\Users\\Emma\\Documents\\Uni\\WiSe17\\Geosoftware2\\exampleData";
    var i = 0;
    var liste = [];
    var erg = [];
    switch(_tofind(input))
    {
        case 1:
            while(i < liste.length-1)
            {
                if(_searchname(JSON.parse(liste[i]), input[0]))
                {
                    erg.push(liste[i]);
                }
                i++;
            }

            break;

        case 2:
            while(i < liste.length-1)
            {
                if(_searchdatum(JSON.parse(liste[i]), input[1], input[2]))
                {
                    erg.push(liste[i]);
                }
                i++;
            }

            break;

        case 3:
            while(i < liste.length-1)
            {
                if(_searchbox(JSON.parse(liste[i]), input[3]))
                {
                    erg.push(liste[i]);
                }
                i++;
            }

            break;

        case 4:
            while(i < liste.length-1)
            {
                if(_searchname(JSON.parse(liste[i]), input[0]))
                {
                    if(_searchdatum(JSON.parse(liste[i]), input[1], input[2]))
                    {
                        erg.push(liste[i]);
                    }
                }
                i++;
            }

            break;

        case 5:
            while(i < liste.length-1)
            {
                if(_searchname(JSON.parse(liste[i]), input[0]))
                {
                    if(_searchbox(JSON.parse(liste[i]), input[3]))
                    {
                        erg.push(liste[i]);
                    }
                }
                i++;
            }

            break;

        case 6:

            while(i < liste.length-1)
            {
                if(_searchdatum(JSON.parse(liste[i]), input[1], input[2]))
                {
                    if(_searchbox(JSON.parse(liste[i]), input[3]))
                    {
                        erg.push(liste[i]);
                    }
                }
                i++;
            }

            break;

        case 7:
            while(i < liste.length-1)
            {
                if(_searchname(JSON.parse(liste[i]), input[0]))
                {
                    if(_searchdatum(JSON.parse(liste[i]), input[1], input[2]))
                    {
                        if(_searchbox(JSON.parse(liste[i]), input[3]))
                            erg.push(liste[i]);
                    }
                }
                i++;
            }

            break;

        default:


    }

    return erg;


}
function _tofind(searchinput)
{
    if (searchinput[0] != null && searchinput[1] == null && searchinput[3] == null) {
        return 1 //Name
    }

    else if (searchinput[0] == null && searchinput[1] != null && searchinput[3] == null) {
        return 2 //Datum
    }

    else if (searchinput[0] == null && searchinput[1] == null && searchinput[3] != null) {
        return 3; //Box
    }

    else if (searchinput[0] != null && searchinput[1] != null && searchinput[3] == null) {
        return 4; // Name + Datum
    }

    else if (searchinput[0] != null && searchinput[1] == null && searchinput[3] != null) {
        return 5; //Name + Box
    }

    else if (searchinput[0] == null && searchinput[1] != null && searchinput[3] != null) {
        return 6; // Datum + Box
    }

    else if (searchinput[0] != null && searchinput[1] != null && searchinput[3] != null) {
        return 7; //Name + Datum + Box
    }



}

function _searchname(Json, name)
{
    return Json.description.contains(name);
}

function _searchdatum(Json, datestart, dateend)
{
    var st = Json.metadata[''].DATATAKE_1_DATATAKE_SENSING_START;
    var dt = new Date(st);
    if(dateend == null) {
        if (dt.getFullYear() == datestart.getFullYear() && dt.getMonth() == datestart.getMonth() && dt.getDate() == datestart.getDate()) {
            return true;
        }

        else
        {
            var datehelp = new Date(datestart);
            var datumsliste = [];
            var i = 0;
            while(datehelp.getFullYear() == dateende.getFullYear() && datehelp.getMonth() == dateende.getMonth() && datehelp.getDate() == dateende.getDate())
            {
              datumsliste[i] = datehelp.setDate(datehelp.getDate()+1);
            }
        }
    }
}

/**
 *https://github.com/tmpvar/polygon.js
 *npm install polygon, die node.js libary für polygone
 *Copyright (c) <2017> <tmpvar>
 */
function _searchbox(Json, box)
{

    var such = new Polygon(box);
    var punkte = Json.metadata[''].FOOTPRINT;
    var current = new Polygon(_polygonstringtoarray(punkte));
    if( current.union(such).toArray[0,0] != null)
    {
        return true;
    }

}


function _polygonstringtoarray(emptys)
{
    emptys = emptys.substring(9, emptys.length - 2);
    var count = emptys.split(",");
    var i = 0;
    while(i< count.length) {
        liste[i] = count[i].split(" ");
        if(i> 0)
        {
            liste[i].shift();
        }
        i++;
    }
    return liste;

}

Date.prototype.addDays = function(days) {
    var date = new Date(this.valueOf());
    date.setDate(date.getDate() + days);
    return date;
}

function _getDates(startDate, stopDate) {
    var dateArray = new Array();
    var currentDate = startDate;
    while (currentDate <= stopDate) {
        dateArray.push(new Date (currentDate));
        currentDate = currentDate.addDays(1);
    }
    return dateArray;
}

function _searchdatum(Json, datestart, dateend)
{
    var st = Json.metadata[''].DATATAKE_1_DATATAKE_SENSING_START;
    var dt = new Date(st);
    var dateliste = _getDates(datestart, dateend);
    console.log(dateliste);
    var i = 0;
    while(i < dateliste.length) {
        if (dt.getFullYear() == dateliste[i].getFullYear() && dt.getMonth() == dateliste[i].getMonth() && dt.getDate() == dateliste[i].getDate()) {
            return true;
        }

        i++;
    }
    return false;

}