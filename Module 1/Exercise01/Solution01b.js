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
    // Step 0: Determine if you need shallow or deep cloning
    // Here we need shallow cloning.
    // Step 1: clone reference types
    // In ES2018+
    innerItem = {...innerItem};
    // In ES2015+ (supported by Pythontutor.com)
    // innerItem = Object.assign({}, innerItem);
    // Step 2: operate on the cloned values
    innerItem.price += 100;
    console.log('price in addOneDollarToItemPrice', innerItem.price);
}
addOneDollarToItemPrice(item); 
console.log('item.price', item.price); // 979 or 1079?