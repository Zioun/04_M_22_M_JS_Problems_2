function layered(quantity){
    let outOf100Price = 100;
    let outOf200Price = 90;
    let above200Price = 70;

    if(quantity <= 100){
        let discount1 = quantity * outOf100Price;
        return "No Discount :"+discount1;
    }else if(quantity <= 200){
        let simple = 100 * outOf100Price;
        let subtract = quantity - 100;
        let total = subtract * outOf200Price;
        let result = simple + total;
        return "Discount 10%:"+result;
    }else{
        let simple100 = outOf100Price * 100;
        let simple200 = outOf200Price * 90;
        let subtract = quantity - 200;
        let total = subtract * above200Price;
        let result = simple100+simple200+total;
        return "Discount 30%: "+result;
    }
}

console.log(layered(301));