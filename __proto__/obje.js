// Constructor function for Animal
function Animal(species) {
    this.species = species;
    this.eats = true;
  }
  
  
  Animal.prototype.walks = function() {
    return `A ${this.species} is walking`;
  };
  

  const Bear = new Animal("bear");
  

  console.log(Bear.species); // Output: bear
  console.log(Bear.walks()); // Output: A bear is walking
  
  console.log(Bear.__proto__); // Output: Animal { walks: [Function] }
  console.log(Bear.__proto__ === Animal.prototype); // Output: true
  console.log(Animal.prototype); // Output: Animal { walks: [Function] }
  console.log(Bear); // Output: Animal { species: 'bear', eats: true }
  