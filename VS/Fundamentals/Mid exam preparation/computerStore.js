function computerStore (array) {
    let index = 0;
    let command = array[index];
    index++;
    let totalPrice = 0;

    while (command !== "special" && command !== "regular") {
            
        let price = Number (command) 
            if (price < 0) {
                console.log('Invalid price!');
                command = array[index].toString();
                index++;
                
            } else {
                totalPrice += price
                command = array[index].toString();
                index++;
                
            }
    }
    if (totalPrice <= 0) {
        console.log("Invalid order!");
    } else {
        
        if (command == "special") {
            
            let tax = totalPrice * 0.20
            let priceWithTax = (totalPrice + tax)* 0.90
            console.log("Congratulations you've just bought a new computer!");
            console.log(`Price without taxes: ${totalPrice.toFixed(2)}$`);
            console.log(`Taxes: ${tax.toFixed(2)}$`);
            console.log("-----------");
            console.log(`Total price: ${priceWithTax.toFixed(2)}$`);
        } else {
            
            let tax = totalPrice * 0.20
            let priceWithTax = totalPrice + tax
            console.log("Congratulations you've just bought a new computer!");
            console.log(`Price without taxes: ${totalPrice.toFixed(2)}$`);
            console.log(`Taxes: ${tax.toFixed(2)}$`);
            console.log("-----------");
            console.log(`Total price: ${priceWithTax.toFixed(2)}$`);
        }
    }



}
computerStore ([
    'regular'
    ])
    
    