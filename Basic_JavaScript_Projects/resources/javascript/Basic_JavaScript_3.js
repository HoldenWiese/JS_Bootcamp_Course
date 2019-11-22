function add2() {
    sum = 2+2;
    document.getElementById('math').innerHTML = "2 + 2 is equal to " + sum;
}

function subtract() {
    sum = 6-3;
    document.getElementById('subtraction').innerHTML = "6 - 3 is equal to " + sum;
}
function multiply() {
    sum = 5*3;
    document.getElementById('multiplication').innerHTML = "5 * 3 is equal to " + sum;
}
function divide() {
    sum = 9/3;
    document.getElementById('division').innerHTML = "9 / 3 is equal to " + sum;
}

function operate() {
    sum = (12 * 2) +3 - 4;
    document.getElementById('operation').innerHTML = "(12 * 2) +3 - 4 = " + sum;
}

function modulus() {
    sum = 31 % 9;
    document.getElementById('modulate').innerHTML = "Remainder is equal to " + sum;
}

function negation() {
    sum = 15;
    document.getElementById('negative').innerHTML = -sum;
}

function increment() {
    sum = 5;
    sum++;
    document.getElementById('incrementp').innerHTML = sum;
}

function decrement() {
    sum = 5;
    sum--;
    document.getElementById('decrementp').innerHTML = sum;
}

function random() {
    sum = Math.floor(Math.random() * 100);
    document.getElementById('randomResult').innerHTML = sum;
}

function toPower() {
    sum = Math.pow(10, 3);
    document.getElementById('toPowerP').innerHTML = "10 to the power of 3 is equal to " + sum;
}