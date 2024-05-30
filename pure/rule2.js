// A pure function that concatenates two strings
function concatenate(str1, str2) {
    return str1 + str2;
  }
  
  // Calling the pure function
  console.log(concatenate("Hello, ", "world!")); 
  console.log(concatenate("Hello, ", "world!")); 

let greeting = "Hello, ";

function addWorld() {
  greeting += "world!";
}

// Calling the impure function
addWorld();
console.log(greeting); 

  