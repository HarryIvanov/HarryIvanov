function combinations (input) {
    let magicNum = Number (input[0]);
    let combinations = 0;

    for (let x1 = 0; x1 <= magicNum; x1++) {
        for (let x2 = 0; x2 <= magicNum; x2++) {
            for (let x3 = 0; x3 <= magicNum; x3++) {
                if (x1 + x2 + x3 == magicNum) {
                    combinations += 1
                }
            }
        }
    }
    console.log (combinations)
}
combinations ([`20`])