console.log("Day 05 Tasks");

/*
Task 01 - Generate a Pyramid Pattern using Nested Loop as it is shown below
*
* *
* * *
* * * *
* * * * *
*/
console.log("**Task 01 Solution**");
for(let row=1;row<=5;row++){
    let line=""
    for(let star=1;star<=row;star++){
        line += "* "
    }
    console.log(line)
}

/*
Task 02 - Create Multiplication Table (Using for loop)
- Write a program to print the multiplication table of a given number up to 10. For Example: If N = 3, output should be:

3 x 1 = 3
3 x 2 = 6
...
3 x 10 = 30
*/
console.log("\n");
console.log("**Task 02 Solution**");
let N=7
for(let i=1;i<=10;i++){
    // console.log(N,"*",i,"=",N*i);
    console.log(`${N} * ${i} = ${N*i}`);
}

/*
Task 03 - Find the summation of all odd numbers between 1 to 500 and print them on the console log.
*/
console.log("\n");
console.log("**Task 03 Solution**");
let sum=0
for(let i=1;i<=500;i++){
    if(i%2!==0){
        // console.log(i);
        sum+=i
    }
}
console.log(sum);

/*
Task 04 - Skipping Multiples of 3
Write a program to print numbers from 1 to 20, but skip multiples of 3.
*/
console.log("\n");
console.log("**Task 04 Solution**");
for(let i=1;i<=20;i++){
    if(i%3===0){
        continue
    }
    console.log(i);
}

/*
Task 05 - Reverse Digits of a Number (Using while loop)
- Write a program to reverse the digits of a given number using a while loop.

Example:

Input: 6789
Output: 9876
*/
console.log("\n");
console.log("**Task 05 Solution**");
let num1=6789,rev_num=""
while(num1!=0){
    rev_num+=num1%10
    num1=parseInt(num1/10)
}
console.log(rev_num);

/*
Task 06 - Write your understanding on the differences between for, while, and do-while loop. Create their flow charts.
*/
console.log("\n");
console.log("**Task 06 Solution**");
console.log(`
for loop: Runs when you know the exact number of iterations beforehand.

while loop: Runs when the condition is true and the number of iterations is not fixed.

do-while loop: Runs at least once before checking the condition.
`);
// flowchart added in md file

