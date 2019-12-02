

// document.write("Hello World!");



// var Holden = "Hi there. My name is Holden. What\'s your name?";
// document.write(Holden);
// alert(Holden);



// var bunny = "There once was a nice bunny. " +"It\'s kind demeanor made everyone happy. " + "Then, one day it disappeared.";
// document.write(bunny);



// var family = "Wiese", holden = "Holden", hadden = "Hadden", haley = "Haley", amy = "Amy", mom = "Louise", dad = "Matt";

// var family = family.fontcolor("gold");
// var holden = holden.fontcolor("red");
// var hadden = hadden.fontcolor("blue"); 
// var haley = haley.fontcolor('green'); 
// var amy = amy.fontcolor('yellow');
// var mom = mom.fontcolor('orange');
// var dad = dad.fontcolor('purple');

// document.write(family + holden + hadden + dad);



// document.write(12+12);

function practiceFunction() {
    var str = "This text is green!";
    var result = str.fontcolor('green');
    document.getElementById("buttonClicked").innerHTML = result;
}

function bigImg(x) {
    x.style.height = "64px";
    x.style.width = "64px";
}


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
