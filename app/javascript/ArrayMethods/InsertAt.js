Array.prototype.insertAt = function (index, elementValue) {
  // Handle negative index by inserting at the start
  if (index < 0) {
    this.unshift(elementValue)
  }
  // Handle index out of bounds by appending to the end
  else if (index >= this.length) {
    this.push(elementValue)
  }
  // Handle valid index by inserting at the specified position
  else {
    this.splice(index, 0, elementValue)
  }
  return this
}

const arr1 = [1, 2, 3]
const arr2 = ['a', 'b']
console.log(arr1.insertAt(1, 5)) // Should return [1, 5, 2, 3]
console.log(arr2.insertAt(5, 'z')) // Should return ['a', 'b', 'z']
