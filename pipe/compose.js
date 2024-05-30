const compose = (...functions) => input => {
    return functions.reduceRight((acc, fn) => fn(acc), input);
  };

  const add = x => y => x + y;
const multiply = x => y => x * y;
const subtract = x => y => x - y;

const pipeFlow = pipe(
  add(3),       
  multiply(2),  
  subtract(5)   
);

console.log(pipeFlow(10)); //21

const composeFlow = compose(
  subtract(5),  
  multiply(2),  
  add(3)        
);

console.log(composeFlow(10)); // 21
