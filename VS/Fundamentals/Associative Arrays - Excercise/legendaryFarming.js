function legendaryFarming(str) {
    let Shadowmourne = 250
    let Valanyr = 250
    let Dragonwrath = 250
    let keyMaterials = {
        "fragments": 0,
        "motes": 0,
        "shards": 0
    };
    let arr = str.split(" ")
    let array = []
    for (const el of arr) {
        if (el == "") {
            continue;
        } else {
            array.push(el)
        }
    }
    let junk = {};
    
    for (let i = 0; i < array.length; i++) {
        let n = Number(array[i]);
        let material = array[i + 1].toLowerCase();

        if (material == "fragments") {  // Valanyr
            if (n >= Valanyr) {
                let n1 = n - Valanyr
                keyMaterials[material] = n1
                console.log("Valanyr obtained!");
                break;
            } else {
                Valanyr -= n;
                let n2 = Number(keyMaterials[material])
                keyMaterials[material] = n + n2
            }
        } else if (material == "shards") { // Shadowmourne
            if (n >= Shadowmourne) {
                let n1 = n - Shadowmourne
                keyMaterials[material] = n1
                console.log("Shadowmourne obtained!");
                break;
            } else {
                Shadowmourne -= n;
                let n2 = Number(keyMaterials[material])
                keyMaterials[material] = n + n2
            }
        } else if (material == "motes") { // Dragonwrath
            if (n >= Dragonwrath) {
                let n1 = n - Dragonwrath
                keyMaterials[material] = n1
                console.log("Dragonwrath obtained!");
                break;
            } else {
                Dragonwrath -= n;
                let n2 = Number(keyMaterials[material])
                keyMaterials[material] = n + n2
            }
        } else {
            if (!junk.hasOwnProperty(material)) {
                junk[material] = n
            } else {
                let n2 = Number(junk[material])
                junk[material] = n + n2
            }
        }
        i++;
    }
    let keyByQty = Object.entries(keyMaterials).sort((a, b) => a[0].localeCompare(b[0]))
    let sortedKey = keyByQty.sort(([keyA, valueA], [keyB, valueB]) => valueB - valueA)
    for (const [key, value] of sortedKey) {
        console.log(`${key}: ${value}`);
    }

    let junkByName = Object.entries(junk).sort((a, b) => a[0].localeCompare(b[0]))
    for (const [key, value] of junkByName) {
        console.log(`${key}: ${value}`);
    }



}
legendaryFarming('5 fragments 250 fragments')