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

promise.then((data) => {
  console.log(data)
  return promise2
    .then((data) => {
      console.log(data)
      return promise3.then((data) => {
        console.log(data)
      })
    })
    .catch((error) => {
      console.log('I am error')
    })
})
