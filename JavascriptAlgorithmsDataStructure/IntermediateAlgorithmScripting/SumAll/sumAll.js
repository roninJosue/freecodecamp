const sumAll = (arr) => {
  const [first, last] = arr.sort((a, b) => a - b)
  const count = Math.abs(first - last) + 1

  return ((count * (first + last)) / 2)
}

console.log(sumAll([10, 5]))