const base = (type) => ({
    baseType: type,
});

const sauce = (type) => ({
    sauceType: type,
});

const topping = (type) => ({
    toppingType: type,
    addTopping() {
        console.log(`Adding ${this.toppingType}`);
    },
});

const bake = () => ({
    bake() {
        console.log("Baking the pizza...");
    },
});

const toss = () => ({
    toss() {
        console.log("Tossing the pizza dough...");
    },
});
