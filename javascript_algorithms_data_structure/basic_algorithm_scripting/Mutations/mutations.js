const mutations = (arr) => {
  let newArr = arr.map(word => word.toLowerCase())

  for (let index = 0, size = newArr[1].length; index < size; index++) {
    if (newArr[0].indexOf(newArr[1][0]) < 0) {
      return false
    }
  }

  return true
}

console.log(mutations(["hello", "hey"]))