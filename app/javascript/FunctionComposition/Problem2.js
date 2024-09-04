// Problem: Write a function applyOperations that takes an array of operations (functions) and an initial value. Apply each operation sequentially to the initial value and return the final result.
const operations = [(x) => x + 10, (x) => x * 2, (x) => x - 5]

const applyOperations = (initialValue, operations) => {
  let result = initialValue
  for (let i = 0; i < operations.length; i++) {
    result = operations[i](result)
  }
  return result
}

const result = applyOperations(5, operations) // 5 + 10 = 15; 15 * 2 = 30; 30 - 5 = 25
console.log(result) // Output: 25
