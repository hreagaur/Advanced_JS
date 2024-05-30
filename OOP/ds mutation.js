let pizza = {
    base: "thin crust",
    sauce: "tomato",
    toppings: ["cheese"],
  };
  
  pizza.size = "large";
  console.log(pizza); 

  
  pizza.sauce = "pesto";
  console.log(pizza); 
  
  delete pizza.size;
  console.log(pizza); 
  