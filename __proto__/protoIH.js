// prototype
const Vehicle = {
    drive() {
      return "Vroom!";
    },
    stop() {
      return "Screech!";
    }
  };
  
// Car object inheriting from Vehicle
const Car = Object.create(Vehicle);
Car.drive = function() {
  return "Zoom!";
};

// Bike inheriting Vehicle
const Bike = Object.create(Vehicle);
Bike.wheelie = function() {
  return "Whee!";
};

// Truck object inheriting Vehicle
const Truck = Object.create(Vehicle);
Truck.honk = function() {
  return "Honk!";
};

// Using objects
console.log(Car.drive()); // Output: "Zoom!"
console.log(Bike.drive()); // Output: "Vroom!"
console.log(Truck.stop()); // Output: "Screech!"
console.log(Truck.honk()); // Output: "Honk!"


// Prototype Chain: Each object (Car, Bike, Truck) has a prototype (Vehicle). When we access a property or method on an object, JavaScript checks if the object itself has that property or method. If not, it looks up the prototype chain until it finds it or reaches the end.

// Inheritance: Each specific vehicle object inherits properties and methods from the Vehicle prototype. For example, Car inherits the drive() method from Vehicle. However, each object can have its own unique properties and methods, like wheelie for Bike and honk for Truck.