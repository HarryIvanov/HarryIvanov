function lili (input) {
    let age = Number (input[0]);
    let price = Number (input[1]);
    let toyPrice = Number (input[2]);
    let toys = 0;
    let moneyCount = 0;
    let total = 0;
    let toyCount =0;
    let brother =0;
    let money = 0;
    let result = 0;



    for (let i = 0; i < age; i++) {
        if (i % 2 == 0) {
           toyCount += 1 
            
        } else {
            moneyCount +=1
            money += 10 * moneyCount
        }
        toys = toyCount * toyPrice
        brother = moneyCount * 1
        total = (money + toys) - brother
    } if (total >= price) {
        result = total - price
        console.log (`Yes! ${result.toFixed(2)}`)
    } else {
        result = price - total
        console.log (`No! ${result.toFixed(2)}`)
    }
    
    


}
lili (["10",
"170.00",
"6"])