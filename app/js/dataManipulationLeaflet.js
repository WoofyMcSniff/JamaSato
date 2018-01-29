function changeOpacity(){
   var value = document.getElementById("opacityslider").value;
   if(lyr===undefined){
      alert("Add a Layer first!")
   } else layer.setOpacity(value);
};
