let userInput = prompt("Enter your choice");
let acceptedInput = ["new", "list", "delete", "quit"];
let flag = true;
let i = 1;
const userTasks = {};
while (flag) {
  if (acceptedInput.includes(userInput)) {
    if (userInput === "new") {
      userTasks[i] = prompt("Enter a task ");
      console.log(`Task added successfully.`);
      i++;
      userInput = prompt("Enter a choice");
    } else if (userInput === "list") {
      let length = Object.values(userTasks);
      console.log("*****");
      console.log(userTasks);
      console.log("*****");
      flag = false;
      userInput = prompt("Enter a choice");
      flag = true;
    } else if (userInput === "delete") {
      let indexInput = prompt("Enter the index of the task you want to delete");
      if (indexInput > Object.values(userTasks).length) {
        console.log("Invalid , Task does not exist");
        indexInput = prompt("Enter the index of the task you want to delete");
      } else {
        delete userTasks[indexInput];
        console.log("*****Task Deleted : Updated list***");
        console.log(userTasks);
        console.log("*****");
        userInput = prompt("Enter a choice");
      }
    } else if (userInput === "quit") {
      flag = false;
    }
  } else {
    flag = false;
    console.log("Invalid Command Detected");
  }
}
