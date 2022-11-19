function furniture (array) {
    let regExp = /[>]{2}(?<furniture>[A-Za-z]+)[<]{2}(?<price>[\d]+[\.]?[\d]+)!(?<quantity>\d+)/
    let totalMoney = 0;
    let index = 0;
    
    console.log("Bought furniture:");
    while (array[index] !== "Purchase") {
        let productRow = array[index]
        let validProducts = regExp.exec(productRow)
        if (validProducts !== null) {
            console.log(validProducts[1]);
            totalMoney += Number (validProducts.groups["price"]) * Number (validProducts.groups["quantity"])
        }

        index++;
    }
    console.log(`Total money spend: ${totalMoney.toFixed(2)}`);
    
}
furniture(['>>Laptop<<312.2323!3',
'>>TV<<300.2!5',
'>Invalid<<!5',
'>>theather<<300.21314!20',
'>>Invalid<!5',
'>>HOMECINEMA<<30.21314!5',
'>>Invalid<<!!5',
'Purchase'])