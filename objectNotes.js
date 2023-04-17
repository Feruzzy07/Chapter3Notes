//create an object of key-value pairs
let contacts = {
    bff: 1234567,
    mom: 5555555,
    bro: 9876543
}

//log all
console.log(contacts);

//access a specific entry by its key
console.log(contacts.bff);

//can't access if the key doesn't exist
console.log(contacts.myself);

//add a new entry
contacts.sis = 3456677;
console.log(contacts);

//update an entry
contacts.bff = 1111111;
console.log(contacts);

//delete an entry
delete contacts.mom;
console.log(contacts);

//is there a key called __ in there?
console.log("bff" in contacts);
console.log("myself" in contacts);

//objects are like arrays - pass by reference not by value
//notice the following

let a = {
    value: 20
};
let b = a;
let c = {
    value: 20
};

console.log(a == b);
console.log(a == c);
console.log(b == c);

console.log(a.value == c.value);

let dog = {
    dogName: 'Zelda',
    breed: 'Terrier',
    age: 9,
    size: 'Medium',
    barks: true
};
console.log(dog);

let kirby = {
    Name: 'Kirby',
    Color: 'Pink',
    age: -1,
    size: 'Small',
    cute: true
};
console.log(kirby);

let human = {
    Name: 'human',
    Race: 'Hispanic',
    age: 14,
    size: 'Medium',
    nerd: true
};
console.log(human);

let collinflame = {
    Name: 'collinflame',
    Race: 'Salvadorian',
    age: 15,
    size: 'Tall',
    sporcle_enthusiast: true
};
console.log(collinflame);

let chess = {
    you: 'coolman123',
    opponent: 'nerd123',
    moves: 57,
    accuracy: 99.99,
    winner: 'nerd123',
};
console.log(chess);