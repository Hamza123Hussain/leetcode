const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('I am timeout')
  }, 2000)
})
