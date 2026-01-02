
class Vehicle {
    #x;
    #y;
    constructor(x, y) {
        this.#x = x;
        this.#y = y;
    }
    get coordinates() {
        return [this.#x, this.#y];
    }
}

class Car extends Vehicle {
    #numberPlate;
    constructor(x, y, numberPlate) {
        super(x, y);
        this.#numberPlate = numberPlate;
    }
    get numberPlate() { 
        return this.#numberPlate;
    }
}

const c = new Car(1, 2, 'A-BC-1234');
console.log(c.numberPlate);
console.log(c.coordinates);