let originalPizza = {
    base: "thin crust",
    sauce: "tomato",
    toppings: ["cheese", "pepperoni"]
  };
  
  let shallowCopyPizza = Object.assign({}, originalPizza);
  
  let shallowCopyPizza2 = { ...originalPizza };
  
  shallowCopyPizza.base = "thick crust";
  console.log(originalPizza.base); 
  console.log(shallowCopyPizza.base);
  