function godzila (input) {
    let budget = Number (input[0]);
    let statist = Number (input[1]);
    let clothes = Number (input[2]);
    let dekor = budget * 0.1;
    let money = 0;
    let statistDiscount = 0;
    let clothesPrice = clothes * statist
    if (clothesPrice + dekor <= budget) {
        if (statist > 150) {
            let statistDiscount = clothesPrice * 0.10;
            let money = budget - (clothesPrice - statistDiscount + dekor)
        console.log (`Action!`)
        console.log (`Wingard starts filming with ${money.toFixed(2)} leva left.`)
        } else if (statist < 150) {
            let money = budget - (clothesPrice + dekor)
            console.log (`Action!`)
            console.log (`Wingard starts filming with ${money.toFixed(2)} leva left.`)
        }
    } else if (clothesPrice + dekor > budget) {
        if (statist > 150) {
            let statistDiscount = clothesPrice * 0.10;
            let money = (clothesPrice - statistDiscount + dekor) - budget
            console.log (`Not enough money!`)
            console.log (`Wingard needs ${money.toFixed(2)} leva more.`)
        } else if (statist < 150) {
            let money = (clothesPrice + dekor) - budget
            console.log (`Not enough money!`)
            console.log (`Wingard needs ${money.toFixed(2)} leva more.`)
        }
    }
} 
godzila (["1000",
"130",
"55.68"])