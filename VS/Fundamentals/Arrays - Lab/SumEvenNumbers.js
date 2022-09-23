function SumEvenNumbers (array) {
    let sum =0;
    for (let i of array) {
        let n = Number (i);
        if (n % 2 == 0) {
            sum += n
        }
    }
    console.log(sum);



}
SumEvenNumbers ([2, 4, 6, 8, 10])
SumEvenNumbers (['3','5','7','9'])