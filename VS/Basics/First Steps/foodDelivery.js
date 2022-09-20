function foodDelivery (input){
    //chicken price - 10.35
    //fish price - 12.40
    //veggie price - 8.12
    //dessert = 20% on the whole price w/o delivery
    //delivery - 2.50
    let chickenMenu = Number (input[0]);
    let fishMenu = Number (input[1]);
    let veggieMenu = Number (input[2]);
    let sumChicken = chickenMenu * 10.35;
    let sumFish = fishMenu * 12.40;
    let sumVeggie = veggieMenu * 8.15;
    let sumAll = sumChicken + sumFish + sumVeggie;
    let dessert = sumAll * 0.20;
    let delivery = 2.50;
    let sum = sumAll + dessert + delivery;
    console.log (sum)

}
foodDelivery ([`2`, `4`, `3`])