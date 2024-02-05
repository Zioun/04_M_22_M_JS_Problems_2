let products = [
    {name : "Shampoo", price : 300, quantity : 1},
    {name : "Chiruni", price : 100, quantity : 2},
    {name : "Shirt", price : 700, quantity : 5},
    {name : "Pant", price : 1200, quantity : 3}
]

function priceCounter(products){
    let store = 0;
    for(let catcher of products){
        let multiply = catcher.price * catcher.quantity;
        store += multiply;
    }
    return store;
}

let result = priceCounter(products);
console.log(result);