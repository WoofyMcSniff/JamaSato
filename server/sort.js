/**
 *@function sorts the coordinats after date (/LF00050/)
 **/
function sortdate(liste)
{
    liste.sort(function(a,b)

    {
        var date1 = a._getdatum();
        var date2 = b._getdatum();

        return date1 - date2;
    }
}

/**
 * Nur die Metadaten
 */
function _getdatum(liste)
{
    var st = Json.metadata[''].DATATAKE_1_DATATAKE_SENSING_START;
    var dt = new Date(st);

}

/**
 *@return get the json of the actuell object
 */
function _getjson()
{

}
