function switchFun() {
    let animal = document.getElementById('animalInput').value;
    animal = animal.toLowerCase();
    console.log(animal);
    switch (animal) {
        case 'duck':
            animal = animal.substring(0, 1).toUpperCase() + animal.substring(1);
            document.getElementById('animalOutput').innerHTML = "You chose " + animal + ".";
            break;
        case 'cat':
            animal = animal.substring(0, 1).toUpperCase() + animal.substring(1);
            document.getElementById('animalOutput').innerHTML = "You chose " + animal + ".";
            break;
        case 'rat':
            animal = animal.substring(0, 1).toUpperCase() + animal.substring(1);
            document.getElementById('animalOutput').innerHTML = "You chose " + animal + ".";
            break;
        case 'dog':
            animal = animal.substring(0, 1).toUpperCase() + animal.substring(1);
            document.getElementById('animalOutput').innerHTML = "You chose " + animal + ".";
            break;
        case 'snake':
            animal = animal.substring(0, 1).toUpperCase() + animal.substring(1);
            document.getElementById('animalOutput').innerHTML = "You chose " + animal + ".";
            break;
        case 'elephant':
            animal = animal.substring(0, 1).toUpperCase() + animal.substring(1);
            document.getElementById('animalOutput').innerHTML = "You chose " + animal + ".";
            break;
        case 'monkey':
            animal = animal.substring(0, 1).toUpperCase() + animal.substring(1);
            document.getElementById('animalOutput').innerHTML = "You chose " + animal + ".";
            break;
    }
}