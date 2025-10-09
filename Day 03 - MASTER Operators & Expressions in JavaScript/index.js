console.log("Day 03");

// Operator - Symbols + - * /
// Operands - x+y, x and y are the operands.
// Expression x = 2 / 3 + 4

let x = 4+5
console.log(x);

// Arithmetic operators
let a=12
let b=5

console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a/b);

console.log(a**b);
console.log(a%b);

// Post-Increment vs Pre-Increment
let count=5
console.log(count++);
console.log(count);
console.log(++count);

// Assignment Operators
console.log("Assignment Operators");
let x2=10
x2+=5
console.log(x2);

 // Comparison Operators
console.log("**** Comparison Operators ****")
console.log(0 == false)
console.log(3 == '3')
console.log(3 != '3')
console.log(3 === '3')
console.log(null === null)
console.log(undefined === undefined)

// different memory address
let obj1 = {'name': 'tansen'} // XX0011
let obj2 = {'name': 'tansen'} // YY022

console.log(obj1 === obj2) //false
console.log(obj1 !== obj2) //true

// Logical operators
console.log("**** Logical operators ****")
// && || ?? !
// op1 && op2
console.log(false && false); // false
console.log(true && false); // false
console.log(true && true); // true
console.log(false && true); // false

console.log("Cow" && "Horse"); // "Horse"

console.log(0 && "Horse");      // 0        → stops early (0 is falsy)
console.log("Cow" && "");       // ""       → second operand falsy
console.log("Cow" && "Horse");  // "Horse"  → both truthy, returns last
console.log("Cow" && null);     // null     → returns first falsy (null)

console.log(false || false); // false
console.log(true || false); // true
console.log(true || true); // true
console.log(false || true); // true

console.log("Cow" || "Horse"); // "Cow"

console.log(!false)

// Nullish Coalescing Operator
let a1 = null ?? 1; // 1
let a2 = undefined ?? 3 // 3
const a3 = false ?? "tansen" // false
const a4 = 0 ?? "tansen" // 0

// Conditional (ternary) operator
console.log("**** Conditional (ternary) operator ****")
// condition ? val1 : val2

let age = 23;
console.log(age >= 60 ? "Senior Citizen" : "Non Senior Citizen");

// Grouping
console.log("**** Grouping ****")

let p = 1;
let q = 2;
let r = 3;

console.log(p + q * r) // 1 + 2 * 3 = 1 + 6 = 7
p + (q * r) // 7

(p + q) * r // (1 + 2) * 3 = 3 * 3 = 9

// p * r + q * r = 1 * 3 + 2 * 3 = 3 + 6 = 9

p * (r + q) * r


// typeof
console.log("**** typeof ****")


typeof "tapas"; // "string"
typeof false; // "boolean"

let size = 100;
typeof size; // "number"

const numbers = [1,2,3,4]
typeof numbers; // "object"

typeof null; // "object"
