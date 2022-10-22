function numbers(input) {
    let newArr = input.split(" ").map(Number);
    let sum = 0;
    for (let el of newArr) {
        sum += el;
    }
    let length = newArr.length;
    let average = sum / length;

    let filtered = newArr.filter((x) => x > average).sort((a, b) => b - a);

    if (filtered.length > 0 && filtered.length <= 5) {
        console.log(filtered.join(" "));
    } else if (filtered.length > 5) {
        let final = [];
        for (let i = 0; i < 5; i++) {
            final.push(filtered[i]);
        }
        console.log(final.join(" "));
    } else {
        console.log("No");
    }
}
numbers("-1 -2 -3 -4 -5 -6");
