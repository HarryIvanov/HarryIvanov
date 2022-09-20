function coffee (input) {
let drink = input[0];
let type = input[1];
let drinks = input[2];
let price = 0;

switch (drink) {
    case `Espresso` : 
     if (type === `Without`) {
        price = (drinks * 0.90) * 0.65
     } else if (type === `Normal`) {
        price = drinks * 1
     } else if (type === `Extra`) {
        price = drinks * 1.20
     } if (drinks >= 5) {
         price = price * 0.75
     }
     break ;
    case `Cappuccino` :
      if (type === `Without`) {
        price = (drinks * 1) * 0.65
     } else if (type === `Normal`) {
        price = drinks * 1.20
     } else if (type === `Extra`) {
        price = drinks * 1.60
     } break;
    case `Tea` :
      if (type === `Without`) {
        price = (drinks * 0.50) * 0.65
     } else if (type === `Normal`) {
        price = drinks * 0.60
     } else if (type === `Extra`) {
        price = drinks * 0.70
     } break;
}
if (price > 15) {
    price = price * 0.80
}

console.log(`You bought ${drinks} cups of ${drink} for ${price.toFixed(2)} lv.`);



} coffee (["Cappuccino",
"Normal",
"13"])

