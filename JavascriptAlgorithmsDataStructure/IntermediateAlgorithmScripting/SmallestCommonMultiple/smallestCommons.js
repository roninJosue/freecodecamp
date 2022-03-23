const smallestCommons = (arr) => {
  let min = Math.min(...arr)
  let max = Math.max(...arr)
  let array = []

  for (min; min <= max; min++) {
    array.push(min)
  }

  let n = max * (max - 1)

  const lowestCommons = (currentValue) => n % currentValue === 0

  let common = array.every(lowestCommons)

  while (common === false) {
    n++
    common = array.every(lowestCommons)
  }

  return n
}

console.log(smallestCommons([23, 18]))