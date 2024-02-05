function add(num1, num2){
    return num1 + num2
}
function subtract(num1, num2){
    return num1 - num2;
}
function multiply(num1, num2){
    return num1 *  num2;
}
function divide(num1, num2){
    return num1 / num2;
}




function calculator(a , b, operation){
    if(operation == "add"){
        let opResult = add(a,b);
        return opResult;
    }else if(operation == "subtract"){
        let opResult = subtract(a,b);
        return opResult;
    }else if(operation == "multiply"){
        let opResult = multiply(a,b);
        return opResult
    }else if(operation == "divide"){
        let opResult = divide(a,b);
        return opResult;
    }else{
        return "Only 'add','subtract','multiply','divide','operation is allowed' :( "
    }
}


let result = calculator(15, 7, "add");
console.log(result);