"use strict";

// console.log(12 + 65 + 56 + 645);
// let js = "Amazing";
// console.log(js);

// //This is my first time, that I am coding in javaScript..

// let firstName = "Habib";
// let lastName = "Sultani";

// console.log(firstName);
// console.log(lastName);

// corse assignment

/*
let contonent = "Asia";
let country = "Afghanistan";
let population = "32 million";
console.log(contonent);
console.log(country);
console.log(population);

country = "Afghanistan";
console.log(country);
*/

// let country = "Afghanistan";
// country = "Afghanistan";
// console.log(country);

/*
const contonent = "Asia";
const country = "Afghanistan";

console.log(contonent > country);

const mybiryear = "2022-20";
const currentage = "2022-2002";
console.log(2022 - 20, 2022 - 2002);

const mainlanguage = "Dari";
let language = "pasto";
console.log(mainlanguage);
console.log(language);
language = "Uzbaki";
console.log(language);
language = "Hazaragi";
console.log(language);
*/
// chellenge code #1
/*    
Mark and John are trying to compare their BMI (Body Mass Index), which is
calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height) (mass in kg
and height in meter).
Your tasks:
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both
versions)
3. Create a Boolean variable 'markHigherBMI' containing information about
whether Mark has a higher BMI than John.
Test data:
§ Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
m tall.
§ Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
m tall.
GOOD LUCK 😀
*/

/*

data 1
const massmark = 78;
const hieghtmark = 1.69;
const massjhon = 92;
const hieghtjhon = 1.95;

const BMImark = massmark / hieghtmark ** 2;
const BMIjhon = massjhon / (hieghtjhon * hieghtjhon);
const markHigherBMI = BMImark > BMIjhon;
console.log(BMImark, BMIjhon, markHigherBMI);
*/
//data 2
/*
const massmark = 95;
const hieghtmark = 1.88;
const massjhon = 85;
const hieghtjhon = 1.76;
const BMImark = massmark / hieghtmark ** 2;
const BMIjhon = massjhon / (hieghtmark * hieghtmark);
console.log(BMImark, BMIjhon);
const markHigherBMI = BMImark < BMIjhon;
console.log(markHigherBMI);
*/
/*
Coding Challenge #2
Use the BMI example from Challenge #1, and the code you already wrote, and
improve it.
Your tasks:
1. Print a nice output to the console, saying who has the higher BMI. The message
is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
BMI (28.3) is higher than John's (23.9)!"
Hint: Use an if/else statement 😉
GOOD LUCK 😀
*/
// if (markHigherBMI) {
//   console.log(`Mark's BMI is higher than John's!`);
// } else {
//   console.log(`Mark's BMI ${BMImark} is higher than jhon's ${BMIjhon}`);
// }
/*
Coding Challenge #3

There are two gymnastics teams, Dolphins and Koalas. They compete against each
other 3 times. The winner with the highest average score wins a trophy!
Your tasks:
1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition,
and print it to the console. Don't forget that there can be a draw, so test for that
as well (draw means they have the same average score)
3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a
team only wins if it has a higher score than the other team, and the same time a
score of at least 100 points. Hint: Use a logical operator to test for minimum
score, as well as multiple else-if blocks 😉
4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when
both teams have the same score and both have a score greater or equal 100
points. Otherwise, no team wins the trophy
Test data:
§ Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
§ Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
§ Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106
GOOD LUCK 😀
*/

// const dolphinsAvearage = (96 + 108 + 89) / 3;
// console.log(dolphinsAvearage);
// const koalasAvearage = (88 + 91 + 110) / 3;
// console.log(koalasAvearage);

// if (dolphinsAvearage > koalasAvearage) {
//   console.log("Dolphins team is the champian!");
// } else {
//   console.log("Koalas team is the champian!");
// }

// if (dolphinsAvearage === koalasAvearage) {
//   console.log("This is a draw match");
// } else {
//   console.log("This is not a draw match");
// }
/////Bunas !

// const dolphinsAvearage = (97 + 112 + 101) / 3;
// console.log(dolphinsAvearage);
// const koalasAvearage = (109 + 95 + 106) / 3;
// console.log(koalasAvearage);

// if (
//   dolphinsAvearage > koalasAvearage &&
//   dolphinsAvearage >= 100 &&
//   koalasAvearage >= 100
// ) {
//   console.log("Dolphins team is the champian!");
// } else {
//   console.log("Koalas team is the champian!");
// }

// if (dolphinsAvearage === koalasAvearage) {
//   console.log("This is a draw match");
// } else {
//   console.log("This is not a draw match");
// }

// const day = "suday";

// switch (day) {
//   case "monday":
//     console.log("I start my cooding lesson. ");
//     break;
//   case "Saturday":
//     console.log("I plan to do my assifnment");
//     break;
//   case "sunday":
//   case "tuseday":
//     console.log("I watch some films");
//     break;
//   default:
//     console.log("This is not a valid day!");
// }

// if (day === "sunday") {
//   console.log("I watch some films");
// } else if (day === "monday") {
//   console.log("I start my cooding lesson. ");
// } else {
//   console.log("This is not a valid day!");
// }

/*
Coding Challenge #4

Steven wants to build a very simple tip calculator for whenever he goes eating in a
restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and
300. If the value is different, the tip is 20%.
Your tasks:
1. Calculate the tip, depending on the bill value. Create a variable called 'tip' for
this. It's not allowed to use an if/else statement 😅 (If it's easier for you, you can
start with an if/else statement, and then try to convert it to a ternary
operator!)
2. Print a string to the console containing the bill value, the tip, and the final value
(bill + tip). Example: “The bill was 275, the tip was 41.25, and the total value
316.25”
Test data:
§ Data 1: Test for bill values 275, 40 and 430
Hints:
§ To calculate 20% of a value, simply multiply it by 20/100 = 0.2
§ Value X is between 50 and 300, if it's >= 50 && <= 300 😉
GOOD LUCK 😀
*/

