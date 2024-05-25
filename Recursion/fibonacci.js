function fibonacciIterative(n) {
    if (n <= 1) {
        return n;
    }

    let fibPrev = 0;
    let fibCurrent = 1;

    for (let i = 2; i <= n; i++) {
        let temp = fibCurrent;
        fibCurrent += fibPrev;
        fibPrev = temp;
    }

    return fibCurrent;
}

// Example usage
const n = 10;
const nthFibonacci = fibonacciIterative(n);
console.log(`The ${n}th Fibonacci number is: ${nthFibonacci}`);
