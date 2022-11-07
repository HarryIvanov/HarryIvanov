function stringSubstring(word, str) {
   let newStr = str.split(" ")
   isFound = true;
   for (const el of newStr) {
        if(el.toLowerCase() == word) {
            console.log(word);
            isFound = false;
            break;
        }
   }
   if (isFound) {
    console.log(`${word} not found!`);
   }
   
}
stringSubstring ('python',
'JavaScript is the best programming language'

)