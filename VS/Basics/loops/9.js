function demo(input) {
    let n = Number(input[0]);
    let m = Number(input[1]);
    let sum = 0;
    let res = ""
    for (let i = n; i < m; i++) {
        if (i % 9 === 0) {
            sum += i
            res += `${i}\n` // \n e нов ред
            
        }
    } 
    console.log(`The sum: `+ sum);
    console.log (res)

}
demo([`100`, `200`])