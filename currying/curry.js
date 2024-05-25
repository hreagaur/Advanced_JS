function makeSandwich(bread, filling, condiments) {
    return `Here's your ${bread} sandwich with ${filling} and ${condiments}. Enjoy!`;
}

function curryMakeSandwich(bread) {
    return function(filling) {
        return function(condiments) {
            return `Here's your ${bread} sandwich with ${filling} and ${condiments}. Enjoy!`;
        };
    };
}

// Example usage of curried function
const mySandwich = curryMakeSandwich("cheese")("chicken")("mayonnaise");
console.log(mySandwich);

const anotherSandwich = curryMakeSandwich("whole wheat")("turkey")("mustard");
console.log(anotherSandwich);
