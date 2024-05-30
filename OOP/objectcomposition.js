class Pizza {
    constructor(baseType) {
        this.baseType = baseType;
    }
}

class PizzaWithSauce extends Pizza {
    constructor(baseType, sauceType) {
        super(baseType);
        this.sauceType = sauceType;
    }
}

class CompletePizza extends PizzaWithSauce {
    constructor(baseType, sauceType, toppingType) {
        super(baseType, sauceType);
        this.toppingType = toppingType;
    }

    addTopping() {
        console.log(`Adding ${this.toppingType}`);
    }
}

const myPizza = new CompletePizza('thin crust', 'tomato', 'cheese');
console.log(myPizza); 

myPizza.addTopping(); 
