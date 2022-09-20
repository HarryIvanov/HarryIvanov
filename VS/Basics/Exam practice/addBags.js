function bags (input) {
    let bagsPrice = Number (input[0]);
    let bagsKilos = Number (input[1]);
    let days = Number (input[2]);
    let count = Number (input[3]);
    let total = 0;


    if (bagsKilos < 10) {
        bagsPrice = bagsPrice * 0.2
        total = bagsPrice * count
        if (days < 7) {
            total = total + (total * 0.40) 
        } else if (days >= 7 && days <= 30) {
            total = total + (total * 0.15)
        } else if (days > 30) {
            total = total + (total * 0.10)
        }



    } else if (bagsKilos >= 10 && bagsKilos <= 20) {
        bagsPrice = bagsPrice * 0.50
        total = bagsPrice * count
        if (days < 7) {
            total = total + (total * 0.40) 
        } else if (days >= 7 && days <= 30) {
            total = total + (total * 0.15)
        } else if (days > 30) {
            total = total + (total * 0.90)
        }
        
        


    } else {
        total = bagsPrice * count
        
        if (days < 7) {
            total = total + (total * 0.40) 
        } else if (days >= 7 && days <= 30) {
            total = total + (total * 0.15)
        } else if (days > 30) {
            total = total + (total * 0.10)
        }



    }
        console.log (`The total price of bags is: ${total.toFixed(2)} lv.`)
        

}
bags ([`63.8`, `23`, `3`, `1`])