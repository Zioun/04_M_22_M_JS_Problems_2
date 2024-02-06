// TODO Task 5: (Hard)
// TODO For each employee their current salary is calculated by multiplying yearly increment with experience then adding the result to the starting salary. Now calculate is the total salary has to be provided by the company in a month.

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
        if(item.experience !== 0){
            let info = ("Name : "+item.name+" - "+"Experience : "+item.experience+" - "+"Starting : "+item.starting+" - "+"Increment Per Month : "+item.increment+" - "+"Current Salary : "+item.starting*item.experience);
            
            console.log(info);
        }else{
            let info = ("Name : "+item.name+" - "+"Experience : "+item.experience+" - "+"Starting : "+item.starting+" - "+"Increment Per Month : "+item.increment+" - "+"Current Salary : "+item.starting);

            console.log(info);
        }
        if(item.starting > 0){
            if(item.experience === 0){
                store += item.starting;
            }else{
                store += item.starting * item.experience;
            }
        }
        
    }
    return msg + store;
}

let result = generator(employees);
console.log(result);