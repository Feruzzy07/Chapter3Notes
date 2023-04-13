const readLine = require('readline-sync');

let answers=['yes', 'no', 'maybe', 'theoratically yes', 'Whatever you wanted the answer to be'];

let randomNum = Math.floor(Math.random()*answers.length);
let answer = answers[randomNum];

console.log('I am the all mighty magic 8 ball. Give me your yes or no question! NOW!');
readLine.question('What is your question?: ');
console.log(answer);
