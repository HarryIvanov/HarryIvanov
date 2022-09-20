function basketball (input) {
    let tax = Number (input[0]);
    let sneakers = tax * 0.60
    let otufit = sneakers * 0.80
    let ball = otufit / 4
    let accessories = ball / 5


    let total = tax + sneakers + otufit + ball + accessories

    console.log (total.toFixed(2))


}
basketball ([`320`])