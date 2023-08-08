function reversedString(text) {
    let reverse='';

    for (let i = text.length-1; i >=0; i--) {
        const element = text[i];
        reverse=reverse+element;
        console.log(element,reverse)
    }
    return reverse
}

const myString="I am a good boy"
const reversed=reversedString(myString)
console.log(reversed)


