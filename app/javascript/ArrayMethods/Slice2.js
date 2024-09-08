/**Problem: Given an array and a page size, return the elements of the specified page.
 * The first page starts at index 0. Each page contains a number of elements equal to the page size.
 **/
function paginateArray(arr, pageSize, pageNumber) {
  const start = pageNumber * pageSize
  const end = start + pageSize
  return arr.slice(start, end)
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const pageSize = 3
const pageNumber = 2 // 0-based index, so this is the third page

console.log(paginateArray(arr, pageSize, pageNumber))
