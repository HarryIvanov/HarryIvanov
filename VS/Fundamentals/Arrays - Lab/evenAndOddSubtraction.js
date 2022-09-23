function venAndOddSubtraction (array) {
let evens = 0;
let odds = 0;
let sum = 0;

    for (let i of array) {
        i % 2 == 0 ? evens += i : odds += i
    }
    sum = evens - odds
    console.log(sum);


}
venAndOddSubtraction ([3,5,7,9])
