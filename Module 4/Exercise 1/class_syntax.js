// Person is a constructor function (class)
// Person is a blueprint of concrete instances (person1, person2)
class Person {
    constructor(first, last) {
        this.first = first;
        this.last = last;
    }
    toString() {
        return `${this.first} ${this.last}`;
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

// delete person2.toString; // <-- person2 never had a toString() method on object level
delete Person.prototype.toString;  // this time toString is in Person.

// person1 --[[Prototype]]--> Person --> Object --> toString()
// person2 --[[Prototype]]--> Person --> Object --> toString()
console.log(`
    <ul>
        <li>${person1}</li>
        <li>${person2}</li>
    </ul>
`);