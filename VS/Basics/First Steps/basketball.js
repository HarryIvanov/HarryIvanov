function basketball (input) {
    let price = Number (input[0]);
    let shoes = price * 0.60;
    let clothes = shoes * 0.80
    let ball = clothes.toFixed(2) / 4
    let accesories = ball.toFixed(2) / 5
    let sum = price + shoes + clothes + ball + accesories
    console.log (sum.toFixed(2))
}
basketball ([`365`])