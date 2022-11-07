function passwordGenerator (array) {
    let rawPass = array.shift().concat(array.shift())
    let vowels = ["a", "e", "i", "o", "u"]
    let length = array[0].length;
    let counter = 0;
    let magicWord = array[0]

    for (let el of rawPass) {
        if (vowels.includes(el)) {
            let char = magicWord[counter].toUpperCase();
            rawPass = rawPass.replace(el, char);
            counter++;
        }
        if (counter == length) {
            counter = 0;
        }
    }
rawPass = rawPass.split("").reverse().join("")
console.log(`Your generated password is ${rawPass}`); 

    

}
passwordGenerator ([
    'easymoneyeazylife', 'atleasttencharacters', 'absolute'
    ])
    