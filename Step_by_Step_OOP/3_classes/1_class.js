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
  dive () {
    console.log ("driving")
  }
  stop() {
    console.log ("stop")
  }
}

let car1 = new Car ("Toyota", "Corolla", "red")
