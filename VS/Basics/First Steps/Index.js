function zoostore (input){
    let meters = Number (input [0]);
    let price = meters * 7.61
    let discount = price * 0.18
    let finalDiscount = price - discount
    console.log (`The final price is: ${finalDiscount} lv.`)
    console.log (`The discount is: ${discount} lv.`)
}
zoostore([`550`])