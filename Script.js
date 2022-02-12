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

const dolphinsAvearage = (96 + 108 + 89) / 3;
console.log(dolphinsAvearage);
const koalasAvearage = (88 + 91 + 110) / 3;
console.log(koalasAvearage);

if (dolphinsAvearage > koalasAvearage) {
  console.log("Dolphins team is the champian!");
} else {
  console.log("Koalas team is the champian!");
}

if (dolphinsAvearage === koalasAvearage) {
  console.log("This is a draw match");
} else {
  console.log("This is not a draw match");
}
