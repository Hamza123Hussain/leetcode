Array.prototype.replaceElement = function (oldValue, newValue) {
  // Use forEach to iterate through each element in the array
  this.forEach((element, index) => {
    // Check if the current element is equal to oldValue
    if (element === oldValue) {
      // Replace it with newValue
      this[index] = newValue
    }
  })
  return this
}

// Example usage:
const arr1 = [1, 2, 3, 2]
const arr2 = ['a', 'b', 'a']
console.log(arr1.replaceElement(2, 4)) // Should return [1, 4, 3, 4]
console.log(arr2.replaceElement('a', 'c')) // Should return ['c', 'b', 'c']
