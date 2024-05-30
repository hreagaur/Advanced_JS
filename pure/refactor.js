const myarray = [1, 2, 3];

const addToArray = (array, data) => {
    array.push(data);
    return array;
}

console.log(addToArray(myarray, 4)); // Outputs: [1, 2, 3, 4]
console.log(myAaray);                // Outputs: [1, 2, 3, 4]


const adToArray = (array, data) => {
    return [...array, data];
}

const myArray = [1, 2, 3];
console.log(addToArray(myArray, 4)); // Outputs: [1, 2, 3, 4]
console.log(myArray);                // Outputs: [1, 2, 3]
