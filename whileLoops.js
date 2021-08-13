let userInput = parseInt(prompt("Enter a input"));
let NumberOfTries = 1; //1 is the minimum
let guessedNumber = 123;
if (!userInput && userInput !== "q") {
  console.log("Enter a number only");
} else {
  if (userInput === guessedNumber) {
    console.log("Congratulations , you win at first attempt");
  }
  while (userInput !== guessedNumber && userInput) {
    NumberOfTries++;
    if (parseInt(userInput) > guessedNumber) {
      console.log("The number is greater try again");
      userInput = prompt("Enter a input");
    } else if (userInput < guessedNumber) {
      console.log("The number is small , try again");
      userInput = prompt("Enter a input");
    } else if (userInput === guessedNumber) {
      console.log(`Congratulations , you win at ${NumberOfTries} attempts`);
      break;
    } else if (userInput === "q") {
      console.log("You quit!");
      break;
    }
  }
}
