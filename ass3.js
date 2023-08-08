const myArray=[10,-12,-18,20,25,-74,14,15,17,-74,42]

function findingBadData(number) {
    let badData=[];
    for (let i = 0; i < number.length; i++) {
        const element = number[i];
        if (element!==0 && element<0) {
            badData.push(element)
        }
        
    }
    return badData.length
}

const myfuntion=findingBadData(myArray)
console.log(myfuntion)