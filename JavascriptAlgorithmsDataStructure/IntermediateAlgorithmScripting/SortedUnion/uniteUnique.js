const uniteUnique = (...arr) => {
  const temp = []
  arr.forEach(a => {
    a.forEach(x => {
      if (!temp.includes(x)) {
        temp.push(x)
      }
    })
  })
  return temp
}

console.log(uniteUnique([1, 3, 2, 3], [5, 2, 1, 4], [2, 1]))
