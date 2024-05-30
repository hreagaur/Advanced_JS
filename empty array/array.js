myarray=[]

console.log(myarray?.length?true:false);

myarray=[{"id":1}];

console.log(myarray?.[0]?.name ? true:false)

console.log(myarray?.[0].name?true:false)

console.log(myarray?.[0]?.id??"no id");