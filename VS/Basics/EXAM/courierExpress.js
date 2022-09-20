function courier (input) {
let weight = Number (input[0]);
let type = input[1];
let distance = Number (input[2]);

let perKm = 0;
let price = 0;

switch (type) {
    case "standard" :
        if (weight <= 1) {
            perKm = distance * 0.03
        } else if (weight > 1 && weight < 10) {
            perKm = distance * 0.05
        } else if (weight >= 10 && weight < 40) {
            perKm = distance * 0.10
        } else if (weight >= 40 && weight < 90) {
            perKm = distance * 0.15
        } else if (weight >= 90 && weight < 150) {
            perKm = distance * 0.20
        } break ;
    case "express" :
        if (weight <= 1) {

            price = (0.03 * 0.80) * weight
            perKm = (distance * 0.03) + (distance * price)

        } else if (weight > 1 && weight < 10) {

            price = (0.05 * 0.40) * weight
            perKm = (distance * 0.05) + (distance * price)

        } else if (weight >= 10 && weight < 40) {
            
            price = (0.10 * 0.05) * weight
            perKm = (distance * 0.10) + (distance * price) 

        } else if (weight >= 40 && weight < 90) {
           
            price = (0.15 * 0.02) * weight
            perKm = (distance * 0.15) + (distance * price)

        } else if (weight >= 90 && weight < 150) {
           
            price = (0.20 * 0.01) * weight
            perKm = (distance * 0.20) + (distance * price)

        } break ;    
}

console.log(`The delivery of your shipment with weight of ${weight.toFixed(3)} kg. would cost ${perKm.toFixed(2)} lv.`);

}
courier (["20", 
"standard",
"349"])


