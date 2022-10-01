function oddAndEvenSum (number) {
let check = number.toString()
let odd = 0;
let even = 0;

    for (let i =0; i <check.length; i++) {
        let n = Number (check[i]);
        if (n % 2 == 0) {
            even += n
        } else {
            odd +=n
        }
    }
    console.log(`Odd sum = ${odd}, Even sum = ${even}`);
}
oddAndEvenSum (1000435)