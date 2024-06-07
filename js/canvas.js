var canvas = document.querySelector("#canvas > canvas");
var ctx = canvas.getContext("2d");
var step = 0.1;
var mx=0;
var an=1000;
var Fmx=-1;

document.addEventListener('mousemove', (e) => {
  if (Fmx==-1) {
    Fmx=e.clientX
  }
  mx=e.clientX- Fmx;
});

function plotSine(ctx, xOffset, yOffset) {
  var width = ctx.canvas.width;
  var height = ctx.canvas.height;
  var scale = 20;

  ctx.beginPath();
  ctx.lineWidth = 500;
  ctx.strokeStyle = "#161825";

  // console.log("Drawing point...");
  // drawPoint(ctx, yOffset+step);
  
  var x = 4;
  var y = 0;
  var amplitude = 75;
  var frequency = 250+(an/100);
  //ctx.moveTo(x, y);
  ctx.moveTo(x, 50);
  ctx.beginPath()
  while (x < width+200) {
      y = height/2 + amplitude * Math.sin((x+xOffset-(mx))/frequency);
      ctx.lineTo(x-100, y+300+an);
      x++;
  }
  ctx.stroke();
  ctx.save();

  ctx.stroke();
  ctx.restore();
}

function init() {
  setTimeout(function () {
    window.requestAnimationFrame(draw);
    spirograph();
  }, 500)
}

function draw() {

  ctx.clearRect(0, 0, 500, 500);
  ctx.save();            
  
  plotSine(ctx, step, 50);
  ctx.restore();

  if (an<0.00001) {
    an = 0;
  }else{an/=1.015;}
  
  step += 2+(an/50);
  window.requestAnimationFrame(draw);
}
function spirograph() {            
  var canvas2 = document.getElementById("canvas2");
  var ctx = canvas2.getctx("2d");
  
  ctx.save();
  // var imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  var step = 0.5;
  for (var i = -4; i < canvas.height; i += step) {
      // ctx.putImageData(imageData, 0, 0);
      plotSine(ctx, i, 54 + i);
  }
}