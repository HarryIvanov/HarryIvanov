function bitcoinMining (input) {
    let mined = 0;
    let firstDay = 0;
    let totalBitcoins = 0;
    let bitcoins = 0;
    let goldPrice = 67.51
    let bitcoinPrice = 11949.16
    let totalMined = 0;
    let counter = 0;

    for (let i = 0; i < input.length; i++) {
        counter++;
        mined = Number (input[i]);
        if (counter % 3 === 0) {
            mined = mined* 0.70;
        }
        totalMined += mined * goldPrice;
        if (totalMined >= bitcoinPrice) {
            bitcoins = (totalMined / bitcoinPrice)
            totalBitcoins += Math.floor(bitcoins);
            
            if (firstDay == 0) {
            firstDay = counter;
            }
            totalMined -= bitcoinPrice * Math.floor(bitcoins);
            bitcoins = 0;
        }
    }
    console.log(`Bought bitcoins: ${totalBitcoins}`);
    if (totalBitcoins > 0) {
    console.log(`Day of the first purchased bitcoin: ${firstDay}`);
    }
    console.log(`Left money: ${totalMined.toFixed(2)} lv.`);

}
bitcoinMining ([3124.15, 504.212, 2511.124])
