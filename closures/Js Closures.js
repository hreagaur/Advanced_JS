// Closure is a dynamic feature that allows inner functions to retain access to their outer function's variables, 
// even after the outer function has finished executing.

// inner functions retain access to variables from their outer functions,
//  even after the outer functions have finished executing.

function girl(){
    let bro ="Hrea Gaur";
    function cats(){
        console.log(bro + " loves cats!!!");
    }
    return cats;
}
const loves = girl();
loves();