let first=5;
let second=7;
// console.log(first,second)

// // temp option 1
// const temp=first;
// first=second;
// second=temp;
// console.log(first,second)

//temp option2 destructuring
[first,second]=[second,first]
console.log(first,second)