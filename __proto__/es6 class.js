class Animal {
    constructor(species) {
      this.species = species;
      this.eats = true;
    }
  
    walks() {
      return `A ${this.species} is walking`;
    }
  }
  
  class Dog extends Animal {
    constructor(name) {
      super('dog'); 
      this.name = name;
    }

    barks() {
      return `${this.name} the ${this.species} is barking`;
    }
  }
  
  const rex = new Dog('Hreo');
  
  console.log(rex.species); // Output: dog
  console.log(rex.eats);    // Output: true
  console.log(rex.walks()); // Output: A dog is walking
  console.log(rex.barks()); // Output: Hreo the dog is barking
  