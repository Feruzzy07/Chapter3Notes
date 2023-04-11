const readLine = require('readline-sync');
let words = [];
let one = readline.question(`Give Me A Person: `);
words.push(one);
let two = readline.question(`Give Me A Vehicle: `);
words.push(two);
let three = readline.question(`Give Me A Noun: `);
words.push(three);
let four = readline.question(`Give Me An Adjective: `);
words.push(four);
let five = readline.question(`Give Me A Color: `);
words.push(five);
let six = readline.question(`Give Me An Adjective Ending With "est": `);
words.push(six);
let seven = readline.question(`Give Me A Person: `);
words.push(seven);
let eight = readline.question(`Give Me An Adjective: `);
words.push(eight);
let nine = readline.question(`Give Me A Verb Ending With "ing": `);
words.push(nine);
let ten = readline.question(`Give Me An Adjective: `);
words.push(ten);

let eleven = readLine.question("Give Me A Color: ");
if (eleven.length === 0){
    let eleven = 'green';
    words.push(eleven);
}else{
    words.push(eleven);
}
let twelve = readLine.question("Give Me A Plural Noun: ");
if (twelve.length === 0){
    let twelve = 'glasses';
    words.push(twelve);
}else{
    words.push(twelve);
}
let thirteen = readLine.question("Give Me A Number: ");
if (thirteen.length === 0){
    let thirteen = '2';
    words.push(thirteen);
}else{
    words.push(thirteen);
}
let fourteen = readLine.question("Give Me A Number Plural Noun: ");
if (fourteen.length === 0){
    let fourteen = 'pizzas';
    words.push(fourteen);
}else{
    words.push(fourteen);
}
let fifthteen = readLine.question("Give Me A Game: ");
if (fifthteen.length === 0){
    let fifthteen = 'green';
    words.push(fifthteen);
}else{
    words.push(fifthteen);
}
let sixteen = readLine.question("Give Me A Number: ");
words.push(sixteen);
let seventeen = readLine.question("Give Me A Food: ");
words.push(seventeen);
let eighteen = readLine.question("Give Me A Movie: ");
words.push(eighteen);
let nineteen = readLine.question("Give Me A Noun: ");
words.push(nineteen);
let twenty = readLine.question("Give Me An Adjective: ");
words.push(twenty);
