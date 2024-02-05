let products = [
    {name : "Shampoo", price : 300},
    {name : "Chiruni", price : 100},
    {name : "Shirt", price : 700},
    {name : "Pant", price : 1200}
]

function priceCounter(products){
    let store = 0;
    for(let catcher of products){
        store += catcher.price;
    }
    return store;
}


let result = priceCounter(products);
console.log(result);