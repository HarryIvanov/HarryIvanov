class WineSelection {
    constructor (space) {
        this.space = space;
        this.wines = [];
        this.bill = 0;
    }

    reserveABottle (wineName, wineType, price) {
        if (this.space <= 0) {
            throw Error ("Not enough space in the cellar.")
        }
        this.wines.push({wineName, wineType, price, paid: false})
        this.space -= 1
        return `You reserved a bottle of ${wineName} ${wineType} wine.`
    }
    payWineBottle( wineName, price ) {
        let check = this.wines.find(el => el.wineName == wineName);
        if (!check) {
            throw Error (`${wineName} is not in the cellar.`)
        }
        if (check.paid) {
            throw Error (`${wineName} has already been paid.`)
        }
        check.paid = true;
        this.bill += price;
        return `You bought a ${wineName} for a ${price}$.`
    }
    openBottle(wineName) {
        let check = this.wines.find(e => e.wineName == wineName);
        let index = this.wines.findIndex(e => e.wineName == wineName)
        if (!check) {
            throw Error ("The wine, you're looking for, is not found.")
        }
        if (!check.paid) {
            throw Error (`${wineName} need to be paid before open the bottle.`)
        }
        this.wines.splice(index, 1);
        return `You drank a bottle of ${wineName}.`
    }
    cellarRevision(wineType) {
        if (!wineType) {
            let result = [];
            result.push(`You have space for ${this.space} bottles more.`);
            result.push(`You paid ${this.bill}$ for the wine.`);
            let sorted = this.wines.sort((a,b) => a.wineName.localeCompare(b.wineName));
            for (const wine of sorted) {
                let hasPaid = "";
                if (wine.paid) {
                    hasPaid = "Has Paid"
                } else {
                    hasPaid = "Not Paid"
                }
                result.push(`${wine.wineName} > ${wine.wineType} - ${hasPaid}.`)
            }
            return result.join('\n')
        } else {
            let sorted = this.wines.filter(e => e.wineType == wineType);
            if (sorted.length <= 0) {
                throw Error (`There is no ${wineType} in the cellar.`)
            }
            let result = [];
            for (const wine of sorted) {
                let isPaid = ""
                if (wine.paid) {
                    isPaid = "Has paid"
                } else {
                    isPaid = "Not paid"
                }
                result.push(`${wine.wineName} > ${wine.wineType} - ${isPaid}.`)
            }
            return result.join('\n')
        }
    }

}
const selection = new WineSelection(2)
console.log(selection.reserveABottle('Bodegas Godelia Mencía', 'Rose', 144)); 
console.log(selection.cellarRevision('Rose'));







