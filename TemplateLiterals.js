let userName = prompt("Enter the username");
let fullName = prompt("Enter your full name");
let age = prompt("Enter the age ");
let address = prompt("Enter the address of the user");
let personDetails = [userName, fullName, age, address];
personDetails[1] = "Samip";
console.log(
  `username is ${personDetails[0]} and name is ${personDetails[1]}. The age is ${personDetails[2]} and the address is ${personDetails[3]}`
);
personDetails.push("Logged in ");
