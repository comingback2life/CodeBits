//This is a simple application to demonstrate the use of factoryFunctions

//So the app will ask for a user's age and will check against the value.

function isBetweenRange(min, max) {
  //minimum value and maximum value of age accepted by the function
  return function (num) {
    //this function accepts the test value that will be passed by the user
    return num >= min && num <= max;
  };
}

const isAllowed = isBetweenRange(0, 19); //this sets the min and max value where the number is going to be evaulated against
console.log(isAllowed(30)); //this should return false as the value for num is greater than the range
