function lowestPricesInCities (array) {
//     let result = {}
//     for (const el of array) {
//         let [town, product, price] = el.split(" | ");
//         price = Number (price)
//         if (!result.hasOwnProperty(product)) {
//             result[product] = {price, town}
//         } else {
//             if (result[product].price > price) {
//                 result[product].price = price;
//                 result[product].town = town
//             } 
//         }
//     }
//    for (const key in result) {
//         console.log(`${key} -> ${result[key].price} (${result[key].town})`);
//    }
let obj = {};
for (let i = 0; i < array.length; i++) {
    const element = array[i];
    const [town, product, price] = element.split(" | ");
    if (!obj[product]) obj[product] = {}
    obj[product][town] = Number (price);
}
let finalResult = [];
for (const key in obj) {
    let sorted = Object.entries(obj[key]).sort((a, b) => a[1] - b[1]);
    let [town, price] = sorted[0];
    finalResult.push(`${key} -> ${price} (${town})`)
}
return finalResult.join("\n")

}
lowestPricesInCities (['Sample Town | Sample Product | 1000',
'Sample Town | Orange | 2',
'Sample Town | Peach | 1',
'Sofia | Orange | 3',
'Sofia | Peach | 2',
'New York | Sample Product | 1000.1',
'New York | Burger | 10']
)