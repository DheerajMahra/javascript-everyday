//#1 Simplest example of a closure in js
function liveADay() {
  let food = "cheese";
  function eat() {
    console.log(food + " is good");
  }
  eat(); //See, a closure! Eat closes over food
}
liveADay();

//#2 Closures values are retained and updated values are used everytime.
function counter() {
  let count = 0;

  return function increment() {
    count = count + 1;
    console.log(count);
  };
}

let incrementCount = counter();
incrementCount(); //count updated to 1 and remains in the memory
incrementCount(); //now, count = 1 will be used here.
incrementCount(); // count = 3

//#3 Only values used by the inner function will be present in the closure
function helloClosure() {
  let greet = "Hello World!";
  let enjoy = "Wohooo!";
  let goodbye = "Bye!";

  return function logger() {
    console.log(greet);
    console.log(enjoy);
  };
}

let log = helloClosure();
log(); //goodbye will not be in the closure
