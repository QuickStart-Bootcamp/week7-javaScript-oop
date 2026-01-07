// fuelLevel, #engineStatus

class Car {
  // private properties
  #fuelLevel
  #engineStatus

  constructor (brand, model, color, fuelLevel) {

    // public properities
    this.brand = brand
    this.model = model
    this.color = color

    // private properities
    this.#fuelLevel = fuelLevel
    this.#engineStatus = true
  }

  drive() {
    console.log (`Car class: ${this.brand}, ${this.model}, ${this.color} is driving`)
  }
  stop() {
    return (`Car class: ${this.brand}, ${this.model}, ${this.color} has stopped`)
  }
}

let car1 = new Car ("brand1", "model1", "color1", "fuelLevel1")
console.log (car1.brand)
console.log (car1.model)
console.log (car1.color)
console.log (car1.fuelLevel)