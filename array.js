const country = "Bangladesh";
const age = 52;
const isIndependent = true;
const student = { id: 121, class: 11, name: "agun" };
const friends=[12,14,15,17,21,20,13]


console.log(typeof country)
console.log(typeof age)
console.log(typeof isIndependent)
console.log(Array.isArray(student))
console.log(Array.isArray(friends))
console.log(typeof student)
console.log(typeof friends)

console.log(friends.includes(29))

const newFirends=[45,74,21,34,45,25];

console.log(newFirends.concat(friends))