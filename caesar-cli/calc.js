function sum(arr) {
  return arr.reduce((prev, item) => {
    return prev + item;
  }, 0)
}

module.exports.sum = sum;