const fearNotLetter = (str) => {
  const letters = 'abcdefghijklmnopqrstuvwxyz'
  const startIndex = letters.indexOf(str[0])

  return letters.split('')
    .splice(startIndex, str.length)
    .filter(letter => !str.split('').includes(letter))[0]
}

console.log(fearNotLetter('abcde'))