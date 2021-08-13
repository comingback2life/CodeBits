//Finds out the concurrent number of days in a week

//Starts from Monday as Day 1

function returnDay(dayofWeek) {
  if (dayofWeek >= 1 && dayofWeek <= 7) {
    //checking if day is between 1 and seven
    let index = dayofWeek - 1; //assigning array index
    if (index < 0) {
      index = 0; //the last index of array is zero so letting it be ZERO
    }
    let days = [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ];
    return days[index];
  } else {
    return null;
  }
}
