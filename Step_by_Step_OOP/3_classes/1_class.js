// Brand   Model     Color
// Toyota  Corolla   Red
// Honda   Civic     Blue
// Ford    Mustand   Black
// Classes are a template for creating objects. 
// They encapsulate data with code to work on that data.
// "this" refers to the instance being created.

// Definition of Class

class Car {
  constructor (brand, model, color) {
    this.brand = brand
    this.model = model
    this.color = color
  }
  drive () {
    console.log ("This car is driving")
  }
  stop () {
    console.log ("This car is being stopped")
  }
}

const car1 = new Car ("Toyota", "Corolla", "red")
const car2 = new Car ("Honda", "Civic", "Blue")
const car3 = new Car ("Ford", "Mustand", "black")

console.log (car1)
console.log (car2)
console.log (car3)


