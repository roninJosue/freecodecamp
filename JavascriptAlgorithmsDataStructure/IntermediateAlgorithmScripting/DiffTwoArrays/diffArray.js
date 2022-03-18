const diffArray = (arr1, arr2) => {
  function arrFilter(arrA, arrB) {
    return arrA.filter(item => arrB.indexOf(item) < 0)
  }

  let diff1 = arrFilter(arr1, arr2)
  let diff2 = arrFilter(arr2, arr1)

  return [...diff1, ...diff2]

}

console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]))