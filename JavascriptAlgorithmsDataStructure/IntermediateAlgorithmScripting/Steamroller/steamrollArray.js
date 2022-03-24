const steamrollArray = (array) => {
  let res = []
  const recursive = (arr) => {
    arr.forEach(element => {
      Array.isArray(element) ?
        recursive(element) :
        res.push(element)
    })
  }

  recursive(array)
  return res
}

console.log(steamrollArray([[["a"]], [["b"]]]))