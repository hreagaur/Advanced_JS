const add = x => y => x + y;
const multiply = x => y => x * y;

const addThenMultiply = pipe(
  add(3),       
  multiply(2)   
);

console.log(addThenMultiply(4));
