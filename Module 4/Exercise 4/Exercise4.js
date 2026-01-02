
class Vehicle {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    get coordinates() {
        return [this.x, this.y];
    }
}

class Car extends Vehicle {
    constructor(x, y, numberPlate) {
        super(x, y);
        this.numberPlate = numberPlate;
    }
    getNumberPlate() { // we'll change this later 
        return this.numberPlate;
    }
}

const c = new Car(1, 2, 'A-BC-1234');
console.log(c.getNumberPlate());
console.log(c.coordinates);