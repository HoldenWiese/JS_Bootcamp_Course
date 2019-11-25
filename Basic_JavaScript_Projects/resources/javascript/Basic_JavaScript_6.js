// Step 117
function rideFunction() {
    var height, canRide;
    height = document.getElementById('height').value;
    canRide = (height < 52) ? "Sorry you are not tall " : "Congratulations! You get ";
    document.getElementById('rideStatus').innerHTML = canRide + "to ride.";
}

// Step 118
function eligable() {
    var age, canVote;
    age = document.getElementById('ageInput').value;
    canVote = (age > 17) ? "Congratulations. You are old enough to vote." : "Sorry. You are not old enough to vote yet."
    document.getElementById('response').innerHTML = canVote;
}

// Step 120
function vehicle(make, model, year, color, style) {
    this.vehicleMake = make;
    this.vehicleModel = model;
    this.vehicleYear = year;
    this.vehicleColor = color;
    this.vehicleStyle = style;
}

var Jack = new vehicle('Dodge', 'Viper', 2020, 'Red');
var Emily = new vehicle('Jeep', 'Trail Hawk', 2019, 'White and Black');
var Erik = new vehicle('Ford', 'Pinto', 1971, 'Mustard');
function myFunction() {
    document.getElementById('keywordsAndConstructors').innerHTML =
        "Erik drives a " + Erik.vehicleColor + "-color " + Erik.vehicleModel +
        " manufactured in " + Erik.vehicleYear;
}

// Step 122 Using new and this keywords.
var holden = new vehicle('Toyota', 'Camry', 2007, 'Gray', 'basic');

function holdenCar() {
    document.getElementById('newAndThis').innerHTML =
        "Holden drives a " + holden.vehicleColor + " " + holden.vehicleYear + " " + holden.vehicleMake + " " + holden.vehicleModel + " that is " + holden.vehicleStyle + ".";
}

// Step 124
function newUser(firstName, lastName, email) {
    this.newUserFirst = firstName;
    this.newUserLast = lastName;
    this.newUserEmail = email;
}

var me = new newUser('Holden', 'Wiese', 'wieseholden@gmail.com');

document.getElementById('124').innerHTML = me.newUserFirst;

// Step 127
function nestedFun() {
    document.getElementById('Nested_Function').innerHTML = count();
    function count() {
        var Starting_point = 1;
        function Plus_one() {Starting_point += 1;}
        Plus_one();
        return Starting_point;
    }
    
    
}
