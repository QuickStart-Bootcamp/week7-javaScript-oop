// Functional programming
let data = {
    key: 'value',
    key2: 'value2'
};
function f(data) { return data.key + ' ' + data.key2; }
console.log(f(data));

// Object oriented programming using JavaScript single instances
// In this module, we'll accept duplication of operations (methods)
// Later, bear in mind that this is WET code (We Enjoy Typing)
let person1 = {
    key: 'value1',
    key2: 'value2',
    f() { return `${this.key} ${this.key2}`; }
};

let person2 = {
    key: 'value3',
    key2: 'value4',
    f() { return `${this.key} ${this.key2}`; } // duplication of f()
};
console.log( person1.f(), person2.f() );

// Object Oriented Programming with classes 
class C {
    constructor(key, key2) {
        this.key = key;
        this.key2 = key2;
    }
    f() { return this.key + ' ' + this.key2; }
}

const instance1 = new C('first', 'last');
const instance2 = new C('other', 'other');

console.log( instance1.f(), instance2.f() );
