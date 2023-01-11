// Task 1
var dairy = ['cheese', 'sour cream', 'milk', 'yogurt', 'ice cream', 'milkshake']
function logDairy(myDairy) {
    for (i of myDairy) {
        console.log(i)
    }
}
logDairy(dairy);

// for of loops over object and its own properties
const animal = {

canJump: true

};

const bird = Object.create(animal);

bird.canFly = true;

bird.hasFeathers = true;

// Object.values() and Object.entries() are also available
function birdCan() {
    for (j of Object.keys(bird)) {
        console.log(j + ": " + bird[j])
    }
}
birdCan();
// for in loops over object and its prototype
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