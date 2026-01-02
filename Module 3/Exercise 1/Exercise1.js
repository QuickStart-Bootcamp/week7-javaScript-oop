// Refresh your knowledge: 
// - Any constructor function has a prototype field giving you the prototype object.
// - Any prototype object has a constructor field giving you the constructor
// function of the prototype.

console.log(Object.prototype.constructor === Object); // true

function Vehicle(x, y) {
    this.x = x;
    this.y = y;
}
Vehicle.prototype.getCoordinates = function() {
    return [this.x, this.y];
}

function Car(x, y, numberPlate) {
    Vehicle.call(this, x, y);
    this.numberPlate = numberPlate;
}

// Change the prototype from Object to Vehicle
Car.prototype = Object.create(Vehicle.prototype);

// Problem: we changed the prototype, but we're now in Car, not in Vehicle, so
// we expect the Car constructor to be used. 
console.log(Car.prototype.constructor === Car); // false (problem)
// Solution:
Car.prototype.constructor = Car;
console.log(Car.prototype.constructor === Car); // obviously now true

Car.prototype.getNumberPlate = function() {
    return this.numberPlate;
}

const c = new Car(1, 2, 'A-BC-1234');
console.log(c.getNumberPlate());
console.log(c.getCoordinates());
