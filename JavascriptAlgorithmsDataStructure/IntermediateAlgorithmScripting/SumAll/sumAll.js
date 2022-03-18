const sumAll = (arr) => {
  const min = Math.min(...arr)
  const max = Math.max(...arr)
  let sum = 0

  for (let index = min; index <= max; index++) {
    sum += index
  }

  return sum
}

console.log(sumAll([4, 1]))