const person = {
  firstName: "Samip",
  lastName: "Pokharel",
  phone: 0420420735,
  isAdmin=false;
  interests=["coding","writing",'psychology'] //array
};
const aboutPerson={ //remember defining objectliterals this
    bio: "coder",
    github:"www.github.com/comingback2life",
    favDrink :"coffee",
    favSeries: "SUITS ",
    date:"13AUG2021"
};


const personName = {
  name: "Samip",
  lName: "Pokharel",
}; //object on it's own
const shoppingHistory = [
  { price: 99, purchaseBill: true },
  { price: 2.99, purchaseBill: false },
]; //array with one object inside

//accessing this 2.99 price

shoppingHistory[1].purchaseBill;
