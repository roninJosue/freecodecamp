const pairElement = (str) => {
  const pairs = {
    A: 'T',
    T: 'A',
    C: 'G',
    G: 'C'
  }
  return str.split('')
    .map(x => [x, pairs[x]])
}

console.log(pairElement("ATCGA"))