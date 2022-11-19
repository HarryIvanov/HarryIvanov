function netherRealms (input) {
    let spl = /[, ]+/g
    let arr = input.split(spl)
    let result = {}
    let hpRegExp = /[0-9]|[+\-\/\*\.]/
    let dmgReg = /([-+])?(\d)+([.]?\d+)?/g
    let signs = /([*\/]+)/
    for (let el of arr) {
        let chars = []
        let dmgMatch = dmgReg.exec(el)
        let dmg = 0;
        while (dmgMatch !== null) {
            dmg += Number (dmgMatch[0])
            dmgMatch = dmgReg.exec(el)
        }
        let hp = 0;
        for (const char of el) {
            let matched = hpRegExp.exec(char)
            let sign = signs.exec(char)
            if(matched == null) {
                let num = Number (char.charCodeAt(0))
                hp += num
            }
            if (sign) {
                chars.push(sign[0])
            }
        }
        for (const el of chars) {
            if (el == "*") {
                dmg = dmg * 2
            } else if (el == "/") {
                dmg = dmg / 2
            }
        }
        result[el] = {hp, dmg}
    }
    let filtered = Object.entries(result).sort(([keyA, valueA], [keyB, valueB]) => keyA.localeCompare(keyB))
    for (const [el, value] of filtered) {
        console.log(`${el} - ${value.hp} health, ${value.dmg.toFixed(2)} damage`);
    }
    
}
netherRealms("M3ph1st0**, Azazel")
netherRealms("M3ph-0.5s-0.5t0.0**")
netherRealms("Gos/ho")