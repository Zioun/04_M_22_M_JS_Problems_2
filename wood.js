function woodCalculator(qC, qT, qB){
    let perChair =  3;
    let perTable = 10;
    let perBead = 50;

    let chairTotalWood = qC * perChair;
    let tableTotalWood = qT * perTable;
    let beadTotalWood = qB * perBead;

    let totalWood = chairTotalWood + tableTotalWood + beadTotalWood;
    return totalWood;
}

let result = woodCalculator(1, 20, 3);
console.log("Total Wood "+ result +" cft");