class Garden {
    constructor (spaceAvailable) {
        this.spaceAvailable = spaceAvailable;
        this.plants = [];
        this.storage = [];
    }

    addPlant (plantName, spaceRequired) {
        if (this.spaceAvailable < spaceRequired) {
            throw Error ("Not enough space in the garden.")
        }
        this.plants.push({plantName, spaceRequired, ripe: false, quantity: 0});
        this.spaceAvailable -= spaceRequired;
        return `The ${plantName} has been successfully planted in the garden.`
    }
    ripenPlant(plantName, quantity) {
        let checkPlant = this.plants.find(e => e.plantName == plantName);
        if (!checkPlant) {
            throw Error (`There is no ${plantName} in the garden.`)
        }
        if (checkPlant.ripe) {
            throw Error (`The ${plantName} is already ripe.`)
        }
        if (quantity <= 0) {
            throw Error ("The quantity cannot be zero or negative.")
        } else if (quantity == 1) {
            checkPlant.ripe = true;
            checkPlant.quantity += 1;
            return `${quantity} ${plantName} has successfully ripened.`
        } else {
            checkPlant.ripe = true;
            checkPlant.quantity += quantity;
            return `${quantity} ${plantName}s has successfully ripened.`
        }

    }
    harvestPlant(plantName) {
        let checkPlant = this.plants.find(e => e.plantName == plantName)
        let index = this.plants.findIndex(e => e.plantName == plantName)
        if (!checkPlant) {
            throw Error (`There is no ${plantName} in the garden.`)
        }
        if (!checkPlant.ripe) {
            throw Error (`The ${plantName} cannot be harvested before it is ripe.`)
        }
        this.plants.splice(index,1);
        let quantity = checkPlant.quantity;
        this.storage.push({plantName, quantity});
        this.spaceAvailable += checkPlant.spaceRequired;
        return `The ${plantName} has been successfully harvested.`

    }
    generateReport() {
        let result = [];
        result.push(`The garden has ${this.spaceAvailable} free space left.`);
        let sortedGarden = this.plants.sort((a,b) => a.plantName.localeCompare(b.plantName));
        let garden = `Plants in the garden: `
        let plants = []
        let storagePlants = [];
        let storage = "Plants in storage: "
        for (const el of sortedGarden) {
            plants.push(`${el.plantName}`)
        }
        garden += plants.join(', ');
        result.push(garden)
        if (this.storage.length <=0) {
            result.push("Plants in storage: The storage is empty.")
        } else {
            for (const el of this.storage) {
                storagePlants.push(`${el.plantName} (${el.quantity})`)
            }
            
            storage += storagePlants.join(', ')
            result.push(storage)
        }
        
        
        
        
        return result.join("\n")
    }
}
const myGarden = new Garden(250)
console.log(myGarden.addPlant('apple', 20));
console.log(myGarden.addPlant('orange', 100));
console.log(myGarden.addPlant('cucumber', 30));
console.log(myGarden.ripenPlant('apple', 10));
console.log(myGarden.ripenPlant('orange', 1));
console.log(myGarden.ripenPlant('olive', 30));










