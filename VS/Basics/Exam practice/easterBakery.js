function bakery (input) {
    let brashnoPrice = Number (input[0]);
    let brashnoKg = Number (input[1]);
    let sugarKG = Number (input[2]);
    let eggs = Number (input[3]);
    let maq = Number (input[4]);
    let sugarPrice = brashnoPrice * 0.75;
    let eggsPrice = brashnoPrice * 1.10;
    let maqPrice = sugarPrice * 0.20;

    let total = (brashnoKg * brashnoPrice) + (sugarKG * sugarPrice) + (eggs * eggsPrice) + (maq * maqPrice)

    console.log (total.toFixed(2))







}
bakery (["50",
"10",
"3.5",
"6",
"1"])
