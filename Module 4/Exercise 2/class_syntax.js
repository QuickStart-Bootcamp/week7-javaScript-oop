class Person {
    #first;
    #last;
    constructor(first, last) {
        this.#first = first;
        this.#last = last;
    }
    toString() {
        return `${this.#first} ${this.#last}`;
    }
    get fullName() {
        return `${this.#first} ${this.#last}`;
    }
}

// new operator: instantiation of the class Person with concrete parameters.
let person1 = new Person('John', 'Doe');
let person2 = new Person('Return', 'John');

// person2 --> toString()
console.log(`
    <ul>
        <li>${person1}</li>
        <li>${person2}</li>
    </ul>
`);

console.log('person1.fullName', person1.fullName);

console.log('accessing person1.#first', person1.#first);
// Private field '#first' must be declared in an enclosing class