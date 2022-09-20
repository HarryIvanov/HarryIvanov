function rounding (num, integer) {
    if (integer >= 15) {
        integer = 15
    }
    let sum = num.toFixed(integer)
    console.log(parseFloat(sum));
}
rounding (3.1415926535897932384626433832795,2)
rounding (10.5,3)