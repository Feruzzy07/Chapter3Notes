const readLine = require('readLine-sync');

//Question 1
// function nameSwapper(){
//     let first = readLine.question("What is your first name?: ");
//     let last = readLine.question("What is your last name?:" );
//     return(`${last}, ${first}`);
// }
//
// let myName = nameSwapper();
// console.log(myName);

//Question 2
// function numberGenerator(){
//     let num1 = Number(readLine.question("Give me a single interger between 0-9: "));
//     if (num1 > 10 || num1 < 0){
//         console.log("Invalid Number!");
//         num1 = Number(readLine.question("Try again. Give me a single interger between 0-9: "));
//     }
//     let num2 = Number(readLine.question("Give me a another interger between 0-9: "));
//     if(num2 > 10 || num2 < 0){
//         console.log("Invalid Number!");
//         num2 = Number(readLine.question("Try again. Give me a single interger between 0-9: "));
//     }
//     let total = num1 + num2;
//     return(total);
// }
// let add = numberGenerator();
// console.log(`The addition of it is ${add}.`);

//Question 3
// function avgtemp(temp1, temp2, temp3, temp4, temp5, temp6, temp7){
//     let total = temp1 + temp2 + temp3 + temp4 + temp5 + temp6 + temp7;
//     let averagetemp = total / 7;
//     return(averagetemp.toFixed(2));
// }
// let temp = avgtemp(100, 120, 89, 91, 101, 78, 99);
// console.log(`${temp}`);

//Question 4
// function charityCollection(){
//     let charitybank = 0;
//     let charitycollected = 0;
//     let people = Number(readLine.question("How many people are donating"));
//     while (people > 0){
//         charitycollected = Number(readLine.question("How much money was donated?: "));
//         charitybank += charitycollected;
//         people--;
//     }
//     let total = charitybank;
//     if(total >= 1000 && total <= 2000){
//          total *= 2;
//          console.log(`The charity will recieve ${total} thanks by it being doubled by a local company.`);
//     }else if(total < 1000){
//         total += 100;
//         console.log(`The charity will recieve ${total} thanks by your 100$ bonus.`);
//      }else if(total > 2000){
//          console.log(`The charity will recieve ${total + 2000} as your initial 2k were doubled.`);
//
//      }
//     return(total);
//  }
// charityCollection();

//Question 5
// function dartgame(){
//     let round1 = Number(readLine.question("How many points did you score on round 1?: "));
//     if (round1 < 0 || round1 > 180){
//         console.log("Invalid Awnser");
//         round1 = Number(readLine.question("Try again. How many points did you score on round 1?: "));
//     }
//     let round2 = Number(readLine.question("How mnay points did you score on round 2?: "));
//     if (round2 < 0 || round2 > 180){
//         console.log("Invalid Awnser");
//         round2 = Number(readLine.question("Try again. How many points did you score on round 2?: "));
//     }
//     let round3 = Number(readLine.question("How many points did you score on round 3?: "));
//     if (round3 < 0 || round3 > 180){
//         console.log("Invalid Awnser");
//         round3 = Number(readLine.question("Try again. How many points did you score on round 3?: "));
//     }
//     let total = round1 + round2 + round3;
//     console.log(total);
// }
// dartgame();

//Question 6
// function darttournament(){
//     let p1round1 = Number(readLine.question("How many points did player 1 score on round 1?: "));
//     if (p1round1 < 0 || p1round1 > 180){
//         console.log("Invalid Awnser");
//         p1round1 = Number(readLine.question("Try again. How many points did player 1 score on round 1?: "));
//     }
//     let p1round2 = Number(readLine.question("How mnay points did player 1 score on round 2?: "));
//     if (p1round2 < 0 || p1round2 > 180){
//         console.log("Invalid Awnser");
//         p1round2 = Number(readLine.question("Try again. How many points did player 1 score on round 2?: "));
//     }
//     let p1round3 = Number(readLine.question("How many points did player 1 score on round 3?: "));
//     if (p1round3 < 0 || p1round3 > 180){
//         console.log("Invalid Awnser");
//         p1round3 = Number(readLine.question("Try again. How many points did player 1 score on round 3?: "));
//     }
//     let player1 = p1round1 + p1round2 + p1round3;
//
//     let p2round1 = Number(readLine.question("How many points did player 2 score on round 1?: "));
//     if (p2round1 < 0 || p2round1 > 180){
//         console.log("Invalid Awnser");
//         p2round1 = Number(readLine.question("Try again. How many points did player 2 score on round 1?: "));
//     }
//     let p2round2 = Number(readLine.question("How mnay points did player 2 on round 2?: "));
//     if (p2round2 < 0 || p2round2 > 180){
//         console.log("Invalid Awnser");
//         p2round2 = Number(readLine.question("Try again. How many points did player 2 score on round 2?: "));
//     }
//     let p2round3 = Number(readLine.question("How many points did player 2 score on round 3?: "));
//     if (p2round3 < 0 || p1round3 > 180){
//         console.log("Invalid Awnser");
//         p2round3 = Number(readLine.question("Try again. How many points did player 2 score on round 3?: "));
//     }
//     let player2 = p2round1 + p2round2 + p2round3;
//
//     console.log(`Player one scored: ${player1}`);
//     console.log(`Player two scored: ${player2}`);
//     if (player1 > player2){
//         console.log("Player one wins!");
//     }else{
//         console.log("Player two wins!");
//     }
//
// }
// darttournament();

//Question 7
// function linearequation(){
//     let slope = readLine.question("What is the slope of the equation?: ");
//     let yintercept = readLine.question("What is the y-intercept?: ");
//     return(`y = ${slope}x + ${yintercept}`);
// }
// let formula = linearequation();
// console.log(formula);

//Question 8
// function slopeformula(){
//     let x1 = Number(readLine.question("What is the x coordinate of the first point?: "));
//     let y1 = Number(readLine.question("What is the y coordinate of the first point?: "));
//     let x2 = Number(readLine.question("What is the x coordinate of the second point?: "));
//     let y2 = Number(readLine.question("What is the y coordinate of the second point?: "));
//     let rise = y2 - y1;
//     let run = x2 - x1;
//     let slope = `${rise}/${run}`;
//     console.log(`The slope is ${slope}`);
// }
// slopeformula();
