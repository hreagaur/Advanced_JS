function applyOperation(a, b, operation) {
    return operation(a, b);
  }
  
  // Example operation functions
  const add = (x, y) => x + y;
  const multiply = (x, y) => x * y;
  
  // Using the higher-order function
  console.log(applyOperation(2, 3, add));       // Outputs: 5
  console.log(applyOperation(2, 3, multiply));  // Outputs: 6
  
  // Higher-order function that returns a function
  function createMultiplier(multiplier) {
    return (value) => value * multiplier;
  }
  
  // Using the higher-order function
  const double = createMultiplier(2);
  const triple = createMultiplier(3);
  
  console.log(double(5)); // Outputs: 10
  console.log(triple(5)); // Outputs: 15
  