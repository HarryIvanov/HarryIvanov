function energy (input) {
let fruit = input[0];
let pack = input[1];
let order = Number (input[2]);
let total = 0;
let discount =0;

if (fruit === `Watermelon`) {
    switch (pack) {
        case `big` : total = order * 28.70 * 5 ; break ;
        case `small` : total = order * 56 * 2 ; break ;
        default : break ;
    }
}
if (fruit === `Mango`) {
    switch (pack) {
        case `big` : total = order * 19.60 * 5 ; break ;
        case `small` : total = order * 36.66 * 2 ; break ;
        default : break ;
    }
}
if (fruit === `Pineapple`) {
    switch (pack) {
        case `big` : total = order * 24.80 * 5 ; break ;
        case `small` : total = order * 42.10 * 2 ; break ;
        default : break ;
    }
}
if (fruit === `Raspberry`) {
    switch (pack) {
        case `big` : total = order * 15.20 * 5 ; break ;
        case `small` : total = order * 20 * 2 ; break ;
        default : break ;
    }
}
if (total >= 400 && total <= 1000) {
    total = total * 0.85
} else if (total > 1000) {
    total = total * 0.5
}

console.log (`${total.toFixed(2)} lv.`)

}
energy (["Raspberry",
"small",
"50"])


