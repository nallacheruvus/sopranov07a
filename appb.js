function dLine() {
    console.log("*".repeat(50));
}

function Employee(id, name, desig, salary) {
    this.id = id;
    this.name = name;
    this.desig = desig;
    this.salary = salary;
}
let arr1 = [101, 2, 33, 1, 7, 88, 99, 103, 901, 4];
let arr2 = ["John", "Ahmed", "Rafiq", "Ram", "Rajani", "Kaivalya", "Trevor", "Reena", "Bhargav", "Rinku"];
let arr3 = ["Store Manager", "QA", "Datascience Analyst", "AI&ML Manager", "Linux Admin", "DBA", "CTO", "Receptionist", "Cloud Specialist", "Trainer AWS"];
let arr4 = [1000827, 3236464, 788876, 65565, 2100982, 7866523, 1000000, 21009, 2100995, 21008887];
let empArr = [];
for (let i = 0; i < arr1.length; i++) {
    const emp = new Employee(arr1[i], arr2[i], arr3[i], arr4[i]);
    empArr.push(emp);
}

// console.log(empArr);
//select * from emps where id>99
empArr.filter(n => n.id > 99).forEach(n => console.log(JSON.stringify(n)));
//select * from emps where salary>788880
dLine();
empArr.filter(n => n.salary > 788880).forEach(n => console.log(JSON.stringify(n)));
dLine();
//select * from emps whose desig ='%Manager%'
empArr.filter(n => (n.desig).indexOf("Manager") > 0).forEach(n => console.log(JSON.stringify(n)));
///select * from emps order by empid asc
//comparator
dLine();
empArr.sort((a, b) => a.id - b.id).forEach(n => console.log(JSON.stringify(n)));
dLine();
//select * from emps order by empid desc
empArr.sort((a, b) => b.id - a.id).forEach(n => console.log(JSON.stringify(n)));
//select * from emps order by salary asc
dLine();
empArr.sort((a, b) => a.salary - b.salary).forEach(n => console.log(JSON.stringify(n)));
dLine()
empArr.sort((a, b) => b.salary - a.salary).forEach(n => console.log(JSON.stringify(n)));
///total salary of all employees for a year
let totsal = 0;
const per = 12;
empArr.map(n => n.salary).forEach(n => {
    totsal += n;
});
dLine();
console.log(`The total salary of all empsfor year is ${totsal * 12}`);
dLine();
empArr.sort((a, b) => a.name.length - b.name.length).forEach(n => console.log(JSON.stringify(n)));
dLine();
const origA = (empArr.sort((a, b) => a.id - b.id)).reverse();
console.log(JSON.stringify(origA));
dLine();
console.log((JSON.stringify(empArr)).replace("[", "").replace("]", ""));
dLine();
let arra = [[21, 22], [23, 24], [25, 26], [27, 28], [29, 30]];
console.log(arra);
dLine();
console.log(arra.flat(1));
dLine();
(arra.flatMap((v, i, a) => {
    console.log(v);
}));
dLine();
//cal total sal permonth of all employees
const totsalm = empArr.map(a => a.salary).reduce((a, b) => a + b);
console.log(totsalm);