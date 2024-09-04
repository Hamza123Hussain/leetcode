// Problem: Write a function filterAndTransform that takes an array and a filter function, and returns a new array where the elements are first filtered by the filter function and then transformed by a provided transformation function.
let filterAndTransform = (array, filterFn, transformFn) => {
  let newarr = []

  for (let i = 0; i < array.length; i++) {
    if (filterFn(array[i])) {
      newarr.push(transformFn(array[i]))
    }
  }

  return newarr
}

const filterFn = (n) => n > 5
const transformFn = (n) => n * 2
const array = [1, 6, 8, 3, 7]
const result = filterAndTransform(array, filterFn, transformFn) // Filtered: [6, 8, 7]; Transformed: [12, 16, 14]
console.log(result) // Output: [12, 16, 14]
