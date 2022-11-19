function matchPhoneNumber (str) {
    let regExp = /\+359([ -])2\1[0-9]{3}\1[0-9]{4}\b/g
    let result = [];
    let array = str[0]
    let matches = regExp.exec(array)

    while (matches !== null) {
        result.push(matches[0])
        matches = regExp.exec(array)
    }
    console.log(result.join(", "));

}
matchPhoneNumber (['+359 2 222 2222,359-2-222-2222, +359/2/222/2222, +359-2 222 2222 +359 2-222-2222, +359-2-222-222, +359-2-222-22222 +359-2-222-2222'])