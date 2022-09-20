function allu (input) {
    let count = Number (input[0]);
    let type = input[1];
    let order = input[2];
    let price = 0;
    let total = false;


    if (type === `90X130`) {
        price = count * 110
        if (count >= 30 && count < 60) {
            price = price * 0.95
        } else if (count >= 60) {
            price = price * 0.92
        } else if (count < 10) {
            console.log (`Invalid order`)
            total = true;
            }
    } else if (type === `100X150` ) {
        price = count * 140
        if (count >= 40 && count < 80) {
            price = price * 0.94
        } else if (count >= 80) {
            price = price * 0.90
        } else if (count < 10) {
            console.log (`Invalid order`)
            total = true;
        }
    } else if (type === `130X180`) {
        price = count * 190 
        if (count >= 20 && count < 50) {
            price = price * 0.93
        } else if (count >= 40) {
            price = price * 0.88
        }else if (count < 10) {
            console.log (`Invalid order`)
            total = true;
        }
    } else if (type === `200X300`) {
        price = count * 250
        if (count >= 25 && count < 50) {
            price = price * 0.91
        } else if (count >= 40) {
            price = price * 0.86
        }else if (count < 10) {
            console.log (`Invalid order`)
            total = true;
        }
    }
        if (order === `With delivery`) {
            price = price + 60
        }
        if (count > 99) {
            price = price * 0.96
        }
       if (!total) {
        console.log (`${price.toFixed(2)} BGN`)
       }

}
allu ([`2`,`100X150`, `With delivery`])