function sumFirstAndLast (array) {
    let firstNum = Number (array.shift())
    let lastNum = Number (array.pop())

    let result = firstNum + lastNum
    console.log(result);
}
sumFirstAndLast (['20', '30', '40'])