Array.prototype.removeDuplicates = function () {
  for (var i = 0; i < this.length; i++) {
    for (var j = i + 1; j < this.length; j++) {
      if (this[i] === this[j]) {
        this.splice(j, 1)
      }
    }
  }
  return this
}

// // Example usage:
const arr1 = [1, 2, 2, 3, 4, 4]
const arr2 = [5, 5, 6, 7]
console.log(arr1.removeDuplicates()) // Should return [1, 2, 3, 4]
console.log(arr2.removeDuplicates()) // Should return [5, 6, 7]

////optimzied version
Array.prototype.removeDuplicates = function () {
  // Convert the array to a Set, which automatically removes duplicates
  const uniqueArray = [...new Set(this)]
  // Copy the unique values back to the original array
  this.length = 0 // Clear the original array
  this.push(...uniqueArray) // Add the unique values back
  return this
}

// Example usage:
const arr11 = [1, 2, 2, 3, 4, 4]
const arr12 = [5, 5, 6, 7]
console.log(arr1.removeDuplicates()) // Should return [1, 2, 3, 4]
console.log(arr2.removeDuplicates()) // Should return [5, 6, 7]
