function createPerson(first, last) {
    return {
        first,
        last,
        toString() { return `${this.first} ${this.last}`; }        
    }
}

let person1 = createPerson('John', 'Doe');
let person2 = createPerson('Return', 'John');

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