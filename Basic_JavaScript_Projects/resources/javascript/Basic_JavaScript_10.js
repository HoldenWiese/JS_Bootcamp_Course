function count() {
    var x = 1;
    var text = "You have now counted to "
    while (x < 10) {
        document.getElementById('loop').innerHTML = text + x;
        x++;
    }
}


// Step 175
function stringLFun() {
    text = document.getElementById('stringP').textContent;
    document.getElementById('stringP').innerHTML = text.length;
}

// Step 177
var instruments = ['Guitar', 'Drums', 'Piano', 'Bass', 'Violin', 'Trumphet', 'Flute'];
var content = "";
var i;

function forLoopFun() {
    for (i = 0; i < instruments.length; i++) {
        content += instruments[i] + "<br>";
    }
    document.getElementById('listOfInstruments').innerHTML = content;
}

// Step 181
function arrayFun() {
    var catPictures = [];
    catPictures[0] = 'sleeping'
    catPictures[1] = 'playing'
    catPictures[2] = 'eating'
    catPictures[3] = 'purring'
    catPictures[4] = 'sneezing'
    document.getElementById('array').innerHTML = "In this picture, the cat is " + catPictures[4] + ".";
}

// 189

function constantFun() {
    const objectYay = {
        name: "Holden",
        last: "Wiese",
        email: "wieseholden"
    }
    document.getElementById('constant').innerHTML = "My name is " + objectYay.name + " " + objectYay.last + " and my email is " + objectYay.email + "."
}

// Step 191
let neat = "Hello World!";
document.getElementById('letKey').innerHTML = neat;

// Step 197 
let methObject = {
    first: "Holden",
    last: "Wiese",
    email: "wieseholden@gmail.com",
    description: function () {
        document.getElementById('197').innerHTML = "Hello, my name is " + methObject.first + " " + methObject.last + "."
    }
}

// Step 198

function loopBreak() {
    let text = "";
    for (i=0; i<10; i++) {
        let add = "The iteration is " + i + ".<br>";
        text = text + add;
        if (i === 5) {
            break;
        }
    }
    document.getElementById('198').innerHTML = text;
}
function loopContinue() {
    let text = "";
    for (i=0; i<10; i++) {
        let add = "The iteration is " + i + ".<br>";
        if (i === 5) {
            continue;
        }
        text = text + add;
    }
    document.getElementById('198b').innerHTML = text;
}