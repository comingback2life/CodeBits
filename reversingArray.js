let theWord = prompt("Enter a awfully long string");
let reverseArray = theWord.split(" ");
for (i = 0; i < reverseArray.length; i++) {
  if (reverseArray[i].length >= 5) {
    let tempWord = reverseArray[i];
    tempWord = tempWord.split("").reverse(tempWord);
    reverseArray[i] = tempWord.join("");
  }
}
let finalOutput = reverseArray.join(" ");
console.log(finalOutput);

//input : FIVES and word four times .
//output : SIVEF and word four semit.
