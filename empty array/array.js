let myarray = [];

console.log(myarray?.length ? true : false); // false

myarray = [{ "id": 1 }];

console.log(myarray?.[0]?.name ? true : false); // false

console.log(myarray?.[0].name ? true : false); // false

console.log(myarray?.[0]?.id ?? "no id"); // 1

myarray.push({ "id": 2, "name": "Alice" });
myarray.push({ "name": "hrea" });

console.log(myarray?.[1]?.name ? true : false); // true

console.log(myarray?.[2]?.id ? true : false); // false

console.log(myarray?.[2]?.name ?? "no name"); // "hrea"

console.log(myarray?.[3]?.name ? true : false); // false

console.log(myarray?.[3]?.id ?? "no id"); // "no id"

myarray.push({ "id": 3, "details": { "age": 20, "city": "New York" } });

console.log(myarray?.[3]?.details?.city ?? "no city"); // "New York
