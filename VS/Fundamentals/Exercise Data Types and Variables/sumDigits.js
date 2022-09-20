function sumDigits (num) {
    let sum =0;
    let h = num.toString()
    for (let i = 0; i < h.length ; i++ ) {
        sum += Number (h[i])
    }
    console.log(sum);
}
sumDigits(97561)
