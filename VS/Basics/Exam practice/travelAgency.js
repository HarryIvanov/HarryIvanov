function agency (input) {
let destination = input[0];
let type = input[1];
let vip = input[2];
let days = Number (input[3]);
let price = 0;
let isOk = true;


if (days > 7) {
    days--
}

switch (destination) {
    case `Bansko` : 
        
    case `Borovets` :
        if (type === `noEquipment`) {
            price = days * 80
            if (vip === `yes`) {
                price = price * 0.95
            }
        } else if (type === `withEquipment`) {
            price = days * 100
            if (vip === `yes`) {
                price = price * 0.90
            } 
        } else {
            isOk = false;
        }    
            break ;
    case `Varna` :

    case `Burgas` :
        if (type === `noBreakfast`) {
            price = days * 100
            if (vip === `yes`) {
                price = price * 0.93
            }
        } else if (type === `withBreakfast`) {
            price = days * 130
            if (vip === `yes`) {
                price = price * 0.88
            } 
        } else {
            isOk = false;
        } 
        break ;
    
    default : isOk = false; break ;    
}


if (isOk) {
if (days < 1) {
    console.log(`Days must be positive number!`);
} else {
    console.log(`The price is ${price.toFixed(2)}lv! Have a nice time!`);
}
} else {
    console.log(`Invalid input!`);
}




}
agency (["Gabrovo",
"noBreakfast",
"no",
"3"])




