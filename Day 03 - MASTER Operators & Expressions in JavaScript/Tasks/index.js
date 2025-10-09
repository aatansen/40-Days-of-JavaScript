/*
Task 01 - Odd or Even?
- Take a number and find if the number is an odd or even number.
- Print the number and result in the console.
*/
let num1=3
if(num1%2==0){
    console.log(`Number ${num1} is even number`);
}else{
console.log(`Number ${num1} is odd number`);
}

/*
Task 02 - Do you have a Driving License?
- Let's check if you are eligible to get a driving license. The eligibility to get a driving license is 18 years.
- Manage age as a variable.
- Check if the age is eligible for a driving license and print it on the console accordingly.
*/
let age=18
if(age>=18){
    console.log(`Age ${age} is eligible for a driving license`);
}else{
    console.log(`Age ${age} is not eligible for a driving license`);
}

/*
Task 03 - Calculate CTC with a Bonus
- Let's calculate how much you earn from your office.
- You get 12,300 rupees as your monthly salary.
- You get a 20% bonus on your annual salary.
- How much money do you make per annum as a CTC?
*/
let monthSalary=12300
let annualSalary=12300*12
let bonusAnnual=annualSalary*(20/100)
let annumCtc=annualSalary+bonusAnnual
console.log(annumCtc);

/*
Task 04 - Write a program for the Traffic Light Simulation
- Red Light... Green Light... Let's Play!
- Create a color variable.
- Based on the color variable's value print in the console if a traveler needs to STOP or GO. The Red color is for STOP and the Green color is for GO.
*/
let color="Green Light"
if(color=="Red Light"){
    console.log(`Stop Traveler! It is ${color}`);
}else if(color=="Green Light"){
    console.log(`GO Traveler! It is ${color}`);
}else{
    console.log(`${color} not a valid color`);
}

/*
Task 05 - Create an Electricity Bill Calculator
Let's calculate how much you pay for electricity bills per month and annually.
- Create a units variable. Based on this value you will calculate the total electricity bill for a months.
- If each day you consume the units and each unit cost 150 rupees, how much will you be charged per month?
- If there is a 20% discount on the annual payment, how much will you be charged for an annual payment?
*/
let units=5
let perUnitCost=150
let perMonthCost=(units*perUnitCost)*30
let annualCost=(perMonthCost*12)
let discount = annualCost*(20/100)
let discountedAnnualCost=annualCost - discount
console.log(perMonthCost);
console.log(discountedAnnualCost);

/*
Task 06 - Leap Year Checker
Is 2025 a Leap Year?
- Take year as input.
- Use the arithmetic operator and ternary operator to print if a year is a leap year or not.
*/
let year = 2025
let result = year%4==0?"Leap Year":"Not Leap Year"
console.log(result);

/*
Task 07 - Max of Three Numbers
Find the max number from the lot.
- Take three numbers and assign them to variables p, q, and r.
- Now find the maximum of these three numbers using the comparison operators.
*/
let p=5,q=1,r=4
if(p>q && p>r){
    console.log(`${p} is maximum among ${q} & ${r}`);
}else if(q>p && q>r){
    console.log(`${q} is maximum among ${p} & ${r}`);
}else{
    console.log(`${r} is maximum among ${p} & ${q}`);
}

/*
Task 08 - Bitwise Doubling
A tricky one for you
- Create a variable count and assign a value, say, 5.
- Now use the Bitwise shift operator to make the number double.
- Print it on the console.
*/
let count=5
// 5 = 101
// 10 = 1010
console.log(count<<1);

