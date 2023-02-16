class OnlineShop {
    constructor (warehouseSpace) {
        this.warehouseSpace = Number (warehouseSpace);
        this.products = [];
        this.sales = [];

    }
    loadingStore (product, quantity, spaceRequired) {
        if (this.warehouseSpace < spaceRequired) {
            throw Error ("Not enough space in the warehouse.")
        }
        this.products.push({product, quantity})
        this.warehouseSpace -= Number (spaceRequired);
        return `The ${product} has been successfully delivered in the warehouse.`

    }
    quantityCheck (product, minimalQuantity) {
       let check = this.products.find(el => el.product == product);
       if (!check) {
        throw Error (`There is no ${product} in the warehouse.`)
       } else if (Number (minimalQuantity <= 0)) {
        throw Error ("The quantity cannot be zero or negative.")
       } else if (Number (minimalQuantity) <= Number (check.quantity)) {
        return `You have enough from product ${product}.`
       } else {
        let difference = Number (minimalQuantity) - Number (check.quantity)
        check.quantity = minimalQuantity
        
        return `You added ${difference} more from the ${product} products.`
       }
       

    }
    sellProduct (product) {
        let check = this.products.find(el => el.product == product);
       if (!check) {
        throw new Error (`There is no ${product} in the warehouse.`)
       }
       check.quantity -= 1
       let sales = this.sales.find(el => el.product == product)
       if (!sales) {
        this.sales.push({product, sales: 1});
       } else {
        sales.sales += 1
       }
       return `The ${product} has been successfully sold.`

    }
    revision () {
        if (this.sales.length <= 0) {
            throw Error ("There are no sales today!")
        }
        let result = []
        let totalSales = 0;
        let str = ""
        for (const el of this.sales) {
            totalSales += Number (el.sales)
        }
        result.push("Products in the warehouse:");
        result.unshift(`You sold ${totalSales} products today!`);
        
        for (const el of this.products) {
            result.push(`${el.product}-${el.quantity} more left`)
        }      
       
        return result.join("\n")

    }

}
const myOnlineShop = new OnlineShop(500)
console.log(myOnlineShop.loadingStore('headphones', 10, 200));
console.log(myOnlineShop.loadingStore('laptop', 5, 200));

console.log(myOnlineShop.quantityCheck('headphones', 10));
console.log(myOnlineShop.quantityCheck('laptop', 10));

console.log(myOnlineShop.sellProduct('headphones'));
console.log(myOnlineShop.sellProduct('laptop'));
console.log(myOnlineShop.revision());




 



 


