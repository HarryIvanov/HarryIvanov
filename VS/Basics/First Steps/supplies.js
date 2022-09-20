function supplies (input){
    //himikalki - 5.80
    //markeri - 7.20
    //preparat - 1.20
    let pencils = Number (input[0]);
    let markers = Number (input[1]);
    let detergent = Number (input[2]);
    let percent = Number (input[3]);
    let exactPercent = percent / 100;
    let pencilsPrice = pencils * 5.80;
    let markersPrice = markers * 7.20;
    let detergentPrice = detergent * 1.20;
    let sum = pencilsPrice + markersPrice + detergentPrice
    let sum1 = sum - (sum * exactPercent)
    console.log (sum1)
}
supplies ([`2`, `3`, `4`, `25`])