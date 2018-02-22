$(document).ready(function() {
    $("#canvas").click(function(e){
        getPosition(e); 
    });
});



var pointSize = 3;

function getPosition(event){
    var rect = canvas.getBoundingClientRect();
    var x = event.clientX - rect.left;
    var y = event.clientY - rect.top;
       
    drawCoordinates(Math.floor(x),Math.floor(y));
}

function drawCoordinates(x,y){	
     var canvas = document.getElementById("canvas");
   var ctx = canvas.getContext("2d");
   var coord = document.getElementById("coord");
   var width = canvas.width;
   var height = canvas.height;


     ctx.fillStyle = "#ff0000"; // Red color

   ctx.beginPath();
   ctx.arc(x, y, pointSize, 0, Math.PI * 2, true);
   ctx.fill();
   
   var xcoord = Math.floor(x/10);
   var ycoord = Math.floor((height-y)/10);
   
   var text = document.createTextNode(coord.innerHTML);
   if(coord.innerHTML.endsWith(")"))
       var text = document.createTextNode(", ("+xcoord+","+ycoord+")");
   else
       var text = document.createTextNode("("+xcoord+","+ycoord+")");
   
   coord.appendChild(text);
}