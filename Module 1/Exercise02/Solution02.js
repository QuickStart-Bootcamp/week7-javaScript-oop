let items = [
    {
        name: 'My Favorite Movie', 
        price: 979 // in cents 
    },
    {
        name: 'JavaScript Magazine', 
        price: 499
    }
];

function addOneDollarToFirstItemPrice(items) {
    // items = structuredClone(items); // browser only in early 2023
    items = JSON.parse(JSON.stringify(items)); // restrictions apply
    items[0].price += 100;
    console.log(items[0].price);    
}

addOneDollarToFirstItemPrice(items);
console.log(items[0].price);

// Research caniuse.com on structuredClone
// Research lodash deep clone