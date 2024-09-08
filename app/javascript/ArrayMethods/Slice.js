/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
function groupBySize(arr, size) {
  let arr2 = []
  if (arr.length === 0) {
    return []
  }
  if (size > arr.length) {
    arr2.push(arr)
    return arr2
  }
  for (let i = 0; i < arr.length; i += size) {
    arr2.push(arr.slice(i, size + i))
  }
  return arr2
}

// Example usage:
const arr1 = [1, 2, 3, 4, 5, 6]
const size1 = 2
console.log(groupBySize(arr1, size1)) // Output: [[1, 2], [3, 4], [5, 6]]

const arr2 = [1, 2, 3, 4, 5]
const size2 = 3
console.log(groupBySize(arr2, size2)) // Output: [[1, 2, 3], [4, 5]]
