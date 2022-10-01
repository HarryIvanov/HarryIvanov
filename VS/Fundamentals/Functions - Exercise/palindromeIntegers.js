function palindromeIntegers (array) {

    for (let el of array) {
        let check = ""
        let stringNumber = el.toString()
        for (let i = stringNumber.length-1; i >= 0; i--) {
            check += stringNumber[i]
        }if (check == el) {
            console.log(true); 
        } else {
            console.log(false);
        }
    }
}
palindromeIntegers ([123,323,421,121])