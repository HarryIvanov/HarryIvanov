function boat(input) {
    let budget = Number(input[0]);
    let season = input[1];
    let ppl = Number(input[2]);
    let rent = 0;
    let total = 0;

    switch (season) {
        case `Spring`: rent = 3000; break;
        case `Summer`:
        case `Autumn`: rent = 4200; break;
        case `Winter`: rent = 2600; break;
        default: break;
    }   if (ppl % 2 === 0 && season !== `Autumn`) {
        rent = rent * 0.95

    }
    if (ppl > 0 && ppl <= 6) {
        rent = rent * 0.90

    } else if (ppl >= 7 && ppl <= 11) {
        rent = rent * 0.85

    } else if (ppl >= 12) {
        rent = rent * 0.75

    }

    if (rent <= budget) {
        total = budget - rent
        console.log(`Yes! You have ${total.toFixed(2)} leva left.`)
    } else if (rent > budget) {
        total = rent - budget
        console.log(`Not enough money! You need ${total.toFixed(2)} leva.`)
    }
}
boat(["3000",
    "Summer",
    "11"])
