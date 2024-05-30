const add = x => y => x + y;
const multiply = x => y => x * y;
const subtract = x => y => x - y;
const power = x => n => Math.pow(x, n); 

const pipeFlow = pipe(
  add(3),        
  multiply(2),   
  power(2),       
  subtract(5)     
);

console.log(pipeFlow(10)); 
const composeFlow = compose(
  subtract(5),    
  power(2),      
  multiply(2),    
  add(3)          
);

console.log(composeFlow(10)); 