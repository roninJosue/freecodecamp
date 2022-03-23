const sumPrimes = (number) => {
  let arr = createOddNumbersArr(number)
  for (let n in arr) {
    arr = arr.filter(val => val === arr[n] || val % arr[n] !== 0)
  }

  return arr.reduce((sum, curr) => sum + curr)

  function createOddNumbersArr(n) {
    return Array.from({length: n + 1})
      .map((_, index) => index)
      .slice(2)
  }
}

console.log(sumPrimes(10))