function partyTime (input) {
    let vip = []
    let normal = []
    
    let readLine = input.shift();
        while(readLine !== "PARTY") {
            if (readLine.charCodeAt(0) >= 48 && readLine.charCodeAt(0) <= 57) {
                vip.push(readLine)
            } else {
                normal.push(readLine)
            }
            readLine = input.shift();
        }
    for (const key of input) {
        
        if (vip.includes(key)) {
                let n = vip.indexOf(key)
                vip.splice(n, 1)
            }
        
        if (normal.includes(key)) {
                let n = normal.indexOf(key)
                normal.splice(n, 1)
            }
        
    }   
   let size = normal.length + vip.length
    console.log(size);
    for (const key of vip) {
        console.log(key);
    }
    for (const key of normal) {
        console.log(key);
    }
        
}
partyTime (['m8rfQBvl',
'fc1oZCE0',
'UgffRkOn',
'7ugX7bm0',
'9CQBGUeJ',
'2FQZT3uC',
'dziNz78I',
'mdSGyQCJ',
'LjcVpmDL',
'fPXNHpm1',
'HTTbwRmM',
'B5yTkMQi',
'8N0FThqG',
'xys2FYzn',
'MDzcM9ZK',
'PARTY',
'2FQZT3uC',
'dziNz78I',
'mdSGyQCJ',
'LjcVpmDL',
'fPXNHpm1',
'HTTbwRmM',
'B5yTkMQi',
'8N0FThqG',
'm8rfQBvl',
'fc1oZCE0',
'UgffRkOn',
'7ugX7bm0',
'9CQBGUeJ'
]

)