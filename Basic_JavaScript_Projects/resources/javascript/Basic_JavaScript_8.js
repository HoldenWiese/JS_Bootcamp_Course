// concat() method

function concatSentence() {
    var part1 = "Hello, ";
    var part2 = "my name is ";
    var part3 = "Holden!";
    var fullSentence = part1.concat(part2, part3);
    document.getElementById('concatenate').innerHTML = fullSentence;
}

// slice() method
function sliceStart() {
    var sentence = "My name is Holden and I am trying to learn to write JavaScript.";
    var section = sentence.slice(27,33);
    document.getElementById('slice').innerHTML = section;
}

// Step 145

function upperFun() {
    var uppercase = document.getElementById('upper').innerHTML.toUpperCase();
    document.getElementById('upper').innerHTML = uppercase;
}

function searchFun() {
    var searchField = document.getElementById('searchP1').textContent;
    var result = searchField.search('Holden');
    document.getElementById('searchP2').innerHTML = result;
}

// Step 147
function stringFun() {
    var x = 147;
    document.getElementById('147').innerHTML = x.toString();
}

// Step 149
function preciseFun() {
    var x = 23456789.23456789;
    document.getElementById('precise').innerHTML = x.toPrecision(9);
}

// Step 150 Challenge
function toFixedFun() {
    var x = 23456789.23456789
    document.getElementById('150').innerHTML = x.toFixed(3);
}

var holden = "My name is Holden!"

function valueFun() {
    document.getElementById('150b').innerHTML = holden.valueOf();
}

