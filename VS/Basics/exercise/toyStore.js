function exercise (input) {
let price = Number (input [0]);
let puzzles = Number (input[1]);
let dolls = Number (input [2]);
let bears = Number (input [3]);
let minion = Number (input [4]);
let trucks = Number (input [5]);
let puzzlePrice = puzzles * 2.60;
let dollsPrice = dolls * 3;
let bearsPrice = bears * 4.10;
let minionsPrice = minion * 8.20;
let trucksPrice = trucks * 2;
let allPrice = puzzlePrice + dollsPrice + bearsPrice + minionsPrice + trucksPrice
let numbers = puzzles + dolls + bears + minion + trucks;
let endPrice = 0;
let rent = 0;
let profit =0;
     
if (numbers >= 50) {
    endPrice = allPrice * 0.25
    allPrice -= endPrice
    rent = allPrice * 0.10
    profit = allPrice - rent
    
    
} else if (numbers < 50) {
    rent = allPrice * 0.10
    profit = allPrice - rent
    
} if (profit >= price) {
    profit = profit - price
    console.log (`Yes! ${profit.toFixed(2)} lv left.`);
} else if (profit < price) {
    price = price - profit 
    console.log (`Not enough money! ${price.toFixed(2)} lv needed.`)
}

   

}
exercise (["40.8",
"20",
"25",
"30",
"50",
"10"])