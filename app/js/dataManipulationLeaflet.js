function changeOpacity(layer){
   var value = document.getElementById("opacityslider").value;
   if(layer===undefined){
      alert("Add a Layer first!")
   } else layer.setOpacity(value);
};
