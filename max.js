function maxGenerator (data){
    let store = [];
    for(let catcher of data){
        if(catcher > store ){
            store = catcher;
        }
    }
    return store
}
let arrayOfData = [3,999,48,27,62,54,37,39,47,236,484,9995];
let result = maxGenerator(arrayOfData);
console.log(result);