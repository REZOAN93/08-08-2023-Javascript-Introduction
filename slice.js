const friends=[12,14,15,14,17,18,19,19,12,1,3]
// const partial=friends.slice(2,5)
// console.log(partial)
// console.log(friends)


// const partial1=friends.splice(2,5);
// console.log(partial1)
// console.log(friends)

const name=["abdul","kbdul","dbdul","abdul","lbdul","ebdul","obdul","dbdul",]

function removedDuplicate(names) {
    const unique=[];
    for (let i = 0; i < names.length; i++) {
        const element = names[i];
        if (unique.includes(element)===false) {
            unique.push(element)
        }
    }
    return unique;
}

const removedDuplicateName=removedDuplicate(name)
console.log(removedDuplicateName)