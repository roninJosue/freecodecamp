const sumPrimes = (num) => {
  return [...createOddNumbersArr(num)]
    .filter((prime) => {
      let top = Math.ceil(Math.sqrt(prime))
      for (let index = 3; index <= top; index++) {
        if (prime % index === 0) return false
      }
      return true
    })
    .reduce((acc, prime) => acc + prime, 2)

  function createOddNumbersArr(n) {
    let primes = []
    for (let index = 3; index <= n; index++) {
      if (index % 2 !== 0) primes.push(index)
    }
    return primes
  }
}

console.log(sumPrimes(25))