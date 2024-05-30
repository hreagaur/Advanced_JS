const memoize = (func) => {
    const cache = {};
    return (...args) => {
        const key = args.join('|');
        if (key in cache) {
            console.log('Fetching from cache:', key);
            return cache[key];
        }
        const result = func(...args);
        cache[key] = result;
        return result;
    };
};

const multiply = (num1, num2) => {
    console.log('Calculating result');
    return num1 * num2;
};

const memoizedMultiply = memoize(multiply);

const factorial = memoize((n) => {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
});

const multiplyby10 = (num) => {
    console.log('Calculating result');
    return num * 10;
};

const memoizedMultiplyBy10 = memoize(multiplyby10);

const initApp = async () => {
    console.log(memoizedMultiply(2, 5)); // First call, calculates result
    console.log(memoizedMultiply(2, 5)); // Second call, fetches from cache
    console.log(memoizedMultiply(2, 5)); // Third call, fetches from cache

    console.log(factorial(5)); // First call, calculates result
    console.log(factorial(5)); // Second call, fetches from cache
    console.log(factorial(5)); // Third call, fetches from cache

    console.log(memoizedMultiplyBy10(10)); // First call, calculates result
    console.log(memoizedMultiplyBy10(10)); // Second call, fetches from cache
    console.log(memoizedMultiplyBy10(10)); // Third call, fetches from cache
};

document.addEventListener('DOMContentLoaded', initApp);
