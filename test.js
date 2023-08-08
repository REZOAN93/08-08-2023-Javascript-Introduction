// function isEven(nums) {
//   const evenNum = nums % 2;
//   if (evenNum === 0) {
//     return true;
//   } else {
//     return false;
//   }
// }

// const myNumber=isEven(65)
// console.log(myNumber)


// function getSumofArray(numbers) {
//     let sum=0;

//     for (let i = 0; i < numbers.length; i++) {
//         const element = numbers[i];
//         sum=sum+element
//     }
//     return sum
// }

// let array=[14,75,42,45,12]
// const sumtotal=getSumofArray(array)
// console.log(sumtotal)


function getOddNumber(numbers) {
    let oddnumber=[];
    for (let i = 0; i < numbers.length; i++) {
        const element = numbers[i];
        if (element % 2 !== 0) {
            oddnumber.push(element)
        }
    }
    return oddnumber;
}

let array=[14,75,42,45,12]
const yourOddNUmber=getOddNumber(array)
console.log(yourOddNUmber)