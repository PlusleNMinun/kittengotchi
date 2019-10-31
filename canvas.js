// Responsive Canvas to 80%
window.onload = window.onresize = function() {
  var canvas = document.getElementById('canvas');
  canvas.width = window.innerWidth * 0.8;
  canvas.height = window.innerHeight * 0.8;
}

var canvas = document.getElementById("myCanvas");

// Drawing Element
var ctx = canvas.getContext("2d");

// Rectangle
ctx.fillStyle = "#FF0000";

ctx.fillRect(0, 0, 150, 75);
