/*
    The extends keyword is used to create a subclass (child class) that inherits from parent class.
    super() is used inside a subclass constructor to call the parent class’s constructor.
    You must call super() before using this in a subclass.
    Car (Brand, Model, Color)
    ElectricCar (brand, model, color, batteryLevel)
    SportCar (brand, model, color, topSpeed)
    LuxuryCar (brand, model, color, soundSystem)
    - Override/Overloading methods
*/

class Car {
  constructor (brand, model, color) {
    this.brand = brand
    this.model = model
    this.color = color
  }
  drive() {
    console.log (`Car class: ${this.brand}, ${this.model}, ${this.color} is driving`)
  }
  stop() {
    return (`Car class: ${this.brand}, ${this.model}, ${this.color} has stopped`)
  }
}

class ElectricCar {
  constructor (brand, model, color, batteryLevel) {
    this.brand = brand
    this.model = model
    this.color = color
    this.batteryLevel = batteryLevel
  }
  drive() {
    return `Car class: ${this.brand}, ${this.model}, ${this.color} , ${this.batteryLevel } is driving`
  }
  stop() {
    return (`Car class: ${this.brand}, ${this.model}, ${this.color} , , ${this.batteryLevel } has stopped`)
  }
} 

class SportCar {
  constructor (brand, model, color, topSpeed) {
    this.brand = brand
    this.model = model
    this.color = color
    this.topSpeed = topSpeed
  }
  drive() {
    console.log (`Car class: ${this.brand}, ${this.model}, ${this.color}, ${this.topSpeed} is driving`)
  }
  stop() {
    return (`Car class: ${this.brand}, ${this.model}, ${this.color}, ${this.topSpeed} has stopped`)
  }
}

class LuxuryCar {
  constructor (brand, model, color, soundSystem) {
     this.brand = brand
    this.model = model
    this.color = color
    this.soundSystem = soundSystem
  }
   drive() {
    console.log (`Car class: ${this.brand}, ${this.model}, ${this.color} is driving`)
  }
  stop() {
    return (`Car class: ${this.brand}, ${this.model}, ${this.color} has stopped`)
  }
}

let ElectricCar1 = new ElectricCar ("ELBrand1", "ELModel1", "ELColor1", "1234")
let SportCar1 = new SportCar ("sportBrand", "sportModel", "sportColor", "123")
let LuxuryCar1 = new LuxuryCar ("luxuryBrand1", "LuxuryModel1", "LuzuryColor1", "100")


console.log (` ${ElectricCar1.brand} ${ElectricCar1.model} ${ElectricCar1.color} ${ElectricCar1.batteryLevel} `)
console.log (` ${SportCar1.brand} ${SportCar1.model} ${SportCar1.color} ${SportCar1.topSpeed} `)
console.log (` ${LuxuryCar1.brand} ${LuxuryCar1.model} ${LuxuryCar1.color} ${LuxuryCar1.soundSystem} `)


  
class Abc extends Car {
  constructor (brand, model, color, soundSystem) {
    super (brand, model, color)
    this.soundSystem = soundSystem
  }
}

let Abc1 = new LuxuryCar ("luxuryBrand1", "LuxuryModel1", "LuzuryColor1", "100")
console.log (Abc1.drive())