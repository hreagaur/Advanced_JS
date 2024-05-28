const curriedMultiply = a => b => a * b;

console.log(curriedMultiply(2)(3)); 

const partiallyAppliedMultiply = (a) => (b, c) => multiply(a, b, c);

// Fixing the first argument to 2
const multiplyBy2 = partiallyAppliedMultiply(2);

console.log(multiplyBy2(3, 4)); 

const partial = (fn, ...fixedArgs) => 
    (...remainingArgs) => 
        fn(...fixedArgs, ...remainingArgs);

// Fixing the first argument to 10
const multiplyByTen = partial(multiply, 10);

console.log(multiplyByTen(5)); 
console.log(multiplyByTen(3)); 
console.log(multiplyByTen(7)); 


