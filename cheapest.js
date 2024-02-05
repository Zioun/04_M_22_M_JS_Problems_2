let phone = [
    {name : "Samsung", price : 20000, camera : '12mp', color : 'black'},
    {name : "Xoami", price : 18000, camera : '12mp', color : 'black'},
    {name : "Oppo", price : 30000, camera : '12mp', color : 'black'},
    {name : "Iphone", price : 100000, camera : '12mp', color : 'black'},
    {name : "Walton", price : 310000, camera : '12mp', color : 'black'},
    {name : "HTC", price : 190000, camera : '12mp', color : 'black'}
]

function priceTracker(phone){
    let store = phone[0]
    for(let catcher of phone){
        if(catcher.price < store.price){
            store = catcher;
        }
    }
    return store;
    
}

let result = priceTracker(phone);
console.log(result);