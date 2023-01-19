function fancyBarcodes (input) {
    let rotations = Number (input.shift());
    let itemRegExp = /([@][#]+)(?<item>[A-Z][A-Za-z0-9]{4,}[A-Z])([@][#]+)/g
    let numbersCheck = /\d+/g

    for (let i = 0; i < rotations; i++) {
        let readLine = input.shift();
        let matchedItem = readLine.match(itemRegExp);

        if (!matchedItem) {
            console.log("Invalid barcode");
        } else {
            let item = matchedItem.toString()
            let groupCheck = item.match(numbersCheck);
            if (!groupCheck) {
                console.log("Product group: 00");
            } else {
                console.log(`Product group: ${groupCheck.join("")}`);
            }
        }
    }


}
fancyBarcodes (["6",
"@###Val1d1teM@###",
"@#ValidIteM@#",
"##InvaliDiteM##",
"@InvalidIteM@",
"@#Invalid_IteM@#",
"@#ValiditeM@#"])
