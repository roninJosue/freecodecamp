const addTogether = (...arr) => {
  const checkNum = (num) => typeof num !== 'number'

  if ((arr.length === 2 && !arr.every(n => !checkNum(n))
    || checkNum(arr[0]))) {
    return undefined
  }

  return arr.length > 1
    ? arr.reduce((sum, num) => sum + num, 0)
    : (num) => checkNum(num) ? undefined : arr[0] + num
}

console.log(addTogether(4, 4))