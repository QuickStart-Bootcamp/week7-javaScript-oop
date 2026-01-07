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
  constructor (brand, model, color, topspeed) {
    super (brand, model, color)
    this.topspeed = topspeed
  }
  drive () {
    console.log (`This sportCar with ${this.brand} is amazing`)
  }
}

class LuxuryCar extends Car {
  constructor (brand, model, color, soundSystem) {
    super (brand, model, color)
    this.soundSystem = soundSystem
  }
  stop () {
    return "Luxury car do not stop"
  }
}


let ElectricCar1 = new ElectricCar ("ECbrand1", "ECmodel1", "ECcolor1", "ECBatteryLevel1")
let SportCar1 = new SportCar ("SBrand1", "SModel1", "SColor1", "250")
let LuxuryCar1 = new LuxuryCar ("LXBrand1", "LXModel1", "LXColor1", "sound system 232")

console.log (ElectricCar1)
console.log (SportCar1)
console.log (LuxuryCar1.stop())


