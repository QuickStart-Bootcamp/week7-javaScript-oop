let data = {
    name: 'Zsolt',
    yearOfBirth: 1999, 
    address: '123 Main Street',
    height: 190, // cm
};

// Exercise 1: log all keys to the console.
console.log('\nkeys one-by-one');
for (let key in data) {
    console.log(key);
}

// Exercise 2: log all values to the console. 
console.log('\nvalues one-by-one');
for (let key in data) {
    console.log(data[key]);
}

// Exercise 3: enumerate all keys in an array.
console.log('\narray of keys');
console.log( Object.keys(data) );

// Exercise 4: enumerate all values in an array.
console.log('\narray of values');
console.log( Object.values(data) );

// Exercise 5: enumareate all entries (key-value pairs) in an array. 
/* 
e.g. [
  [ 'name', 'Zsolt' ],
  [ 'yearOfBirth', 1999 ],
  [ 'address', '123 Main Street' ],
  [ 'height', 190 ]
]
*/
console.log('\narray of entries');
console.log( Object.entries(data) );