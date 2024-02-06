const employees = [
    { name: "Shahin", experience: 5, starting: 20000, increment: 5000 },
    { name: "Shihab", experience: 3, starting: 15000, increment: 7000 },
    { name: "Shikot", experience: 9, starting: 30000, increment: 1000 },
    { name: "Shohel", experience: 0, starting: 29000, increment: 4000 }
];

function generator(employees){
    let msg = "Company Total Expense: ";
    let store = 0;
    for(let item of employees){
        let currentSalary = item.starting + (item.experience * item.increment);
        let info = ("Name : " + item.name + " - " + "Experience : " + item.experience + " - " + "Starting : " + item.starting + " - " + "Increment Per Month : " + item.increment + " - " + "Current Salary : " + currentSalary);
        console.log(info);
        store += currentSalary;
    }
    return msg + store;
}

let result = generator(employees);
console.log(result);