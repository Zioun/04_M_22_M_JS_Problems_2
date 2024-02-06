// TODO Task 2:
// TODO Find the friend with the smallest name.

const heights2 = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];

function generator(){
    let store = heights2[0];
    for(let item of heights2){
        if(item.length < store.length){
            store = item;
        }
    }
    return store;
}
let result = generator();
console.log(result);