function minGenerator (data){
    let store = data[0];
    for(let catcher of data){
        if(catcher < store){
            store = catcher;
        }
    }
    return store;
}
let arrayOfData = [3,999,48,27,62,54,1,39,47,236,484,9995];
let result = minGenerator(arrayOfData);
console.log(result);