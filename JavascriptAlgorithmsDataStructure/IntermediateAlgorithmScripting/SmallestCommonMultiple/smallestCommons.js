const smallestCommons = (arr) => {
  let range = []

  for (let index = Math.max(...arr); index >= Math.min(...arr); index--) {
    range.push(index)
  }

  let lcm = range[0]
  for (let index = 1; index < range.length; index++) {
    let GCD = gcd(lcm, range[index])
    lcm = (lcm * range[index]) / GCD
  }
  return lcm

  // Euclidean Algorithm
  function gcd(x, y) {
    if (y === 0) return x
    return gcd(y, x % y)
  }
}

console.log(smallestCommons([23, 18]))