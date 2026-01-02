// Person is a constructor function (class)
// Person is a blueprint of concrete instances (person1, person2)
function Person(first, last) {
    this.first = first;
    this.last = last;
    this.toString = () => `${this.first} ${this.last}`;
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

delete person2.toString;

// person2 --[[Prototype]]--> Object --> toString()
console.log(`
    <ul>
        <li>${person1}</li>
        <li>${person2}</li>
    </ul>
`);