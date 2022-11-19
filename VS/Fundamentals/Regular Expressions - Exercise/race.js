function race(array) {
    let names = array.shift()

    let finalNames = {};
    for (const el of names.split(", ")) {
        finalNames[el] = 0
    }
    let readLine = array.shift()
    let regExp = /[\W\d]/g
    while (readLine !== 'end of race') {
        let name = readLine.replace(regExp, "")
        if (finalNames.hasOwnProperty(name)) {
            let newReg = /[\D]/g
            let nums = readLine.replace(newReg, "")
            let result = 0;
            for (const el of nums) {
                result += Number(el)
            }
            finalNames[name] += result
        }
        readLine = array.shift()
    }
    let res = Object.entries(finalNames).sort(([keyA, valueA], [keyB, valueB]) => valueB - valueA)
    let counter = 1;
    for (let i = 0; i < 3; i++) {
        let [key, value] = res[i]
        if (counter == 1) {
            console.log(`1st place: ${key}`);
        } else if (counter == 2) {
            console.log(`2nd place: ${key}`);
        } else {
            console.log(`3rd place: ${key}`);
        }
        counter++
    }


}
race(['Ronald, Bill, Tom, Timmy, Maggie, Michonne',
    'Mi*&^%$ch123o!#$%#nne787) ',
    '%$$B(*&&)i89ll)*&) ',
    'R**(on%^&ald992) ',
    'T(*^^%immy77) ',
    'Ma10**$#g0g0g0i0e',
    'end of race']
)