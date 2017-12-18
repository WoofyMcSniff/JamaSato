var object;

var jsondata = $.getJSON("../json/metadata.json", function(json) {
var textstring = jsondata.responseJSON[44];
  console.log(textstring);
});


// document.getElementById("testparse").innerHTML = object.metadata[1];
