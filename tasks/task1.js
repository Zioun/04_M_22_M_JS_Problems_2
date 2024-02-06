// TODO Task 1:
// TODO Find the lowest number in the array below.

const heights2 = [167, 190, 120, 165, 137];

function generator(heights2){
    let store = heights2[0]
    for(let item of heights2){
        if(item < store){
            store = item;
        }
    }
    return store;
}

let result = generator(heights2);
console.log(result);