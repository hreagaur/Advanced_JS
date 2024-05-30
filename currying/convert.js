
const partial = (fn, ...fixedArgs) => 
    (...remainingArgs) => 
        fn(...fixedArgs, ...remainingArgs);


const curry = (fn) => {
    const curried = (...args) => {
        if (fn.length !== args.length) {
            return curried.bind(null, ...args);
        }
        return fn(...args);
    };
    return curried;
};


const multiply = (a, b, c) => a * b * c;

const curriedMultiply = curry(multiply);

console.log(curriedMultiply(2)(3)(4)); 
console.log(curriedMultiply(2, 3)(4));
console.log(curriedMultiply(2)(3, 4)); 


const multiplyByTen = partial(multiply, 10);

console.log(multiplyByTen(2, 3)); 
console.log(multiplyByTen(4, 5)); 
console.log(multiplyByTen(6, 7)); 
