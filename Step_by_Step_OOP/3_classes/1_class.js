// Brand   Model     Color
// Toyota  Corolla   Red
// Honda   Civic     Blue
// Ford    Mustand   Black
// Classes are a template for creating objects. 
// They encapsulate data with code to work on that data.
// Constructor: Assign values to the object’s properties
// "this" refers to the instance being created.

// Definition of Class

class Car {
 constructor (brand, model, color) {
  this.brand = brand
  this.model = model
  this.color = color
 }


  drive () {
    return (`This car is ${this.brand} ${this.model} ${this.color}`)
  }
  stop() {
    console.log ("The car is stopped")
  }
}

let car1 = new Car ("brand1", "model1", "color1")
let car2 = new Car ("brand2", "model2", "color2")
let car3 = new Car ("brand3", "model3", "color3")
let car4 = new Car ("brand4", "model4", "color4")

console.log (car1)
console.log (car2)
console.log (car3)
console.log (car4)
