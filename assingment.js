function mindGame(number) {
  if (number > 0 && typeof number === "number") {
    const multiply=number*3;
    const sum=multiply+10;
    const divider=sum/2;
    const result=divider-5;
    return result

  } else {
    console.log("Please provide the Positive Number");
  }
}

const myNumber = mindGame(2);
console.log(myNumber);
