function fancyBarcodes (input) {
    let validRegex = /@#+(?<name>[A-Z][0-9a-zA-Z]{4,}[A-Z])@#+/
    let checkNumRegex = /[0-9]/g
    let rotations = input.shift()

    for (let i = 0; i < rotations; i++) {
        let check = input[i];
        let name = validRegex.exec(check);
        if (name !== null) {
            let checkName = name.groups["name"];
            let checkNums = checkName.match(checkNumRegex)
            if (checkNums !== null){
                let nums = checkNums.join("")
                console.log(`Product group: ${nums}`);
            } else {
                console.log("Product group: 00");
            }
        } else {
            console.log("Invalid barcode");
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

