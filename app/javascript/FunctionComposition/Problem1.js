/**Problem: Write a function compose that takes an array of functions and returns a new function. The new function should take multiple arguments and apply each function in the array sequentially from right to left, passing the result of each function as arguments to the next function. */

// Define the compose function which takes an array of functions as input
var compose = function (functions) {
  // Return a new function that accepts any number of arguments
  return function (...args) {
    // Start with the result of the first function in the array, applied to the initial arguments
    let result = functions[0](...args)

    // Apply each remaining function in the array to the result, in order
    for (let i = 1; i < functions.length; i++) {
      // Update result by applying the current function to the previous result
      result = functions[i](result)
    }

    // Return the final result after all functions have been applied
    return result
  }
}

// Define an array of functions to be composed
const functions = [
  // This function requires 3 arguments and sums them up
  (a, b, c) => a + b + c,

  // This function requires 1 argument and doubles it
  (x) => x * 2,

  // This function requires 1 argument and subtracts 5 from it
  (y) => y - 5,
]

// Create a composed function using the array of functions
const composedFunction = compose(functions)

// Apply the composed function with initial arguments
const result = composedFunction(1, 2, 0) // 1 + 2 + 0 = 3; 3 * 2 = 6; 6 - 5 = 1

// Output the final result to the console
console.log(result) // Expected Output: 1
