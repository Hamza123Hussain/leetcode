Array.prototype.removeElement = function (elementValue) {
  let index = this.indexOf(elementValue)
  while (index !== -1) {
    this.splice(index, 1)
    index = this.indexOf(elementValue) // Find the next occurrence
  }
  return this
}
