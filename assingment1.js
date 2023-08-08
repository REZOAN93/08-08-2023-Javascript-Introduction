function evenOdd(inputString) {
    let length = inputString.length;
    
    if (length % 2 === 0) {
        return 'even';
    } else {
        return 'odd';
    }
}

const myString=evenOdd('shawon')
console.log(myString)