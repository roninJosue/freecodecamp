const chunkArrayInGroups = (arr, size) => {
  let chunkArray = []
  for (let index = 0, sizeArr = arr.length; index < sizeArr; index += size) {
    chunkArray.push(arr.slice(index, index + size))
  }
  return chunkArray
}

console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 5))