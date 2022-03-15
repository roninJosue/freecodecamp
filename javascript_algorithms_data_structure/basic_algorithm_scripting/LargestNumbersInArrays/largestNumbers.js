const largestNumbers = (arr) => {
  let largest = []
  for (let index = 0, len = arr.length; index < len; index++){
    largest.push(Math.max(...arr[index]))
  }
  return largest
}

console.log(largestNumbers([[4, 9, 1, 3], [13, 35, 18, 26], [32, 35, 97, 39], [1000000, 1001, 857, 1]]))