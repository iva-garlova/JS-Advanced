class OnlineShop {
    constructor(warehousespace){
        this.warehousespace = warehousespace;
        this.products = [];
        this.sales = [];
    }

    loadingStore(product, quantity, spaceRequired){
        if(this.warehousespace < spaceRequired){
            throw new Error("Not enough space in the warehouse.")
        }
        this.products.push({
            product,
            quantity
        })
        this.warehousespace -= spaceRequired;
        return `The ${product} has been successfully delivered in the warehouse.`
    }

    quantityCheck(product, minimalQuantity){
        const data = this.products.find(p => p.product == product);

        if(!data){
            throw new Error(`There is no ${product} in the warehouse.`)
        }
        if(minimalQuantity <= 0) {
            throw new Error(`The quantity cannot be zero or negative.`)
        }
        if(data.quantity >= minimalQuantity){
            return `You have enough from product ${product}.`
        } else {
            const difference = minimalQuantity - data.quantity;
            data.quantity = minimalQuantity;
             return `You added ${difference} more from the ${product} products.`
        }

    }
    sellProduct(product){
        const data = this.products.find(p => p.product == product);

        if(!data){
            throw new Error(`There is no ${product} in the warehouse.`)
        } else {
            data.quantity--;
            let quantity = product.quantity;
            this.sales.push({
                product,
                quantity
            })
            return `The ${product} has been successfully sold.`
        }

    }
    revision(){
        let result = [];
        if (this.sales.length === 0) {
            throw new Error("There is no sales today!");
          }else {
            result.push(`You sold ${this.sales.length} products today!`)
          }

      result.push(`Products in warehouse:`);
      this.products.map((x) =>result.push(`${x.product} - ${x.quantity} more left`))    
      
      return result.join("\n");
    }

    }



// const myOnlineShop = new OnlineShop(500)
// console.log(myOnlineShop.loadingStore('headphones', 10, 200));
// console.log(myOnlineShop.loadingStore('laptop', 5, 200));
// console.log(myOnlineShop.loadingStore('TV', 40, 500));

// const myOnlineShop = new OnlineShop(500)
// console.log(myOnlineShop.loadingStore('headphones', 10, 200));
// console.log(myOnlineShop.loadingStore('laptop', 5, 200));
// console.log(myOnlineShop.loadingStore('TV', 40, 500));

const myOnlineShop = new OnlineShop(500)
console.log(myOnlineShop.loadingStore('headphones', 10, 200));
console.log(myOnlineShop.loadingStore('laptop', 5, 200));
console.log(myOnlineShop.quantityCheck('headphones', 10));
console.log(myOnlineShop.quantityCheck('laptop', 10));
console.log(myOnlineShop.sellProduct('headphones'));
console.log(myOnlineShop.sellProduct('laptop'));
console.log(myOnlineShop.sellProduct('keyboard'));


// const myOnlineShop = new OnlineShop(500)
// console.log(myOnlineShop.loadingStore('headphones', 10, 200));
// console.log(myOnlineShop.loadingStore('laptop', 5, 200));
// console.log(myOnlineShop.quantityCheck('headphones', 10));
// console.log(myOnlineShop.quantityCheck('laptop', 10));
// console.log(myOnlineShop.sellProduct('headphones'));
// console.log(myOnlineShop.sellProduct('laptop'));
// console.log(myOnlineShop.revision());

