const promise = new Promise((resolve, reject) => {
  resolve('heiii')
})

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject('I am timeout')
  }, 200)
})

const promise3 = new Promise((resolve, reject) => {
  resolve('I am third')
})
/**Promise.all takes an array of promises and returns a single promise that resolves when all of the promises in the array have resolved.
 *  If any promise in the array rejects, Promise.all immediately rejects with the reason from the first promise that rejected.
Use Promise.all when you need to wait for all promises to succeed and you want to handle errors if any promise fails.
It's ideal when the success of all promises is crucial to proceed. */
Promise.all([p1, p2, p3])
  .then((results) => console.log(results))
  .catch((error) => console.log(error)) // Output: Error

//  Promise.allSettled takes an array of promises and returns a single promise that resolves after all the promises have either resolved or rejected.
//   It provides an array of objects that describe the outcome of each promise, regardless of whether they were fulfilled or rejected.
// Use Promise.allSettled when you want to handle all outcomes (both resolved and rejected) of the promises.
//  This is useful when you need to process results of all promises even if some of them fail.

Promise.allSettled([promise, promise2, promise3]).then((results) => {
  results.forEach((result, index) => {
    if (result.status === 'fulfilled') {
      console.log(`Promise ${index + 1} resolved with value: ${result.value}`)
    } else if (result.status === 'rejected') {
      console.log(`Promise ${index + 1} rejected with reason: ${result.reason}`)
    }
  })
})
