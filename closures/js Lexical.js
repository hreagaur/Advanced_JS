function makeCounter() {
    let count = 1; 

    function increment() {
        count++; 
        console.log('Count:', count); 
    }

    function decrement() {
        count--; 
        console.log('Count:', count); 
    }

    return { increment, decrement }; 
}


const counter = makeCounter();


counter.increment(); 
counter.increment(); 
counter.decrement(); 
