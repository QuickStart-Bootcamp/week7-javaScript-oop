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
    items = {...items};
    // items = Object.assign({}, items);
    items[0].price += 100;
    console.log(items[0].price);    
}

addOneDollarToFirstItemPrice(items);
console.log(items[0].price);

// Exercise A: why is the last console log logging 1079? Run it in pythontutor.
// Exercise B: fix the problem (solution: Solution02.js)
