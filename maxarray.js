function arrayMax(number) {
  let heighest = number[0];

  for (let i = 0; i < number.length; i++) {
    const element = number[i];
    // console.log(element);
    if (element > heighest) {
      heighest = element;
    }
  }
  return heighest;
}

const height = [167, 190, 120, 165, 137,267];
const heighestNumber = arrayMax(height);
console.log(heighestNumber);
