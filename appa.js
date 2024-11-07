/**
 * Rest Parameters and spread ops in JS
 * @param  {...any} a 
 */
function aFun(...a) {//rest params
    [...a].forEach(n => console.log(n));//spread operator
}
aFun(1);
console.log("*".repeat(50));
aFun(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
console.log("*".repeat(50));
aFun(11, 12, 13, 14, 15);
console.log("*".repeat(50));
function calSum(...a) {
    const pp = [...a];
    let sums = 0;
    pp.forEach(n => sums += n);
    return sums / pp.length;
}
console.log(calSum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));

//1)dont start the list of params with rest param
//2)dont let the rest parambe in the middle of list 
function tt(c, b, ...a) { }
console.clear();
/**
 * Function constructor
 */
const aFuna = new Function('a', 'b', 'c', 'return a+b+c');
console.log(aFuna(1, 2, 3));
const bFunb = new Function('a', 'return Math.sqrt(a)');
console.log(bFunb(2));
console.log((new Function('a', 'return Math.log(a)'))(21));
/**
 * Object destructuring in JS
 */
var { a, b } = { a: 1001, b: 3001 };//destructuring
console.log(a);
console.log(b);
var { aa, ...ab } = { aa: 9008, ab: [1, 2, 3, 4, 5, 6, 7, 888] };
console.log(aa);
console.log(ab);

/**
 * Rest param being used as stringbuilder
 * @param  {...any} a 
 * @returns 
 */
function jOps(...a) {
    var cc = a.join(";");
    return cc;
}

const myt = jOps('Travis', 'Chamerlein', 'Triber', 'Trevor', 'Dorothy', 'Tinker', 'Tremble');
console.log(myt);
