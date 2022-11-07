function replaceRepeatingChars (str) {
    let result = str[0];
    let index = 1;

    while (index < str.length) {
        if (str[index] !== str[index - 1]) {
            result += str[index]
        }
        index++
    }
    console.log(result);
}
replaceRepeatingChars ('aaaaabbbbbcdddeeeedssaa')