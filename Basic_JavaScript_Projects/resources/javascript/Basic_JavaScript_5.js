let age = 24;

document.getElementById('type').innerHTML = age + typeof age;

document.getElementById('nan').innerHTML = 0/0;

document.getElementById('infinity').innerHTML = 2E4000;

document.getElementById('neginfin').innerHTML = -2E4000;

document.getElementById('true').innerHTML = (10 > 2);

document.getElementById('false').innerHTML = (2 > 10);

console.log(2+2);

document.getElementById('coercion').innerHTML = ("10" + 5);

console.log(2 > 10);

document.getElementById('equalsTrue').innerHTML = (10 == 10);

document.getElementById('equalsFalse').innerHTML = (10 == 11);

// Step 110
let a = 10;
let b = 10;

document.getElementById('110a').innerHTML = (a === b);

a = 10;
a = "10";
document.getElementById('110b').innerHTML = (a === b);

a = 10;
b = 11;
document.getElementById('110c').innerHTML = (a === b);

a = 10;
b = "11";
document.getElementById('110d').innerHTML = (a === b);

// Step 112

document.getElementById('and').innerHTML = (10 > 11 && 11 > 12);
document.getElementById('and2').innerHTML = (10 > 11 && 11 > 10);

document.getElementById('or').innerHTML = (10 > 11 || 10 > 9);
document.getElementById('or2').innerHTML = (10 > 11 || 10 > 12);

// Step 114

document.getElementById('not1').innerHTML = !(5>10);
document.getElementById('not2').innerHTML = !(15>10);