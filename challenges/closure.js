// ==== Closures ==== 

/* Task 1: Study the code below and explain in your own words why nested function can access the variable internal. */

console.log("Closure Task 1: ")
const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  };
  nestedFunction();
}
myFunction();

// Explanation: 
// The function nestedFunction can access internal because of scope - it has access to the variables within its lexical scope. This reaching outside of a function for a variable is an example of closure. 

/* Task 2: Counter */

function summation(num){
  let sum = 0;
  for (let i = 1; i <= num; i++){
    sum += i;
  }
  return sum;
}
console.log("Closure Task 2: (Complete)")
console.log(summation(4));

/* Create a function called `summation` that accepts a parameter and uses a counter to return the summation of that number. For example, `summation(4)` should return 10 because 1+2+3+4 is 10. */
