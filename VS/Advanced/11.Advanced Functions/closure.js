function counterBuilder () {
    let counter = 0;

    return function () {
        counter++;
        console.log(counter + 1);

    }
}
let counter = counterBuilder();
counter();
counter();
counter();
counter();