function storeCatalogue (array) {
//     let result = {}
//     sortedArray = array.sort((a,b) => a.localeCompare(b))
//     for (const el of array) {
//         let char = el[0];
//         if (!result.hasOwnProperty(char)) {
//             let [item, price] = el.split(" : ");
//             result[char] = {}
//             item = item
//             result[char][item] = Number (price)
//         } else {
//             let [item, price] = el.split(" : ");
//             result[char][item] = Number (price)
//         }
        
//     }
//    let sorted = Object.entries(result).sort((a, b) => a[0].localeCompare(b[0]))
   
//    for (const el of sorted) {
//         let char = el[0];
//         let obj = el[1]
//         console.log(char);
//         for (const key in obj) {
//            console.log(`  ${key}: ${obj[key]}`);
//         }

//    }
    let catalogue = {};
    for (const line of array) {
        let [product, price] = line.split(" : ");
        let firstLetter = product[0];
        if (!catalogue.hasOwnProperty(firstLetter)) {
            catalogue[firstLetter] = {};
        }
        catalogue[firstLetter][product] = price;
    }
    let sorted = Object.keys(catalogue).sort((a, b) => a.localeCompare(b));

    for (const key of sorted) {
        console.log(key);
        let sortedProduct = Object.keys(catalogue[key]).sort((a, b) => a.localeCompare(b))
        for (const product of sortedProduct) {
            console.log(`  ${product}: ${catalogue[key][product]}`);
        }
    }
    
    
}
storeCatalogue (['Appricot : 20.4',
'Fridge : 1500',
'TV : 1499',
'Deodorant : 10',
'Boiler : 300',
'Apple : 1.25',
'Anti-Bug Spray : 15',
'T-Shirt : 10']
)