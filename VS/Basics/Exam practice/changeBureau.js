function change (input) {
    let bitcoin = Number (input[0]);
    let juans = Number (input[1]);
    let comm = Number (input[2]);
    let jdolar = juans * 0.15
    let bleva = bitcoin * 1168
    let dolar = jdolar * 1.76
    let euro = bleva / 1.95
    let commi = ((100 - comm) / 100)
    let BGN = (bleva + dolar) 
    let totalEur = BGN / 1.95
    let total = totalEur * commi



console.log (total.toFixed(2))



}
change (["1",
"5",
"5"])
