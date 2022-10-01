function perfectNumber (num) {
    let div = 1;

    for (let current = 2; current < num; current++) {
        if (num % current === 0) {
            div += current
        }
    }
    if (div === num) {
        console.log("We have a perfect number!");
    } else {
        console.log("It's not so perfect.");
    }
}
perfectNumber(6)