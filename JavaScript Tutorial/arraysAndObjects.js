var clothes = []
clothes.push("Denim Jeans")
clothes.push("Denim Jacket")
clothes.push("Black Legging")
clothes.push("Oversized tshirt")
clothes.push("Floral Top")
clothes.pop() //removes the last element from array
clothes.push("Cap")

console.log(clothes[2])

var favCar = {}
favCar.color = "Brown"
favCar["convertible"] = true
console.log(favCar)

//example of adding properties and methods to an object
var car = {};
car.mileage = 98765;
car.color = "red";
console.log(car);
car.turnTheKey = function() {
    console.log("The engine is running")
}
car.lightsOn = function() {
    console.log("The lights are on.")
}
console.log(car);
car.turnTheKey();
car.lightsOn()