const candyInventory = (function() {
    const inventory = {};

    function addCandy(candy, quantity) {
        inventory[candy] = (inventory[candy] || 0) + quantity;
    }

    function checkStock(candy) {
        return inventory[candy] || 0;
    }

    return {addCandy,checkStock};
})();


candyInventory.addCandy('Lollipops', 30);
candyInventory.addCandy('chococips',20);
console.log(candyInventory.checkStock('Lollipops')); 
