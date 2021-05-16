//#1 Closures values are retained and updated values are used everytime.
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
