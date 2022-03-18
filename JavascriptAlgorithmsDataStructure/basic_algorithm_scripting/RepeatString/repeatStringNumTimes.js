const repeatStringNumTimes = (str, num) => {
  let repeat = ''
  for (let index = 0; index < num; index++) {
    repeat += str
  }
  return repeat
}

console.log(repeatStringNumTimes('*', 8))