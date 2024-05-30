let x = 1;

const incr = () => x += 1;

console.log(incr()); // Outputs: 2
console.log(x);      // Outputs: 2

const myArray = [1, 2, 3];

const addToArray = (array, data) => {
    array.push(data);
    return array;
}

console.log(addToArray(myArray, 4)); // Outputs: [1, 2, 3, 4]
console.log(myArray);                // Outputs: [1, 2, 3, 4]
