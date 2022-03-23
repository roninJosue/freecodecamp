const smallestCommons = (arr) => {
  const start = Math.min(...arr)
  const end = Math.max(...arr)
  const arrSeq = Array.from({length: (end - start) + 1},
    (_, index) => start + (index))
    .filter(n => n > 1)

  const primeFactors = arrSeq.map(number => primeFactorization(number))

  const lcm = primeFactors.reduce((acc, curr) => {
    Object.keys(curr).map(key => {
      acc[key] = curr[key]
      if (!acc.hasOwnProperty(key)) {
      } else if (acc[key] < curr[key]) {
        acc[key] = curr[key]
      }
    })
    return acc
  }, {})

  return Object.entries(lcm).reduce((x, curr) => {
    return x * ((parseInt(curr[0])) ** parseInt(curr[1]))
  }, 1)

  function primeFactorization(number) {
    const primes = [2, 3, 5, 7, 11]
    let obj = {}
    let init = 0

    do {
      if (number % primes[init] === 0) {
        number /= primes[init]
        obj[primes[init]] = (obj[primes[init]] || 0) + 1
      } else {
        init++
      }
    } while (init < primes.length)
    if (number > 1) {
      obj[number] = 1
    }

    return obj
  }

}

console.log(smallestCommons([23, 18]))