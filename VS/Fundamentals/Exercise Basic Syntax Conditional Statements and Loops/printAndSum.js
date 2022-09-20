function pringAndSum (num1, num2) {
    let counter = ""
    let sum = 0
    for (let i = num1; i <= num2; i++) {
        sum += i
        counter = counter +`${i} `
    }
    console.log(counter);
    console.log(`Sum: ${sum}`);
}
pringAndSum (0,26)