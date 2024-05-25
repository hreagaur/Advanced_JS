function sumRecursive(n) {
    if (n === 0) {
        return 0;
    }

    return n + sumRecursive(n - 1);
}

const num = 5;
const resultRecursive = sumRecursive(num);
console.log(`Sum of numbers from 1 to ${num} (recursive): ${resultRecursive}`);
