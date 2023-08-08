function reverseWords(str) {
    const word=str.split(' ')
    const result=[]
    for (let i = word.length-1; i >=0; i--) {
        const element = word[i];
        result.push(element)
    }
    const reversed=result.join(' ')
    return reversed;
}

const myWord="I am good Boy"
const revsedword=reverseWords(myWord)
console.log(revsedword)