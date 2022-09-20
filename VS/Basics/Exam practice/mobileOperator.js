function operator (input) {
let term = input[0];
let type = input[1];
let internet = input[2];
let months = Number (input[3]);

let total = 0; 
let price = 0;

switch (term) {
    case `one` :
        if (type === `Small`) {
            price = 9.98;
        } else if (type === `Middle`) {
            price = 18.99;
        } else if (type === `Large`) {
            price = 25.98;
        } else if (type === `ExtraLarge`) {
            price = 35.99;
        } break;
    case `two` : 
        if (type === `Small`) {
        price = 8.58;
        } else if (type === `Middle`) {
        price = 17.09;
        } else if (type === `Large`) {
        price = 23.59;
        } else if (type === `ExtraLarge`) {
        price = 31.79;
        } break;   
}
if (internet === `yes`) {
    if (price <= 10) {
        price += 5.50
    } else if (price > 10 && price <= 30) {
        price += 4.35
    } else if (price > 30) {
        price += 3.85
    }
}
if (term == `two`) {
total = (price * months) * 0.9625
} else {
    total = price * months
}

console.log (`${total.toFixed(2)} lv.`)


}
operator (["two",
"Large",
"no",
"10"])

