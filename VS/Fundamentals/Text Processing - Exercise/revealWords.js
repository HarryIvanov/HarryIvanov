function revealWords (word, str) {
    let magicWord = word.split(", ")
   let newStr = str.split(" ");

   for (let word of newStr) {
        for (let element of magicWord) {
            if (word.includes("*") && word.length == element.length) {
                str = str.replace(word, element)
            }
        }
   }
   
console.log(str);

    
    
}
revealWords ('great, learning',
'softuni is ***** place for ******** new programming languages'

)