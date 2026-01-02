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
    console.log (`Car class: ${this.brand}, ${this.model}, ${this.color} has stopped`)
  }

}

class ElectricCar extends Car {
  constructor (brand, model, color, batteryLevel) {
    super (brand, model, color)
    this.batteryLevel = batteryLevel
  }
  checkBatteryLevel() {
    console.log ("The battery level is checked")
  }
}

class SportCar extends Car {
  constructor (brand, model, color, topSpeed) {
    super (brand, color, model)
    this.topSpeed = topSpeed
  }
  drive() {
    console.log ("This is an amazing sport Car")
  }
}

class LuxuryCar extends Car {
  constructor (brand, model, color, soundSystem) {
    super (brand, color, model)
    this.soundSystem = soundSystem
  }
  drive(speed) {
    console.log (`This is an amazing LuxuryCar with the spped of ${speed} `)
  }
}

let ElectricCar1 = new ElectricCar ("ECbrand1", "ECmodel1", "ECcolor1", "ECBatteryLevel1")
let SCar1 = new SportCar ("SCBrand1", "SCModel1", "SCColor1", "SCSpeed1")
let LCcar1 = new LuxuryCar("LCBrand1", "LCModel1", "LcColor1", "LCSound1")
LCcar1.drive(200)

