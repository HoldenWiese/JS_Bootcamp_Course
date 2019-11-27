// Step 130
    // Global Variable
    var x = 5;
    document.getElementById('global').innerHTML = x;

    // Local Variable
    function exampleLocal() {
        var y = 12;
        document.getElementById('local').innerHTML = y;
    }

    // Error Function
    function errorFun() {
        var x = 6;
        var foo = x + y;
        document.getElementById('anError').innerHTML = foo;
    }

    // Step 133 with if else and date method.
    function dateFun() {
        if (new Date().getHours() < 20)
        document.getElementById('theDate').innerHTML = "I hope you are enjoying your day!";
    }

    //  Step 134
    function myIfStatement() {
        if (5 > 4)
        document.getElementById('ifStatement').innerHTML = (5 > 4);
    }

    // Step 136
    function canDrink() {
        age = document.getElementById('ageInput').value;
        if (age < 21) {
            document.getElementById('ageResponse').innerHTML = "You are not old enough to drink.";
        }
        else {
            document.getElementById('ageResponse').innerHTML = "You can drink!"
        }
    }

    // Step 138
    function timeFunction() {
        var time = new Date().getHours();
        var reply;
        if (time < 12 == time > 0) {
            reply = "It is morning time!";
        }
        else if (time > 12 == time < 18) {
            reply = "It is the afternoon."
        }
        else {
            reply = "It is evening time."
        }
        document.getElementById('timeOfDay').innerHTML = reply;
    }