
class Car {
  constructor() {
    this.model = "model1",
    this.color = "color1"
    this.year = 2003
    console.log ("This is a constructor")
  }


  get model() {
    return this.model
  }

  set model(value) {
    this._model = value
  }

}


let car1 = new Car ("M1", "C1", 2000)
console.log (car1)



// Getter
console.log (car1.year)

// Setter
car1.year = 2004
console.log (car1)