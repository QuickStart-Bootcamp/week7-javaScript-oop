let item = {
    name: 'My Favorite Movie', 
    price: 979 // in cents 
}

console.log('item.name', item.name);
console.log('item["price"]', item['price']);

// Mutability of objects
function addOneDollarToPrice(price) {
    price += 100;
    console.log('price in addOneDollarToPrice', price);
}

let price = 1999;
addOneDollarToPrice(price);
console.log('price', price); // 1999 or 2099? 

function addOneDollarToItemPrice(innerItem) {
    innerItem.price += 100;
    console.log('price in addOneDollarToItemPrice', innerItem.price);
}
addOneDollarToItemPrice(item); 
console.log('item.price', item.price); // 979 or 1079?

// item --->| key   | value               |<--innerItem
//          | name  | "My favorite movie" |
//          | price | 1079                |
//
// Exercise A: run this code on Pythontutor.com

// Exercise B: find a way to separate the outside item from the inner item such 
// that when console logging item.price on line 24, you get 979.
