// Step 212
function classFun() {
    var foo = document.getElementsByClassName('hello')
    foo[0].innerHTML = "I succeeded!"
}

// Step 214
var c = document.getElementById("canvas");
var ctx = c.getContext("2d");
ctx.font = "60px Arial";
ctx.strokeText("Hello World", 10, 50);


// Step 215
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

var grd = ctx.createLinearGradient(0, 0, 170, 0);
grd.addColorStop(0, "black");
grd.addColorStop(1, "white");

ctx.fillStyle = grd;
ctx.fillRect(20, 20, 150, 100);