// const bill = 430;
// const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

// console.log(`The bill was ${bill}, the tip was ${tip}, and the total value
//   ${tip + bill}`);

/////////////////////////////////////
////////////// FUANCTION /////////////
/////////////////////////////////////

// function logger() {
//   console.log("My name is Habib");
// }

// logger();

// function fruitProceccors(apples, banana) {
//   const juice = `juice with ${apples} apples and ${banana} bananas`;
//   return juice;
// }

// console.log(fruitProceccors(6, 4));
// console.log(fruitProceccors(10, 20));

// function habibandmahmodage(habib, mahmod) {
//   const typeAges = `my age is ${habib} and his age is
//   ${mahmod} `;
//   return typeAges;
// }

// console.log(habibandmahmodage(20, 30));
// console.log(habibandmahmodage(24, 23));

/// function declration

// function calcAge1(birthyear) {
//   return 2022 - birthyear;
// }

// console.log(calcAge1(2002));

// /// Function expresion

// const calcAge2 = function (birthyear) {
//   return 2022 - birthyear;
// };

// console.log(calcAge2(2002));

/// Arrow function

// const calcAge3 = (birthyear) => 2022 - birthyear;
// const age3 = calcAge3(2002);
// console.log(age3);

// const ageUntilretirment = (birthyear) => {
//   const age = 2022 - birthyear;
//   const retirmentAge = 65 - age;
//   return retirmentAge;
// };

// console.log(ageUntilretirment(1978));

/// function calling other function

// function friutPices(friut) {
//   return friut * 5;
// }

// function fruitProceccors(apples, banana) {
//   const applePices = friutPices(apples);
//   const bananaPices = friutPices(banana);

//   const friut = `juice with ${applePices} apples
//   and with ${bananaPices} banana`;
//   return friut;
// }

// console.log(fruitProceccors(4, 6));

/*
  Coding Challenge #1
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new
gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so
one average score per team).
A team only wins if it has at least double the average score of the other team.
Otherwise, no team wins!
Your tasks:
1. Create an arrow functyion 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function 'checkWinner' that takes the average score of each team
as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner
to the console, together with the victory points, according to the rule above.
Example: "Koalas win (30 vs. 13)"
4. Use the 'checkWinner' function to determine the winner for both Data 1 and
Data 2
5. Ignore draws this time
Test data:
§ Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
§ Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27
Hints:
§ To calculate average of 3 values, add them all together and divide by 3
§ To check if number A is at least double number B, check for A >= 2 * B.
Apply this to the team's average scores 😉
GOOD LUCK 😀
*/

//?

// const winner = checkWinner(calcAveraged, calcAveragek);
// console.log(winner);

// const winnera = checkWinner(250, 50);
// console.log(winnera);

// const winnerb = checkWinner(50, 250);
// console.log(winnerb);

//data 2

//85, 54 and 41. Koalas score 23, 34 and 27
// calcAveraged = calcAverage(85 + 54 + 41);
// calcAveragek = calcAverage(23 + 34 + 27);

// const winnerdata2 = checkWinner(calcAveraged, calcAveragek);
// console.log(winnerdata2);

// / ARRAY SECTION

// const frinds = ["Bismellah", "Alem", "nawid", "Murtaza"];

// frinds.push("jawad");
// console.log(frinds[0]);

// console.log(frinds, frinds.length);

// frinds.unshift();
// console.log(frinds);

/*
 Coding Challenge #2
Steven is still building his tip calculator, using the same rules as before: Tip 15% of
the bill if the bill value is between 50 and 300, and if the value is different, the tip is
20%.
Your tasks:
1. Write a function 'calcTip' that takes any bill value as an input and returns
the corresponding tip, calculated based on the rules above (you can check out
the code from first tip calculator challenge if you need to). Use the function
type you like the most. Test the function using a bill value of 100
2. And now let's use arrays! So create an array 'bills' containing the test data
below
3. Create an array 'tips' containing the tip value for each bill, calculated from
the function you created before
4. Bonus: Create an array 'total' containing the total values, so the bill + tip
Test data: 125, 555 and 44
Hint: Remember that an array needs a value in each position, and that value can
actually be the returned value of a function! So you can just call a function as array
values (so don't store the tip values in separate variables first, but right in the new
array) 😉

GOOD LUCK 😀
 */

// const calcTip = function (bill) {
//   return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// };

// const bills = [125, 555, 44];
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

// const total = [
//   calcTip(bills[0]) + calcTip(tips[0]),
//   calcTip(bills[0]) + calcTip(tips[0]),
//   calcTip(bills[0]) + calcTip(tips[0]),
// ];

// console.log(bills, tips, total);
///////////////////////////
////  OBJECT SECTION /////
/////////////////////////

const habib = {
  firstName: "habib",
  lastName: "sultani",
  age: 2022 - 2002,
  job: "developer",
  // ['Bismellsh', 'Alem', 'jhon']
};

console.log(habib.age);
console.log(habib["lastName"]);

const interstedIn = prompt(`If you are intersted? please choose between 
  firstName, lastName, age, job`);

habib.location = "Kabul-Afghanistan";
habib["twitter"] = "@habibsultani_";

if (habib[interstedIn]) {
  console.log(habib[interstedIn]);
} else {
  console.log(`wrong option! please choose correct one`);
}

console.log(habib[interstedIn]);
