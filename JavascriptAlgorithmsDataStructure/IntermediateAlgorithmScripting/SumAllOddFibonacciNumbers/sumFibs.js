const sumFibs = (num) => {
  const array = createFibSequence(num)

  return array.reduce((acc, curr) => {
    return acc += (curr % 2 !== 0) ? curr : 0
  }, 0)

  function createFibSequence(n) {
    let arr = [0, 1]
    let index = 2
    let curr = 0

    while (curr <= n) {
      curr = arr[index - 2] + arr[index - 1]
      if (curr <= num) arr.push(curr)
      index++
    }
    return arr
  }
}

console.log(sumFibs(10))