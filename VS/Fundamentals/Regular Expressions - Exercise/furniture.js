function furniture (array) {
    let regExp = /[>]{2}(?<furniture>[A-Z][a-z]+)[<]{2}(?<price>[\d.]+)!(?<quantity>\d+)/g
    let totalMoney = 0;
    let result = [];
    let matches = regExp.exec(array)

    while (matches !== null) {
        let furn = matches.groups["furniture"];
        let money = matches.groups["price"];
        let qty = matches.groups["quantity"];
        totalMoney += (money*qty)
        result.push(furn)


        matches = regExp.exec(array)
    }
    console.log("Bought furniture:");
    for (const el of result) {
        console.log(el);
    }
    console.log(`Total money spend: ${totalMoney.toFixed(2)}`);
    
}
furniture(['>>Laptop<<312.2323!3',
'>>TV<<300.21314!5',
'>Invalid<<!5',
'>>TV<<300.21314!20',
'>>Invalid<!5',
'>>TV<<30.21314!5',
'>>Invalid<<!!5',
'Purchase']

)