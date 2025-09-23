// Task 01: Declare variables for a person’s name, age, isStudent status, and favorite programming language
let name = "Tansen"
const age = 24
let isStudent = true
let favProgLang = "Python"

// Task 02: Print the values to the console.
console.log(`My name is ${name}. I am ${age} years old. My student status is ${isStudent}. My favourite programming language is ${favProgLang}.`);

// Task 03: Try reassigning values to let and const variables and observe errors.
name = "Shakil"
age = 25
console.log(`Name: ${name}\nAge: ${age}`);

// Task 04: Create an object and an array, assign them to new variables, modify, and observe changes.

// Person object
let Person = {
    name : "Rakib",
    age : 22
}

// array
let arr = [1,2,3,4,5]

// assigning to new variable
let Person2 = Person
let arr2 = arr

// changing newly assign ones
Person2["name"] = "Shakib"
arr2[0] = 6

// printing initial Person and arr values
console.log(Person["name"]);
console.log(arr[0]);


