const readLine = require('readline-sync');

let answers=['yes', 'no', 'maybe', 'theoratically yes', 'Whatever you wanted the answer to be'];

let randomNum = Math.floor(Math.random()*answers.length);
let answer = answers[randomNum];


let input = readLine.question('I am the all mighty magic 8 ball. Before we begin, do you have any additional outputs you would add to our program? Enter y or n: ');
if(input === 'y'){
        let awnser = readLine.question('What potential outputs would you want to add?: ');
        answers.push(awnser);
        let again = readLine.question('Do you have anymore outputs you would want to add?: y or n: ');
        again = again.toLowerCase();
}else if(input === 'n'){
        console.log('I am the all mighty magic 8 ball. Give me your yes or no question! NOW!');
        readLine.question('What is your question?: ');
        console.log(answer);
}else{
    console.log('Invalid Answer, Try again next time!');
}
console.log('I am the all mighty magic 8 ball. Give me your yes or no question! NOW!');
readLine.question('What is your question?: ');
console.log(answer);
