// Defining Object 

let car1 = {
  brand: "Toyota",
  model: "Corolla",
  color: "red",
}

// Object.keys
// Reference: https://www.w3schools.com/jsref/jsref_object_keys.asp
// console.log (car1)
// console.log (Object.keys(car1))

// // Object.values
// // Reference: https://www.w3schools.com/jsref/jsref_object_values.asp
// console.log (Object.values(car1))

// // Using for...in Loop, for (key in car1)
// // Reference: https://www.w3schools.com/js/js_loop_forin.asp
// for (myKeyVar in car1) {
//   console.log (myKeyVar)
// }

// // Using for...of loop, for (carsValue of Object.values(car1)) 
// // Reference: https://www.w3schools.com/js/js_loop_forof.asp
// for (objValue of Object.values(car1)) {
//   console.log (objValue)
// }
// // Accessing object Properties
// console.log (car1.brand)
// console.log (car1["brand"])

// Accesssing object Properties with variable
// let variableName = 'Brand'
// console.log (car1[variableName])

// Adding properties to object
// console.log (car1)
// car1.speed = 200
// console.log (car1)

// // Deleting properties from object
// delete car1.color 
// console.log (car1)

// Accessing object's methods

// Adding a method to an Object


// Updating ubject values
// car1.color = "blue"
// console.log (car1)

// Updating object without modifying the original object {...car1, color:"green"}
let newObject = {...car1, brand:"T1"}
let newObject2 = {...car1, brand:"brand1", color:"Color1"}
console.log (car1)
console.log (newObject)
console.log (newObject2)

// Updating array without modifying the original object {...car1, color:"green"}

 
