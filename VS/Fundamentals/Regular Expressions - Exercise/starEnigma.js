function starEnigma (input) {
    let rotations = Number (input.shift())
    let decripted = []
    let chars = ["A", "a", "s", "S", "t", "T", "r", "R"]
        for(let i = 0; i < rotations; i++) {
            let message = input[i]
            let counter = 0;
            for (let char of message) {               
                if (chars.includes(char)) {
                    counter++
                }
            }
            let newMsg = message.split("")
            for(let i = 0; i < newMsg.length; i++){
                let char = newMsg[i]
                let n = Number (char.charCodeAt(0))
                let sum = n - counter
                let newChar = String.fromCharCode(sum)
                newMsg.splice(i,1,newChar)
            }
            decripted.push(newMsg.join(""))
        }
    let regExp = /@(?<planet>[A-z]+)[^@\-!:>]*?\:(?<population>\d+)[^@\-!:>]*?\!(?<status>[AD])[^@\-!:>]*?!->(?<soldiers>\d+)[^@\-!:>]*?/
    let attacked = []
    let destroyed = []
    let lastMsg = decripted.shift()
    let matched = regExp.exec(lastMsg)
    let newCount = 0;
    let rot = decripted.length;
    while (newCount <= rot) {
        if (matched) {
        let status = matched.groups["status"]
        let planetName = matched.groups["planet"]
        if (status == "A") {
            attacked.push(planetName)
        } else {
            destroyed.push(planetName)
        }
    }
        newCount++
        lastMsg = decripted.shift()
        matched = regExp.exec(lastMsg)

    }
    attacked.sort((a,b) => a.localeCompare(b))
    destroyed.sort((a,b) => a.localeCompare(b))
    console.log(`Attacked planets: ${attacked.length}`);
    if (attacked.length > 0) {
        for (const el of attacked) {
            console.log(`-> ${el}`);
        }
    }
    console.log(`Destroyed planets: ${destroyed.length}`);
    if (destroyed.length > 0) {
        for (const el of destroyed) {
            console.log(`-> ${el}`);
        }
    }
    
}
starEnigma (['3',
"tt(''DGsvywgerx>6444444444%H%1B9444",
'GQhrr|A977777(H(TTTT',
'EHfsytsnhf?8555&I&2C9555SR']

)