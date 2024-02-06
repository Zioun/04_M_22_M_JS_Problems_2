// TODO Task 3:
// TODO Your task is to calculate the total budget required to buy electronics:

let productsObj = [
    {product: 'laptop', price : 35000, quantity : 1},
    {product: 'tablet', price : 15000, quantity : 2},
    {product: 'mobile', price : 20000, quantity : 3}
]

function generator(productsObj){
    let store = 0;
    for(let item of productsObj){
        store += item.price * item.quantity;
    }
    return store;
    
}
let result = generator(productsObj);
console.log("Total price: ",result);

