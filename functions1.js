// //Question 1
// function findAreaOfRectangle(length, width){
//     console.log(`The area of a rectangle with a length of ${length} * width of ${width} = ${length * width}.`);
// }
// findAreaOfRectangle(10,12);

//Question 2
// function findAreaOfCircle(radius){
//     console.log(`The are of the circle is ${radius * radius * 3.14}.`);
// }
// findAreaOfCircle(3);

//Question 3
// function findMin(x, y){
//     if(x<y){
//         console.log(`${x} is the smaller number.`);
//     }else {
//         console.log(`${y} is the smaller number.`);
//     }
// }
// findMin(2,4);

//Question 4
// function checkEquality(x, y){
//     if(x === y){
//         console.log(`${x} is equal to ${y}.`);
//     }else {
//         console.log(`${x} is not equal to ${y}.`);
//     }
// }
// checkEquality(2,4);

//Question 5
// function calculateLargestRectangle(x, y, x1, y1){
//     if (x*y > x1*y1){
//         console.log(`The rectangle with the measures ${x} * ${y} = ${x*y} is larger than the rectangle with the measures ${x1} * ${y1} = ${x1*y1}.`);
//     }else{
//         console.log(`The rectangle with the measures ${x1} * ${y1} = ${x1*y1} is larger than the rectangle with the measures ${x} * ${y} = ${x*y}.`);
//     }
// }
// calculateLargestRectangle(1,2,3,4);

//Question 6
// function charityCollection(amount1, amount2, amount3){
//     let total = amount1 + amount2 + amount3;
//     if(total >= 1000){
//         total *= 2;
//         console.log(`The charity will recieve ${total} thanks by it being doubled by a local company.`);
//     }else {
//         console.log(`The charity will recieve ${total}.`);
//     }
// }
// charityCollection(1000, 20, 10);

//Question 7
// function stateOfMatter(temperature) {
//     if (temperature >= 100) {
//         console.log(`The water will be a gas!`);
//     } else if (temperature <= 0) {
//         console.log(`The water will be a solid!`);
//     } else {
//         console.log(`The water will be a liquid!`);
//     }
// }
// stateOfMatter(100);

//Question 8
// function findMaximumValue(x,y,z){
//     if(x > y && x > z){
//         console.log(`The largest number is ${x}.`);
//     }else if(y > x && y > z){
//         console.log(`The largest number is ${y}.`);
//     }else if (z > x && z > y){
//         console.log(`The largest number is ${z}.`);
//     }
// }
// findMaximumValue(2,7,6);

//Question 9
// function findMinimumValue(x,y,z){
//     if(x < y && x < z){
//         console.log(`The smallest number is ${x}.`);
//     }else if(y < x && y < z){
//         console.log(`The smallest number is ${y}.`);
//     }else if (z < x && z < y){
//         console.log(`The smallest number is ${z}.`);
//     }
// }
// findMinimumValue(2,7,6);

//Question 10
// function updatedCharityCollection(amount1, amount2, amount3){
//     let total = amount1 + amount2 + amount3;
//     if(total >= 1000 && total <= 2000){
//         total *= 2;
//         console.log(`The charity will recieve ${total} thanks by it being doubled by a local company.`);
//     }else if(total < 1000){
//         total += 100;
//         console.log(`The charity will recieve ${total} thanks by your 100$ bonus.`);
//     }else if(total > 2000){
//         console.log(`The charity will recieve ${total + 2000} as your initial 2k were doubled.`);
//
//     }
// }
// updatedCharityCollection(2002, 20, 10);