import React from 'react'

const Problem1 = () => {
  /**
   * @param {number} n
   * @return {Function} counter
   */
  var createCounter = function (n) {
    let currentvalue = n // Initialize currentvalue to n
    return function () {
      n = currentvalue // Set n to currentvalue (this effectively returns the current value)
      currentvalue++ // Increment currentvalue for the next call
      return n // Return the current value (previous n)
    }
  }

  const counter = createCounter(10)
  console.log(counter()) // 10
  console.log(counter()) // 11
  console.log(counter()) // 12

  return (
    <div>
      <h1 className=" text-7xl"> Problem1</h1>
    </div>
  )
}

export default Problem1
