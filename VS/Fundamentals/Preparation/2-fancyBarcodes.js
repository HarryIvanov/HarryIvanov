function fancyBarcodes (input) {
    let rotations = Number (input.shift())
    let wordRegExp = /([@#]+)(?<product>[A-Z][A-Za-z0-9]{4,}[A-Z])\1/
    let group = /[0-9]/g

    for (let i = 0; i < rotations; i++) {
        let matched = wordRegExp.exec(input[i])
        if (matched !== null) {
            let name = matched.groups["product"]
            let nameGroup = name.match(group);
            if (nameGroup !== null) {
                console.log(`Product group: ${nameGroup.join("")}`);
            } else {
                console.log("Product group: 00");
            }
            
        } else {
            console.log("Invalid barcode");
        }
    }
}
fancyBarcodes (["3",
"@#FreshFisH@#",
"@###Brea0D@###",
"@##Che4s6E@##"])
