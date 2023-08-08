// const firstName="Rezoan";
// const lastName="Sarwar"
// const fullName=firstName+" "+lastName;
// console.log(fullName)

// const userName="Rezoan";
// const userInput="rezoaN";

// if (userName.toLocaleLowerCase()===userInput.toLocaleLowerCase()) {
//     console.log("Valid User")
// }
// else{
//     console.log("Invalid User")
// }


const lyrics="tumi bondu kala pakhi ami hoilam ki, bosonto batase bondu"

// const searchLyrics="pakhi";
// const doesExist=lyrics.toLocaleLowerCase().includes(searchLyrics.toLocaleLowerCase())
// console.log(doesExist)

console.log(lyrics.indexOf("kala"))
if (lyrics.indexOf('kala')!==-1) {
    console.log("exist inside the string")
}
else{
    console.log("not Exist inside the string")
}