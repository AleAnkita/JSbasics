// Task 1
var dairy = ['cheese', 'sour cream', 'milk', 'yogurt', 'ice cream', 'milkshake']
function logDairy() {
    for (i of dairy) {
        console.log(i)
    }
}
logDairy(dairy);

// Task 2
const animal = {

canJump: true

};

const bird = Object.create(animal);

bird.canFly = true;

bird.hasFeathers = true;

function birdCan() {
    for (j of Object.keys(bird)) {
        console.log(j + ": " + bird[j])
    }
}
birdCan();
// Task 3
const animal1 = {

canJump: true

};

const bird1 = Object.create(animal1);

bird1.canFly = true;

bird1.hasFeathers = true;

function animalCan() {
    for (k in bird1) {
        console.log(k + ": " + bird1[k])
    }
}
animalCan();