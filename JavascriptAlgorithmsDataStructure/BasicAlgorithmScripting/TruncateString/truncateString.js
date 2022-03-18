const truncateString = (str, num) => {
  return str.split('')
    .splice(0, num)
    .join('') + (num < str.length ? '...' : '')
}

console.log(truncateString('Peter Piper picked a peck of pickled peppers', 11))
