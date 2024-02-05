function disGenerator(quantity){
    let noDis = 100;
    let dis90 = 90;
    let dis70 = 70;
    if(quantity <= 100){
        let dis1 = quantity * noDis
        return "No Discount: "+dis1;
    }else if(quantity <= 200){
        let dis2 = quantity * dis90;
        return "10% Discount: "+dis2;
    }else{
        let dis3 = quantity * dis70
        return "20% Discount: "+dis3;
    }
}

let result = disGenerator(100);
console.log(result);