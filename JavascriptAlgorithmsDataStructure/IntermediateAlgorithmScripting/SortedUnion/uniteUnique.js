const uniteUnique = (...arr) => {
  return arr
    .reduce((acc, curr) => [...acc, ...curr], [])
    .reduce((acc, curr) => {
      if (acc.includes(curr)) return acc
      return [...acc, curr]
    }, [])
}

console.log(uniteUnique([1, 3, 2, 3], [5, 2, 1, 4], [2, 1]))
