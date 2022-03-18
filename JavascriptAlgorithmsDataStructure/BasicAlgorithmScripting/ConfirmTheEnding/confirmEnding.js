const confirmEnding = (str, target) => {
  const regex = new RegExp(`${target}$`, 'ig')
  return regex.test(str)
}

console.log(confirmEnding("Congratulation", "on"))