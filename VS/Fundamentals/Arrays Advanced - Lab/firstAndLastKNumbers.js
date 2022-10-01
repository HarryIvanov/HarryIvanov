function firstAndLastKNumbers (array) {
    let k = array.shift()
    
    let lastNum = array.slice(-k)
    let firstNum = array.slice(0, k)

    console.log(firstNum.join(" "));
    console.log(lastNum.join(" "));

}
firstAndLastKNumbers ([2, 7, 8, 9])