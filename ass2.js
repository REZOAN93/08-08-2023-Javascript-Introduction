function isLGSeven(number) {
    if (typeof number ==="number" ) {
        const differenceInput=number-7;
        if (differenceInput>7) {
            const result=number*2
            return result
        }
        else{
            return differenceInput
        }
    }
    else{
        console.log("Please provide the number variable")
    }
}

const myinput=isLGSeven(6)
console.log(myinput)