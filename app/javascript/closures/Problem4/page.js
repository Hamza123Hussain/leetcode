import React from 'react'
/**Design a function createFibonacci that returns another function which generates Fibonacci numbers in sequence. The returned function should return the next Fibonacci number each time it's called. */
const Problem4 = () => {
  const createFibonacci = () => {
    let a = 0 // Initialize the first number in the Fibonacci sequence
    let b = 1 // Initialize the second number in the Fibonacci sequence

    return () => {
      let current = a // Store the current value of `a` (the next Fibonacci number to return)

      // Update the values of `a` and `b` to the next two numbers in the sequence
      // `a` takes the value of `b`
      // `b` takes the sum of the old values of `a` and `b`
      ;[a, b] = [b, a + b]

      return current // Return the stored value of `a` which is the current Fibonacci number
    }
  }

  const fib = createFibonacci()
  console.log(fib()) // 0
  console.log(fib()) // 1
  console.log(fib()) // 1
  console.log(fib()) // 2
  console.log(fib()) // 3

  return <div></div>
}

export default Problem4
