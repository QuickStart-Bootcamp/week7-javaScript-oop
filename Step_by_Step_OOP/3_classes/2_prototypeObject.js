// Prototype: Is a mechanism by which objects can inherit features from one another. 
//            every JavaScript object has a hidden, internal property called [[Prototype]], which either points 
//            to another object (its prototype) or null. This forms what's known as the prototype chain and is 
//            fundamental to JavaScript’s inheritance system.

let car1 = {
  brand: "Toyota",
  model: "Corolla",
  color: "red",
  drive() {
    console.log (`${this.brand}, ${this.model}, ${this.color} is driving`)
  }
}

console.log (car1)