// Brand     Model     Color
// Toyota    Corolla   Red
// Honda     Civic     Blue
// Ford      Mustand   Black
// Ferrari   458       White  

// What is this in object: this refers to the object that is calling the method.
// It allows the method to access properties of the same object it belongs to.


let car1 = {
  brand: "Toyota",
  model: "Corolla",
  color: "red",
  drive: function() {
    console.log ("Car is driving")
  }
}

car1.color = "blue"

console.log (car1.brand)


