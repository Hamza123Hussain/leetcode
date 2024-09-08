/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
function groupBySize(arr, size) {
  let result = []

  // Handle empty array
  if (arr.length === 0) {
    return []
  }

  // Handle case where size is greater than array length
  if (size > arr.length) {
    result.push(arr)
    return result
  }

  // Chunk the array into parts of the specified size
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size))
  }

  return result
}

// Example usage:
const arr1 = [1, 2, 3, 4, 5, 6]
const size1 = 2
console.log(groupBySize(arr1, size1)) // Output: [[1, 2], [3, 4], [5, 6]]

const arr2 = [1, 2, 3, 4, 5]
const size2 = 3
console.log(groupBySize(arr2, size2)) // Output: [[1, 2, 3], [4, 5]]
