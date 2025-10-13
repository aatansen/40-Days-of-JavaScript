console.log("Day 06 Tasks");

/*
Task 01 - Write a Function to Convert Celsius to Fahrenheit
- Create a function celsiusToFahrenheit(celsius) that converts a temperature from Celsius to Fahrenheit.
- Formula: (Celsius * 9/5) + 32 = Fahrenheit
*/
console.log("**Task 01 Solution**");
function celsiusToFahrenheit(celsius){
    let fahrenheit = (celsius * 9/5) + 32
    return fahrenheit
}
console.log(celsiusToFahrenheit(5));

/*
Task 02 - Create a Function to Find the Maximum of Two Numbers
- Write a function findMax(num1, num2) that returns the larger of the two numbers.
- It should work for negative numbers as well.
*/
console.log("\n");
console.log("**Task 02 Solution**");
function findMax(num1,num2){
    if (num1>num2){
        return num1
    }else{
        return num2
    }
}
console.log(findMax(10,-10));

/*
Task 03 - Function to Check if a String is a Palindrome
- Create a function isPalindrome(str) that checks if a given string is a palindrome (reads the same forward and backward).
- You can not use any string function that we have not learned in the series so far.
*/
console.log("\n");
console.log("**Task 03 Solution**");
function isPalindrome(str) {
    let rev_str =""
    for(let i=str.length-1;i>=0;i--){
        rev_str+=str[i]
    }
    if(str===rev_str){
        return `${str} is a palindrome`
    }else{
        return `${str} is not a palindrome`
    }
}
console.log(isPalindrome("bcb"));

/*
Task 04 - Write a Function to Find Factorial of a Number
- Create a function factorial(n) that returns the factorial of n. Example 5! = 5 * 4 * 3 * 2 * 1
*/
console.log("\n");
console.log("**Task 04 Solution**");
// using for loop
function factorial(n){
    for(let i=n;i>0;i--){
        return i
    }
}
console.log(factorial(4));

// using recursion
function factorial(n){
    if(n==0 || n==1){
        return 1
    }else{
        return n* factorial(n-1)
    }
}
console.log(factorial(4));

/*
Task 05 - Write a function to Count Vowels in a String
- Write a function countVowels(str) that counts the number of vowels (a, e, i, o, u) in a given string.
*/
console.log("\n");
console.log("**Task 05 Solution**");
function countVowels(str){
    let count=0
    str=str.toLowerCase()
    for(let i=0;i<str.length;i++){
        // console.log(str[i]);
        if(str[i]==='a' || str[i]==='e' || str[i]==='i' || str[i]==='o' || str[i]==='u'){
            count+=1
        }
    }
    return count
}
console.log(countVowels("I live in Dhaka"));

/*
Task 06 - Write a Function to Capitalize the First Letter of Each Word in a Sentence
- Write a function capitalizeWords(sentence) that takes a sentence and capitalizes the first letter of each word. You can use the toUpperCase() method of string to convert the lowercase to uppercase.
*/
console.log("\n");
console.log("**Task 06 Solution**");
function capitalizeWords(sentence){
    let char="",result="",capNext=true
    for(let i =0;i<sentence.length;i++){
        char=sentence[i]
        if(char==" "){
            result+=" "
            capNext=true
        }else{
            if(capNext){
                result+=char.toUpperCase()
                capNext=false
            }else{
                result+=char
            }
        }
    }
    return result
}
console.log(capitalizeWords("dhaka is the capital of bangladesh"));

/*
Task 07 - Use an IIFE to Print “Hello, JavaScript!”
- Write an IIFE that prints "Hello, JavaScript!" to the console. Here the Second word must be supplied using parameter and argument.
*/
console.log("\n");
console.log("**Task 07 Solution**");
(function(word){
    console.log(`Hello, ${word}!`);
})("JavaScript")

/*
Task 08 - Create a Simple Callback Function
- Write a function greet(name, callback), where callback prints a message using the name parameter.
*/
console.log("\n");
console.log("**Task 08 Solution**");
function greet(name, callback){
    callback(name)
}
function buzzCall(name){
    console.log(`Hello, ${name}`);
}
greet("Tansen",buzzCall)

/*
Task 09 - Create Call Stack Execution Diagram for this flow

function f1() {}
function f2() {
    f1();
}
f2();
*/
console.log("\n");
console.log("**Task 09 Solution**");
// shown in md file

/*
Task 10 - Create Call Stack Execution Diagram for this flow

function f1() {}
function f2() {}
function f3() {
    f1();
}
f2();
f3();
f1();
*/
console.log("\n");
console.log("**Task 10 Solution**");
// shown in md file
