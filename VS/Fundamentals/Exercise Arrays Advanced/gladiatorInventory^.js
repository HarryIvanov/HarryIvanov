function gladiatorInventory (array) {
    let inventory = array[0].split(" ")
    for (let i = 1; i < array.length; i++) {
        let index = array[i].split(" ")
        for (let x = 0; x < index.length; x++) {
            let command = index[x];
           if (command == 'Buy') {
                let equipment = index[x + 1]
                inventory.push(equipment)
           } else if (command == 'Trash') {
                let equipment = index[x + 1];
                if (inventory.includes(equipment)) {
                    let indexOfEquipment = inventory.indexOf(equipment);
                    inventory.splice(indexOfEquipment, 1)

                }
           } else if (command == 'Repair') {
            let equipment = index[x + 1];
            if (inventory.includes(equipment)) {
                let indexOfEquipment = inventory.indexOf(equipment);
                inventory.splice(indexOfEquipment, 1)
                inventory.push(equipment)

            }
           } else if (command == 'Upgrade') {
            let upgrade = index[x+1]
            let eq = ''
            let up = ''
            let grade = ''
            for (let z = 0; z < upgrade.length; z++) {
                if (upgrade[z] === '-') {
                    break;
                }
                eq += upgrade[z]
            } 
            let n = upgrade.indexOf("-")
            for (let y = n+1; y < upgrade.length; y++) {
                up += upgrade[y]
            }
            if (inventory.includes(eq)) {
                let indexOfEquipment = inventory.indexOf(eq);
                let unshift = inventory.splice(indexOfEquipment, 1)
                unshift = unshift.toString()
                grade = `${eq}:${up}`
                inventory.unshift(grade)
                inventory.unshift(unshift)
            }
           }
        }
         
    }


console.log(inventory.join(" "));
}
gladiatorInventory (['SWORD Shield Helmet',
'Trash Bow',
'Repair Shield',
'Upgrade Helmet-V']

)