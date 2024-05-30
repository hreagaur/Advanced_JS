const originalArray = [1, 2, 3];

const shallowCopyArray1 = originalArray.slice();
const shallowCopyArray2 = [...originalArray];

// Push operation on shallow copy
shallowCopyArray1.push(4);
console.log('Original array:', originalArray); 
console.log('Shallow copy with push:', shallowCopyArray1); 

// Pop operation on shallow copy
const poppedElement = shallowCopyArray2.pop();
console.log('Original array:', originalArray); 
console.log('Shallow copy with pop:', shallowCopyArray2); 
console.log('Popped element:', poppedElement); //  3

// Original object
const originalObject = { a: 1, b: 2 };

// Shallow copy using Object.assign
const shallowCopyObject1 = Object.assign({}, originalObject);
// Shallow copy using spread operator
const shallowCopyObject2 = { ...originalObject };

// Add property to shallow copy
shallowCopyObject1.c = 3;
console.log('Original object:', originalObject); // Outputs: { a: 1, b: 2 }
console.log('Shallow copy with added property:', shallowCopyObject1); // Outputs: { a: 1, b: 2, c: 3 }

// Remove property from shallow copy
delete shallowCopyObject2.b;
console.log('Original object:', originalObject); // Outputs: { a: 1, b: 2 }
console.log('Shallow copy with removed property:', shallowCopyObject2); // Outputs: { a: 1 }
