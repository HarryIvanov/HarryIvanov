function nxn (num) {
    let res = []
    
    for (let i = 0; i < num; i++) {
        res.push(num)
    } 
    for (let x = 0; x < num; x++) {
        console.log(res.join(" "));
    }
}
nxn (3)