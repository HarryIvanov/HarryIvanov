function treasureFinder (input) {
    let numbers = input.shift().split(" ");
    let readLine = input.shift();
    let messages = [];
    let typeRegExp = /([&])(?<type>.*)\1.*([<])(?<coords>.*)([>])/

    while (readLine !== "find") {
        let x = 0;
        let message = readLine.split("");
        for (let i = 0; i < message.length; i++) {
            let num = Number (numbers[x]);
            if (!num) {
                x = 0;
                num = Number (numbers[x]);
            } 
            let char = message[i];
            let charIndex = Number (char.charCodeAt(0)) - num;
            let newChar = String.fromCharCode(charIndex);
            message[i] = newChar;
            x++;
        }
        message = message.join("")
        let matched = message.match(typeRegExp);
        let type = matched.groups.type;
        let coords = matched.groups.coords;
        console.log(`Found ${type} at ${coords}`);
        
        readLine = input.shift()
    }
}
treasureFinder (["1 4 2 5 3 2 1",
`Ulgwh"jt$ozfj!'kqqg(!bx"A3U237GC`,
"tsojPqsf$(lrne'$CYfqpshksdvfT$>634O57YC",
"'stj)>34W68Z@",
"find"]
)