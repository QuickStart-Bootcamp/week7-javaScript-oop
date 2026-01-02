// Brand   Model     Color
// Toyota  Corolla   Red
// Honda   Civic     Blue
// Ford    Mustand   Black

// What is this in object: this refers to the object that is calling the method.
// It allows the method to access properties of the same object it belongs to.

let car1 = {
  brand: "Toyota",
  model: "Corolla",
  color: "red",
  drive: function() {
    console.log ("This car is driving")
  },
  stop: function () {
    console.log ("This car is being stopped")
  }
}

console.log (car1.brand)
car1.drive()
car1.stop()

