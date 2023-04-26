const readLine = require('readline-sync');
let order = [];
let total = 0;
let yesSandwich = 0;
let yesBeverage = 0;
let yesFries = 0;
let frycombo = 0;
let beefBorger = 0;
let largeBeverage = 0;
let largeFries = 0;
let kirbSauce = 0;
let chickenBorger = 0;
let megaFries = 0;

console.log(`===================================================================================================`);
console.log(`Welcome to Kirb Burgers!`);
console.log(`We have a variety of combo's that you could keep in mind when placing your order!`);
console.log(`The Kirb Special: `);
console.log(`Chicken Sandwich, Beverage, Mega-Sized Small Fries, and Kirb Sauce! Reduces your price by $2!`);
console.log(`The French Fry Enjoyer: `);
console.log(`If you order only french fries, you can get them at half the price!`);
console.log(`Big Borger: `);
console.log(`A big borger means a big meal! Beef Sandwich, Large Beverage, Large Fries! Reduces your price by $1!`);
console.log(`===================================================================================================`);


let sandwich = readLine.question('What sandwich do you want? Chicken ($5.25), Beef ($6.25), Tofu ($5.75) Type no if none!: ');
if (sandwich === 'chicken'){
    order.push('Chicken Sandwich');
    total += 5.25;
    console.log('Chicken sandwich has been added to your order!($5.25)');
    yesSandwich = 1;
    chickenBorger = 1;
}else if (sandwich === 'beef'){
    order.push('Beef Sandwich');
    total += 6.25;
    console.log('Beef sandwich has been added to your order!($6.25)');
    yesSandwich = 1;
    beefBorger = 1;
}else if (sandwich === 'tofu'){
    order.push('Tofu Sandwich');
    total += 5.75;
    console.log('Tofu sandwich has been added to your order!($5.75)');
    yesSandwich = 1;
}

let beverage = readLine.question('Would you like a beverage!? (yes or no): ');
if (beverage === 'yes'){
    let size = readLine.question('What sized beverage would you like? Small($1.00), Medium($1.75), Large($2.25): ');
    if (size === 'small'){
        order.push('Small Beverage');
        total += 1;
        console.log('Small beverage has been added to your order!($1.00)');
        yesBeverage = 1;
    }else if (size === 'medium'){
        order.push('Medium Beverage');
        total += 1.75;
        console.log('Medium beverage has been added to your order!($1.75)');
        yesBeverage = 1;
    }else if (size === 'large'){
        order.push('Large Beverage');
        total += 2.25;
        console.log('Large beverage has been added to your order!($2.25)');
        yesBeverage = 1;
        largeBeverage = 1;
    }
}

let fries = readLine.question('Would you like a french fries!? (yes or no): ');
if (fries === 'yes'){
    let frysize = readLine.question('What sized beverage would you like? Small($1.00), Medium($1.50), Large($2.00): ');
    if (frysize === 'small'){
        let megasize = readLine.question('Would you like to mega-size your fries?(yes or no): ');
        if(megasize === 'yes'){
            order.push('Mega-Sized French Fries');
            total += 2.00;
            yesFries = 1;
            frycombo = 2;
            megaFries = 1;
        }else{
            order.push('Small French Fries');
            total += 1;
            yesFries = 1;
            frycombo = 1;
        }
    }else if (frysize === 'medium'){
        order.push('Medium French Fries');
        total += 1.50;
        console.log('Medium French Fries has been added to your order!($1.50)');
        yesFries = 1;
        frycombo = 1.50;
    }else if (frysize === 'large'){
        order.push('Large French Fries');
        total += 2.00;
        console.log('Large French Fries has been added to your order!($2.00)');
        yesFries = 1;
        frycombo = 2;
        largeFries = 1;
    }
}

let ketchup = readLine.question('How many ketchup packets would you like!?(25 Cents each)(Enter a Positive Number): ');
if (ketchup > 1){
    order.push(`Ketchup x${ketchup}`);
}
total += ketchup * 0.25;

let mustard = readLine.question('How many mustard packets would you like!?(30 Cents each)(Enter a Positive Number): ');
if (mustard > 1){
    order.push(`Mustard x${mustard}`);
}
total += mustard * 0.30;

let KirbySauce = readLine.question('How many of our Kirby Sauce packets would you like!?(50 Cents each)(Enter a Positive Number): ');
if (KirbySauce > 1){
    order.push(`Kirby Sauce x${KirbySauce}`);
    kirbSauce = 1;
}
total += KirbySauce * 0.50;


if (yesSandwich + yesBeverage + yesFries === 3){
    total -= 1;
}
if (chickenBorger + yesBeverage + megaFries + kirbSauce === 4){
    total -= 2;
    order.push(`The Kirb Special Coupon Has Succesfully Been Added! Reduced $2 from cost!`);
}
if (yesSandwich + yesBeverage + yesFries === 1){
    if(frycombo === 1){
        total -= 0.50;
    }else if(frycombo === 1.50){
        total -= 0.75;
    }else if(frycombo === 2){
        total -= 1;
    }
    order.push(`French Fry Enjoyer Coupon Has Succesfully Been Added! Fries at half off!`);
}
if (beefBorger + largeBeverage + largeFries === 3){
    total -= 1;
    order.push(`The Big Borger Coupon Has Succesfully Been Added! Reduced $1 from cost!`);
}

let tax = total * 0.07;
total += tax;
total = total.toFixed(2);

console.log(`=================================`);
console.log(`Your order is: `);
for(let i = 0; i < order.length; i++) {
    console.log(order[i]);
}
console.log(`Your total is: `);
console.log(`$${total}`);
console.log(`=================================`);
