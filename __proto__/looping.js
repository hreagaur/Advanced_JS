let car = {
    brand: 'Toyota',
    start() {
      console.log('Car started');
    }
  };
  
  let luxuryCar = Object.create(car); 
  luxuryCar.model = 'Lexus';
  luxuryCar.year = 2021;
  luxuryCar.drive = function() {
    console.log('Driving a luxury car');
  };
  
 
  Object.keys(luxuryCar).forEach(key => {
    console.log(`${key}: ${luxuryCar[key]}`);
  });
  

  for (let key in luxuryCar) {
    console.log(`${key}: ${luxuryCar[key]}`);
  }
  