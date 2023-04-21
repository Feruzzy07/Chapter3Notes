const readLine = require('readline-sync');
let order = [];
let total = 0;

let sandwich = readLine.question('What sandwich do you want? Chicken ($5.25), Beef ($6.25), Tofu ($5.75): ');
if (sandwich === 'chicken'){
    order.push('Chicken');
    total += 5.25;
    console.log('Chicken sandwich has been added to your order!($5.25)');
}else if (sandwich === 'beef'){
    order.push('Beef');
    total += 6.25;
    console.log('Beef sandwich has been added to your order!($6.25)');
}else if (sandwich === 'tofu'){
    order.push('Tofu');
    total += 5.75;
    console.log('Tofu sandwich has been added to your order!($5.75)');
}

let beverage = readLine.question('Would you like a beverage!? (yes or no): ');
if (beverage === 'yes'){
    let size = readLine.question('What sized beverage would you like? Small($1.00), Medium($1.75), Large($2.25): ');
    if (size === 'small'){
        order.push('Small beverage');
        total += 1;
        console.log('Small beverage has been added to your order!($1.00)');
    }else if (size === 'medium'){
        order.push('Medium beverage');
        total += 1.75;
        console.log('Medium beverage has been added to your order!($1.75)');
    }else if (size === 'large'){
        order.push('Large beverage');
        total += 2.25;
        console.log('Large beverage has been added to your order!($2.25)');
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
        }else{
            order.push('Small French Fries');
            total += 1;
        }
    }else if (frysize === 'medium'){
        order.push('Medium French Fries');
        total += 1.50;
        console.log('Medium French Fries has been added to your order!($1.50)');
    }else if (frysize === 'large'){
        order.push('Large French Fries');
        total += 2.00;
        console.log('Large French Fries has been added to your order!($2.00)');
    }
}

console.log(`${order} ${total}`);
