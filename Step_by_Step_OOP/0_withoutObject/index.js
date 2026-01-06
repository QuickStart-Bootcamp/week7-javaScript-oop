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
  drive() {
    console.log ("the car is driving")
  }
}

let car2 = {
  brand: "Honda",
  model: "Civic",
  color: "black",
  drive() {
    console.log ("the car is driving")
  }
}

let car3 = {
  brand: "Ford",
  model: "Mustand",
  color: "white",
  drive() {
    console.log ("the car is driving")
  }
}

console.log (car1.color)
console.log (car2.color)
console.log (car3.color)

car1.color = red


