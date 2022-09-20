function generator (input) {
let startNum = input[0];
let endNum = input[1];

let code = ""

    for (let i = Number (startNum.charAt(0)); i <= Number (endNum.charAt(0)); i++) {
            if (i % 2 === 0) {
                continue;
            }
        for (let y = Number (startNum.charAt(1)); y <= Number (endNum.charAt(1)); y++) {
            if (y % 2 === 0) {
                continue;
            }
            for (let x = Number (startNum.charAt(2)); x <= Number (endNum.charAt(2)); x++) {
                if (x % 2 === 0) {
                    continue;
                }
                for (let z = Number (startNum.charAt(3)); z <= Number (endNum.charAt(3)); z++) {
                    if (z % 2 === 0) {
                        continue;
                    }
                    code += (`${i}${y}${x}${z} `);
                }
            }
        }
    }
    console.log(code);



}
generator (["2345", "6789"])