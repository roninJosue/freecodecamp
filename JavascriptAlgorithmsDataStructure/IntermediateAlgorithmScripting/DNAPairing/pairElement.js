const pairElement = (str) => {
  const DNAPairs = [['A', 'T'], ['G', 'C']]
  return str.split('').map(item => {
    return DNAPairs.reduce((acc, dna) => {
      if (dna.includes(item)) {
        let index = dna.indexOf(item) === 0 ? 1 : 0
        return [...acc, item, dna[index]]
      }
      return [...acc]
    }, [])
  })
}

console.log(pairElement("ATCGA"))