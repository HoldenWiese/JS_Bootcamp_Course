function blueText() {
    var str = "This text is blue!";
    var result = str.fontcolor('blue');
    document.getElementById("buttonClicked").innerHTML = result;
}

function concatenateFun () {
    var sentence = "This is the first part ";
    sentence += "a sentence.";
    document.getElementById('concatenate').innerHTML = sentence;
}