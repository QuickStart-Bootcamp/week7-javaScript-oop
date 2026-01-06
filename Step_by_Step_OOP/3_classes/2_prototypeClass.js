// Brand   Model     Color
// Toyota  Corolla   Red
// Prototype: Is a mechanism by which objects can inherit features from one another. 
//            every JavaScript object has a hidden, internal property called [[Prototype]], which either points 
//            to another object (its prototype) or null. This forms what's known as the prototype chain and is 
//            fundamental to JavaScript’s inheritance system.
class Car {
  constructor(brand, model, year) {
    this.brand = brand;
    this.model = model;
    this.year = year;
  }
  drive () {
    console.log (`this car is driving`)
  }
  stop () {
    console.log (`this car is stop`)
  }
}

let car1 = new Car ("toyota1", "corolla1", "red")
let car2 = new Car ("toyota2", "corolla2", "blue")
let car3 = new Car ("toyota3", "corolla3", "green")

console.log (car1)
console.log (car2)
console.log (car3)

console.log (car1.brand)
console.log (car1.driving())



