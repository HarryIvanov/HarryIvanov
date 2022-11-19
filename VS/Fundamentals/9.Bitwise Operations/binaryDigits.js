function binary (str, num) {
    let n = str
    let n1 = 0;
    let count = 0;
    let math = []
    while (n !== 0) {
        n1 = n % 2
        n = Math.floor(n / 2)
        if (n1 == num) {
            count++
        }
        math.unshift(n1)
    }
    console.log(math.join(""));
    console.log(count);
}
binary (15, 1)