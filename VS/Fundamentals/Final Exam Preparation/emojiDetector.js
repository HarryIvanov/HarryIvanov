function emojiDetector (input) {
    let emoReg = /([\*]{2}|[:]{2})(?<name>[A-Z]{1}[a-z]{2,})(\1)/g
    let nums = /\d/g
    let readLineNumbers = nums.exec(input)
    let emojis = [];
    let coolEmojis = []
    
    

    totalCoolness = 1;
    while (readLineNumbers !== null) {
        totalCoolness *= Number (readLineNumbers)
        readLineNumbers = nums.exec(input)
    }
   
   let readLine = emoReg.exec(input)
   while (readLine !== null) {
    let name = readLine.groups["name"]
    emojis.push(name)
    let tot = 0;
    for (const el of name) {
       let n = Number (el.charCodeAt(0))
       tot += n 
    }
    if (tot >= totalCoolness) {
        coolEmojis.push(readLine[0])
    }
    readLine = emoReg.exec(input)
   }
   console.log(`Cool threshold: ${totalCoolness}`);
   console.log(`${emojis.length} emojis found in the text. The cool ones are:`);
   console.log(coolEmojis.join("\n"));
   
}
emojiDetector (["In the Sofia Zoo there are 311 animals in total! ::Smiley:: This includes 3 **Tigers**, 1 ::Elephant:, 12 **Monk3ys**, a **Gorilla::, 5 ::fox:es: and 21 different types of :Snak::Es::. ::Mooning:: **Shy**"])