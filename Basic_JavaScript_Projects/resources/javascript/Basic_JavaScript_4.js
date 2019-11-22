// Step 87
var holden = {
    age: 24,
    firstName: "Holden",
    lastName: "Wiese",
    weight: 170,
    height: "6\'1\""
}

function myFunction() {
    delete holden.weight;
    document.getElementById('dictionary').innerHTML = holden.weight;
}