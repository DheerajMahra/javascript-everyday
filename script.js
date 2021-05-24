//#1 Simplest example of a closure in js
/*function liveADay() {
  let food = "cheese";
  function eat() {
    console.log(food + " is good");
  }
  eat(); //See, a closure! Eat closes over food
}
liveADay();*/

//#2 Closures values are retained and updated values are used everytime.
/*function counter() {
  let count = 0;

  return function increment() {
    count = count + 1;
    console.log(count);
  };
}

let incrementCount = counter();
incrementCount(); //count updated to 1 and remains in the memory
incrementCount(); //now, count = 1 will be used here.
incrementCount(); // count = 3*/

//#3 Only values used by the inner function will be present in the closure
/*function helloClosure() {
  let greet = "Hello World!";
  let enjoy = "Wohooo!";
  let goodbye = "Bye!";

  return function logger() {
    console.log(greet);
    console.log(enjoy);
  };
}

let log = helloClosure();
log(); //goodbye will not be in the closure*/

//#4 This will print 6 6 6 6. Closure!
/*function printNum1() {
  for (var i = 0; i < 6; i++) {
    setTimeout(function () {
      console.log(i); //each fn maintains a reference of i, i becomes 6 after loop
    }, i * 1000);
  }
}
printNum1();*/

//#5 Print number after interval of 1s
/*function printNum2() {
  for (let i = 0; i < 6; i++) {
    setTimeout(function () {
      console.log(i); //let will create a new i for each iteration
    }, i * 1000);
  }
}
printNum2();*/

//#6 Print number after interval of 1s without using let
/*function printNum3() {
  for (var i = 0; i < 6; i++) {
    function close(j) {
      setTimeout(function () {
        console.log(j); //we just need to create a separate variable for every iteration
      }, j * 1000);
    }
    close(i); //Fn will help us to do that
  }
}
printNum3();*/

//#7 create a private counter with closure
/*function counter() {
  let _count = 0;

  return {
    increment: function () {
      _count++;
    },
    getCount: function () {
      return _count;
    },
  };
}

let _counter = counter();
_counter.increment();
_counter.increment();
_counter.increment();
console.log(_counter.getCount());*/
