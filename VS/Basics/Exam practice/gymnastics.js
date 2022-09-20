function Gymnastics (input) {

let country = input[0];
let type = input[1];
let difficulty = 0;
let done = 0;
let total = 0;
let maxpoints = 20;


switch (country) {
    case `Bulgaria`: 
    if (type == `ribbon`) {
        difficulty = 9.600
        done = 9.400
    } else if (type == `hoop`) {
        difficulty = 9.550
        done = 9.750
    } else if (type == `rope`) {
        difficulty = 9.500
        done = 9.400
    } break;
    case `Russia` : 
    if (type == `ribbon`) {
        difficulty = 9.100
        done = 9.400
    } else if (type == `hoop`) {
        difficulty = 9.300
        done = 9.800
    } else if (type == `rope`) {
        difficulty = 9.600
        done = 9.000
    } break;
    case `Italy` :
        if (type == `ribbon`) {
            difficulty = 9.200
            done = 9.500
        } else if (type == `hoop`) {
            difficulty = 9.450
            done = 9.350
        } else if (type == `rope`) {
            difficulty = 9.700
            done = 9.150
        } break;
    default : break;            
}

total = difficulty + done
let points = maxpoints - total
let percent = 100 - (total / maxpoints) * 100

console.log(`The team of ${country} get ${total.toFixed(3)} on ${type}.`);
console.log(`${percent.toFixed(2)}%`);







}
Gymnastics (["Bulgaria",
"ribbon"])
