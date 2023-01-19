function carFactory ({model, power, color, carriage, wheelsize}) {
//     let result = {};

//     for (const el in obj) {
        
//         if (el == "model") {
//             result["model"] = obj[el];
//         } else if (el == "power") {
//             result.engine = {}
//             if (obj["power"] <= 90) {
//                 result.engine["power"] = 90
//                 result.engine["volume"] = 1800
//             } else if (obj["power"] <= 120) {
//                 result.engine["power"] = 120
//                 result.engine["volume"] = 2400
//             } else if (obj["power"] <= 200) {
//                 result.engine["power"] = 200
//                 result.engine["volume"] = 3500
//             }
//         } else if (el == "color") {
//             color = obj[el];
//         } else if (el == "carriage") {
//             result.carriage = {type: obj[el], color: obj["color"]};
//         } else if (el == "wheelsize") {
//             let n = obj[el]
//             if (obj[el] % 2 == 0) {
//                 n -= 1
//                 result.wheels = [n, n, n, n]
//             } else {
//                 result.wheels = [n, n, n, n]
//             }
//         }
//     }
//    return( result);
const engines = {
    small: {power: 90, volume: 1800},
    normal: {power: 120, volume: 2400},
    monster: {power: 200, volume: 3500}
}
let engine = {};
if (power <= 90) {
    engine = engines.small;
} else if (power <= 120) {
    engine = engines.normal;
} else {
    engine = engines.monster;
}
let sizeOfWheels = wheelsize;
if (wheelsize % 2 == 0) {
    sizeOfWheels--
}
const car = {
    model,
    engine,
    carriage: {
        type: carriage,
        color: color
    },
    wheels: [sizeOfWheels, sizeOfWheels, sizeOfWheels, sizeOfWheels]
}


    return car;
}
carFactory ({ model: 'Opel Vectra',
power: 110,
color: 'grey',
carriage: 'coupe',
wheelsize: 17 }

)