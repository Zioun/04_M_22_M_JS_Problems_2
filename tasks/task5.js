// TODO Task 5: (Hard)
// TODO For each employee their current salary is calculateSalariesd by multiplying yearly increment with experience then adding the result to the starting salary. Now calculateSalaries is the total salary has to be provided by the company in a month.

const employees = [
    { name: "Shahin", experience: 5, starting: 20000, increment: 5000 },
    { name: "Shihab", experience: 3, starting: 15000, increment: 7000 },
    { name: "Shikot", experience: 9, starting: 30000, increment: 1000 },
    { name: "Shohel", experience: 0, starting: 29000, increment: 4000 }
];


function calculateSalaries(employees){
    let msg = "Company Total Expense: ";
    let store = 0;
    for(let item of employees){
        let current = (item.experience * item.increment)+item.starting;
        let info = ("Name : "+item.name+" - "+"Experience : "+item.experience+" - "+"Starting : "+item.starting+" - "+"Increment Per Month : "+item.increment+" - "+"Current Salary : "+current);
        console.log(info);
        store += current;
    }
    return msg + store;
}

let result = calculateSalaries(employees);
console.log(result);