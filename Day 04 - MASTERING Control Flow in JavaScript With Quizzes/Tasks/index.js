console.log("Day 04 Tasks");
/*
Task 01 - What will be the output of this code snippet and why?
let day = "Monday";

switch (day) {
   case "monday":
       console.log("It's the start of the week.");
       break;
   default:
       console.log("It's a normal day.");
}
*/
let day = "Monday";

switch (day) {
   case "monday":
       console.log("It's the start of the week.");
       break;
   default:
       console.log("It's a normal day.");
}
// Output is "It's a normal day." Cause it is case sensitive where we can see day = "Monday" but in the case it is "monday" which does not match so default output "It's a normal day."

/*
Task 02 - Build an ATM Cash Withdrawal System
- Rajan goes to the Axis bank ATM. He enters an amount to withdraw. The ATM only allows multiples of 100. Print "Withdrawal successful" if valid, otherwise print "Invalid amount".
*/
let amount = 1500
if(amount%100==0){
    console.log("Withdrawal successful");
}else{
    console.log("Invalid amount");
}

/*
Task 03 - Build a Calculator with switch-case
- Write a simple calculator that takes an operator (+, -, , /, %) as input, and performs the operation on two numbers. Print the output on the console.
*/
let operator = "%"
switch(operator){
    case "+":
        console.log(5+2);
        break
    case "-":
        console.log(5-2);
        break
    case "/":
        console.log(5/2);
        break
    case "%":
        console.log(5%2);
        break
    default:
        console.log("Invalid operator");
}

/*
Task 04 - Pay for your movie ticket
- Imagine, the INOX charges ticket prices based on age:
- Children (<18 years): $3
- Adults (18 - 60 years): $10
- Seniors (60+ years): $8
Write a program that prints the ticket price based on the person’s age.
*/
let age=61
if(age<18){
    console.log(`Ticket price for children age ${age} is $3`);
}else if(18<=age && age<=60){
    console.log(`Ticket price for Adults age ${age} is $10`);
}else if(age>60){
    console.log(`Ticket price for Seniors age ${age} is $8`);
}else{
    console.log("Invalid age");
}

/*
Task 05 - Horoscope Sign Checker
- Write a program that prints the zodiac sign(Aries, Taurus, Gemini, etc.) based on a person’s birth month. Make it month bases, not date based. Like March and April born are Aries, April and May born are Taurus, and so on. Do not use if-else.
*/
let month = "October"

switch(month){
    case "January":
    case "February":
        console.log("Aquarius");
        break
    case "February":
    case "March":
        console.log("Pisces");
        break
    case "March":
    case "April":
        console.log("Aries");
        break
    case "April":
    case "May":
        console.log("Taurus");
        break
    case "May":
    case "June":
        console.log("Gemini");
        break
    case "June":
    case "July":
        console.log("Cancer");
        break
    case "July":
    case "August":
        console.log("Leo");
        break
    case "August":
    case "September":
        console.log("Virgo");
        break
    case "September":
    case "October":
        console.log("Libra");
        break
    case "October":
    case "November":
        console.log("Scorpio");
        break
    case "November":
    case "December":
        console.log("Sagittarius");
        break
    case "December":
    case "January":
        console.log("Capricorn");
        break
    default:
        console.log("Invalid month");
}

/*
Task 06 - Which Triangle?
- A triangle has 3 sides. A Triangle type is determined by its sides:
- All sides equal is called, Equilateral Triangle.
- Two sides equal is called, Isosceles Triangle.
- All sides different is called, Scalene Triangle.
- Take the sides of a triangle as input and write a program to determine the triangle type. Change the inputs every time manually to see if the output changes correctly.
*/
let side1=4,side2=6,side3=7
if(side1===side2 && side1===side3 && side2===side3){
    console.log("Equilateral Triangle");
}else if(side1===side2 || side1===side3 || side2===side3){
    console.log("Isosceles Triangle");
}else if(side1!==side2 || side1!==side3 || side2!==side3){
    console.log("Scalene Triangle");
}else{
    console.log("Invalid values");
}