// ES6 classes help organize code in a clear and efficient manner. By defining properties and methods, 
// you can easily create, update, and manage objects that represent real-life entities

class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  

    displayDetails() {
      console.log(`Name: ${this.name}, Age: ${this.age}`);
    }

    updateAge(newAge) {
      this.age = newAge;
    }
  
    celebrateBirthday() {
      this.age += 1;
      console.log(`Happy Birthday, ${this.name}! You are now ${this.age} years old.`);
    }
  }
  
  const person1 = new Person('Hrea', 22);
  
  person1.displayDetails(); 
  
  // Update age
  person1.updateAge(23);
  person1.displayDetails(); // Name: Hrea, Age: 23
  person1.celebrateBirthday(); //Happy Birthday, Hrea! You are now 23 years old.
  