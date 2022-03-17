const getIndexToIns = (arr, num) => [...arr, num].sort((a, b) => a - b).indexOf(num)

console.log(getIndexToIns([50, 40, 30, 20, 10], 35))