function lastElement(elements) {
  if (elements.length <= 0) {
    //checks if the array length is 0 . if Zero return null
    return null;
  } else {
    let lastIndex = elements.length - 1; //getting INdex of the array
    if (elements.lastIndex != -1) {
      return elements[lastIndex]; //returns the last element of any array
    }
  }
}
let result = lastElement([]);
console.log(result);
result = lastElement([3, 4, 5]); //this should return 5
console.log(result);
result = lastElement([3, 4]); //this will give 4
console.log(result);
