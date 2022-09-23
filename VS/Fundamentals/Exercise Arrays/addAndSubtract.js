function addAndSubtract (array) {
    let newArr = [];
    let num = 0;
    let original = 0;
    let newSum = 0;

    for (let i = 0; i <array.length; i++) {
        if (array[i] % 2 == 0) {
            num = array[i] + i
        } else {
            num = array[i] - i
        }
        newArr.push(num)
        newSum += num
        original += array[i]
    }
    console.log(newArr);
    console.log(original);
    console.log(newSum);
}
addAndSubtract([5, 15, 23, 56, 35])