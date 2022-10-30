function storeProvision(stock, order) {
    const stored = {}
    
    const stockLength = stock.length;
    const orderLength = order.length;

    for (let i = 0; i < stockLength; i+=2) {
        const currentProduct = stock[i]
        stored[currentProduct] = Number (stock[i + 1])
    }
    for (let i = 0; i < orderLength; i += 2) {
        const currentProduct = order[i];
        if (!stored.hasOwnProperty(currentProduct)) {
            stored[currentProduct] = 0;
        }
        stored[currentProduct] += Number (order[i + 1])
    }
    for (const product in stored) {
        console.log(`${product} -> ${stored[product]}`);
    }


}
storeProvision([
    'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
],
    [
        'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
    ]
)