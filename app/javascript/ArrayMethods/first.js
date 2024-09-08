Array.prototype.first = function () {
  if (this.length == 0) {
    return -1
  }
  return this[0]
}

// // Example usage:
const arr1 = [1, 2, 3]
const arr2 = []
console.log(arr1.first()) // Should return 1
console.log(arr2.first()) // Should return -1
/**
 * @return {Array}
 */
