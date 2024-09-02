import React from 'react'
/**Problem 3: Create a Limited Counter
Design a function createLimitedCounter that takes an initial value and a maximum limit. The returned function should:

Return the current counter value when called.
Increment the counter value, but only if it is less than the maximum limit. If the counter reaches the maximum limit, it should stay at that value. */
const Problem3 = () => {
  const createLimitedCounter = (number, limit) => {
    let currentvalue = number
    return () => {
      number = currentvalue
      if (currentvalue < limit) currentvalue++
      return number
    }
  }

  const counter = createLimitedCounter(5, 10)
  console.log(counter()) // 5
  console.log(counter()) // 6
  console.log(counter()) // 7
  console.log(counter()) // 8
  console.log(counter()) // 9
  console.log(counter()) // 10
  console.log(counter()) // 10

  return <div>Problem3</div>
}

export default Problem3
