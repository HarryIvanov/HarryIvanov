function modernTimes(str) {
    let newStr = str.split(" ")
    let result = []
    for (const el of newStr) {
        if (el.startsWith("#") && el.length > 1) {
            let n = str.indexOf(el);
            let length = el.length;
            let word = str.substring(n+1, length+ n)
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