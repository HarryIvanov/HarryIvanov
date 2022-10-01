function negativeOrPositiveNumbers (array) {
    let newArr = []
    for (let el of array) {
        let n = Number (el) 
        if (el < 0) {
            newArr.unshift(n)
        } else {
            newArr.push(n)
        }
    }
    console.log(newArr.join('\n'));

}
negativeOrPositiveNumbers (['7', '-2', '8', '9'])