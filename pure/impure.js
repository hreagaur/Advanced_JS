let x=1;
const incr =()=> x+=1;
console.log(incr());
console.log(x);

const myArray=[1,2,3];
const addToArray=(array,data)=>{
    array.push(data);
    return array;
}

console.log(addToArray(myArray,4));
console.log(myArray);