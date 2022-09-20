function specialNumbers(input) {
    let n = Number(input[0]);
    let special = "";
    let startNum = 1111;
    let endNum = 9999;

    let number = 0;
    let converter = "";
    

    for (let i = startNum; i <= endNum; i++) {
        converter = `${i}`;
        let ok = 0;
        for (let y = 0; y < 4; y++) {
            number = Number(converter.charAt(y));
            
            if (n % number == 0) {
                ok = ok + 1;
            } else {
                continue;
            }
        }
        if (ok == 4) {
            special = special + `${i} `;
        }
        
    }
    console.log(special);
}
specialNumbers([`3`]);
