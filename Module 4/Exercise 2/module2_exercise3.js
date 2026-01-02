function Person(first, last) {
    let _first = first;
    let _last = last;
    this.toString = () => `${_first} ${_last}`;
    Object.defineProperty(this, 'fullName', {
        get: function() { 
            return `${_first} ${_last}`;
        }
    });
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