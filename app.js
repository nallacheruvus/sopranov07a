const arr = ["Physics", "Nuclear Physics", "Engineering", "Mech", "Chemical"];
// function aa() {
//     console.log("Hai");
// }

// const bb = () => console.log("Hai");
// aa();
// bb();

for (const key in arr) {
    console.log(arr[key]);
}
console.log("*".repeat(50));
for (const i of arr) {
    console.log(i);
}
console.log("*".repeat(50));
arr.forEach((a) => console.log(a));
console.log("*".repeat(50));
arr.map((a) => console.log(a));//React
console.log("*".repeat(50));
arr.map(a => a.toUpperCase()).forEach(a => console.log(a));
console.log("*".repeat(50));
const aa = arr.map(a => a.substring(0, 1).toUpperCase() + a.substring(1, a.length).toLowerCase());
for (const i of aa) {
    console.log(i);
}
console.log("*".repeat(50));
for (const k in aa) {
    console.log(aa[k]);
}
console.log("*".repeat(50));
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}
function Person(name, email) {
    this.name = name;
    this.email = email;
    this.toString = function () {
        return `Name:${this.name}\tEmail:${this.email}`;
    }
}
//Template strings
const tt = "Joseph Conrad";
const aaa = `The name of the author is ${tt} nobel winning author of the book`;
console.log(aaa);
console.log("*".repeat(50));
const arr1 = ["Ram", "Ramsey", "Ali", "Joseph", "Reena"];
const arr2 = ["Ram@yahoo.com", "Ramsey@yahoo.com", "Ali@yahoo.com", "Joseph@yahoo.com", "Reena@yahoo.com"];
let arr4 = [];
for (let i = 0; i < arr1.length; i++) {
    const per = new Person(arr1[i], arr2[i]);
    arr4.push(per);
}
// console.log(arr4);
for (const i in arr4) {
    console.log(arr4[i].toString());
}
console.log("*".repeat(50));
for (const i of arr4) {
    console.log(i.toString());
}
console.log("*".repeat(50));
arr4.forEach(n => console.log(n.toString()));
console.log("*".repeat(50));
arr4.map(n => console.log(n.toString()));



