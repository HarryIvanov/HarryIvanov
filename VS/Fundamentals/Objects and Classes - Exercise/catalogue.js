function catalogue (array) {
    let alpha = []
    for (let el of array) {
        let [name, price] = el.split(" : ")
        let product = {}
        product.name = name;
        product.price = price;
        alpha.push(product)
    }
    let sorted = alpha.sort((a,b) => {
        return a.name.localeCompare(b.name)
    })
        let letter = ""
      for (const el of sorted) {
        if (el.name.charAt(0).toUpperCase() === letter){
            console.log(`  ${el.name}: ${el.price}`)
        }else {
            letter = el.name.charAt(0).toUpperCase();
            console.log(letter);
            console.log(`  ${el.name}: ${el.price}`)
 
        }
    }
}    
catalogue ([
    'Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'
    ])