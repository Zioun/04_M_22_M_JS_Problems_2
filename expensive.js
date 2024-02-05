let phones = [
    {name : "Samsung", price : 20000, camera : '12mp', color : 'black'},
    {name : "Xoami", price : 18000, camera : '12mp', color : 'black'},
    {name : "Oppo", price : 30000, camera : '12mp', color : 'black'},
    {name : "Iphone", price : 100000, camera : '12mp', color : 'black'},
    {name : "Walton", price : 31000, camera : '12mp', color : 'black'},
    {name : "HTC", price : 19000, camera : '12mp', color : 'black'}
]


function priceTracker(phones){
    let store = phones[0];
    for(let catcher of phones){
        if(catcher.price > store.price){
            store = catcher;
        }
    }
    return store;
}


let result = priceTracker(phones);
console.log(result);