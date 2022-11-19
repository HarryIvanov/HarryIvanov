function softUniBarIncome (input) {
    let regExp = /%(?<name>[A-Z][a-z]+)%[^|$%.]*<(?<product>\w+)>[^|$%.]*\|(?<qty>\d+)\|[^|$%.]*?(?<price>[-+]?[0-9]*\.?[0-9])\$/
    let readLine = input.shift()
    let total = 0

    while(readLine !== 'end of shift') {
    let currentLine;
    if ((currentLine = regExp.exec(readLine))) {
      let { name, product, qty, price } = currentLine.groups;
      total += qty * price;
      console.log(`${name}: ${product} - ${(qty * price).toFixed(2)}`);
    }
    readLine = input.shift();
    }
        
   
    
    console.log(`Total income: ${total.toFixed(2)}`);

}
softUniBarIncome (['%George%<Croissant>|2|10.3$',
'%Peter%<Gum>|1|1.3$',
'%Maria%<Cola>|1|2.4$',
'end of shift']
)
softUniBarIncome (['%InvalidName%<Croissant>|2|10.3$',
'%Peter%<Gum>1.3$',
'%Maria%<Cola>|1|2.4',
'%Valid%<Valid>valid|10|valid20$',
'end of shift']
)