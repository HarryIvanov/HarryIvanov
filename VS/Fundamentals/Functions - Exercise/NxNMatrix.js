function nxn (num) {
    let res = []
    
    for (let i = 0; i < num; i++) {
        let output = ""
        for (let k = 0; k < num; k++) {
            output += `${num} `
        }
        res.push(output)
    } 
    console.log(res.join("\n"));
    
}
nxn (3)