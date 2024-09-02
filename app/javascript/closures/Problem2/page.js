const createCounter = (number) => {
  let currentvalue = number
  return {
    reset: () => {
      currentvalue = number
      return number
    },
    getValue: () => {
      return currentvalue
    },
    increment: () => {
      currentvalue++
      number = currentvalue
      return number
    },
    decrement: () => {
      currentvalue--
      number = currentvalue
      return number
    },
  }
}
const counter = createCounter(5)
console.log(counter.increment()) // 6
console.log(counter.getValue()) // 6
console.log(counter.decrement()) // 5
console.log(counter.reset()) // 5
console.log(counter.getValue()) // 5
