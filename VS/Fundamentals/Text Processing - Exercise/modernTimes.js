function modernTimes(str) {
    let newStr = str.split(" ")
    for (const el of newStr) {
        if (el.startsWith("#") && el.length > 1) {
            let word = el.substring(1)
            let isOk = true;
            let newWord = word.toLowerCase()
            for (let i = 0; i < newWord.length; i++) {
                if (newWord.charCodeAt(i) < 97 || newWord.charCodeAt(i) > 122) {
                    isOk = false;
                    break;
                }
            }
            if(isOk) {
                console.log(word);
            }
        }
    }
}
modernTimes ('Nowadays everyone uses # to tag a #specal word in #socialMedia')