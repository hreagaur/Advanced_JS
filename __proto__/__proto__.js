let vehicle = {
    hasEngine: true,
    start() {
      console.log("Engine started");
    },
    stop() {
      console.log("Engine stopped");
    }
  };
  
  let car = {
    wheels: 4,
    drive() {
      console.log("Car is driving");
    }
  };
  
  car.__proto__ = vehicle;
  
  console.log(car.hasEngine); 
  console.log(car.wheels); 
  
  car.start(); 
  car.drive(); 
  car.stop(); 
  